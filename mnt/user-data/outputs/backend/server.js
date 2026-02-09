const fs = require('fs');
const http = require('http');
const path = require('path');
const { URL } = require('url');

const PORT = Number(process.env.PORT || 3000);
const DATA_FILE = path.join(__dirname, 'data.json');
const ADMIN_FILE = path.join(__dirname, 'admin', 'index.html');
const VALID_STATUSES = new Set(['pending', 'processing', 'completed', 'cancelled']);

function nowIso() {
  return new Date().toISOString();
}

function parseDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function isSameLocalDate(dateA, dateB) {
  return dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate();
}

function seedData() {
  const now = Date.now();
  const orders = [
    {
      id: 1003,
      status: 'pending',
      customer: { name: '王小明', phone: '0912345678', method: 'delivery', address: '楊梅區中山路149-1號', notes: '到樓下請電聯' },
      items: [{ name: '珍珠奶茶', size: 'L', price: 65, quantity: 2, total: 130 }],
      total: 130,
      createdAt: new Date(now - 1000 * 60 * 8).toISOString()
    },
    {
      id: 1002,
      status: 'processing',
      customer: { name: '陳小姐', phone: '0922333444', method: 'pickup', address: '', notes: '17:30 來拿' },
      items: [{ name: '四季春青茶', size: 'L', price: 35, quantity: 3, total: 105 }],
      total: 105,
      createdAt: new Date(now - 1000 * 60 * 30).toISOString()
    },
    {
      id: 1001,
      status: 'completed',
      customer: { name: '林先生', phone: '0988777666', method: 'delivery', address: '楊梅區文化街20號', notes: '' },
      items: [{ name: '烏龍拿鐵', size: 'L', price: 60, quantity: 2, total: 120 }],
      total: 120,
      createdAt: new Date(now - 1000 * 60 * 60 * 2).toISOString()
    }
  ];

  const members = [
    { id: 1, name: '王小明', phone: '0912345678', email: '', createdAt: new Date(now - 1000 * 60 * 60 * 24 * 30).toISOString() },
    { id: 2, name: '陳小姐', phone: '0922333444', email: '', createdAt: new Date(now - 1000 * 60 * 60 * 24 * 18).toISOString() },
    { id: 3, name: '林先生', phone: '0988777666', email: '', createdAt: new Date(now - 1000 * 60 * 60 * 24 * 8).toISOString() }
  ];

  return {
    orders,
    members,
    nextOrderId: 1004,
    nextMemberId: 4
  };
}

function loadState() {
  if (!fs.existsSync(DATA_FILE)) {
    const initial = seedData();
    fs.writeFileSync(DATA_FILE, JSON.stringify(initial, null, 2), 'utf8');
    return initial;
  }

  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return {
      orders: Array.isArray(parsed.orders) ? parsed.orders : [],
      members: Array.isArray(parsed.members) ? parsed.members : [],
      nextOrderId: Number(parsed.nextOrderId || 1),
      nextMemberId: Number(parsed.nextMemberId || 1)
    };
  } catch (error) {
    console.warn('data.json 讀取失敗，使用預設資料:', error.message);
    const fallback = seedData();
    fs.writeFileSync(DATA_FILE, JSON.stringify(fallback, null, 2), 'utf8');
    return fallback;
  }
}

function saveState(state) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(state, null, 2), 'utf8');
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(payload));
}

function sendHtmlFile(res, filePath) {
  fs.readFile(filePath, 'utf8', (error, content) => {
    if (error) {
      sendJson(res, 500, { success: false, message: '讀取頁面失敗' });
      return;
    }
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });
    res.end(content);
  });
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', chunk => {
      raw += chunk;
      if (raw.length > 1024 * 1024) {
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      if (!raw.trim()) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(new Error('Invalid JSON'));
      }
    });
    req.on('error', reject);
  });
}

function calcStats(orders) {
  const today = new Date();
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(o => o.status === 'pending').length;
  const completedOrders = orders.filter(o => o.status === 'completed').length;
  const todayRevenue = orders.reduce((sum, order) => {
    const createdAt = parseDate(order.createdAt);
    if (!createdAt || order.status === 'cancelled' || !isSameLocalDate(createdAt, today)) {
      return sum;
    }
    return sum + Number(order.total || 0);
  }, 0);

  return { totalOrders, pendingOrders, completedOrders, todayRevenue };
}

function normalizeOrderPayload(payload) {
  const customerPayload = payload.customer || {};
  const customer = {
    name: String(customerPayload.name || payload.customerName || '未命名客戶').trim(),
    phone: String(customerPayload.phone || payload.customerPhone || '').trim(),
    method: customerPayload.method === 'pickup' ? 'pickup' : 'delivery',
    address: String(customerPayload.address || payload.deliveryAddress || '').trim(),
    notes: String(customerPayload.notes || payload.notes || '').trim()
  };

  const rawItems = Array.isArray(payload.items) ? payload.items : [];
  const items = rawItems.map(item => {
    const quantity = Number(item.quantity || 1);
    const price = Number(item.price || 0);
    return {
      name: String(item.name || '未命名品項'),
      size: String(item.size || 'L'),
      price,
      quantity,
      total: Number(item.total || quantity * price)
    };
  });

  const calculatedTotal = items.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const total = Number(payload.total || calculatedTotal);
  const status = VALID_STATUSES.has(payload.status) ? payload.status : 'pending';

  return { customer, items, total, status };
}

function ensureMember(state, customer) {
  if (!customer.phone) return;
  const existing = state.members.find(member => member.phone === customer.phone);
  if (existing) {
    existing.name = customer.name || existing.name;
    return;
  }

  state.members.push({
    id: state.nextMemberId++,
    name: customer.name || '未命名會員',
    phone: customer.phone,
    email: '',
    createdAt: nowIso()
  });
}

const state = loadState();
const sseClients = new Set();

function broadcast(eventPayload) {
  const data = `data: ${JSON.stringify(eventPayload)}\n\n`;
  for (const client of sseClients) {
    client.write(data);
  }
}

setInterval(() => {
  for (const client of sseClients) {
    client.write(': keep-alive\n\n');
  }
}, 25000);

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  if (req.method === 'GET' && (pathname === '/' || pathname === '/admin' || pathname === '/admin/' || pathname === '/admin/index.html')) {
    sendHtmlFile(res, ADMIN_FILE);
    return;
  }

  if (req.method === 'GET' && pathname === '/api') {
    sendJson(res, 200, { success: true, message: 'Kung Fu Tea backend is running' });
    return;
  }

  if (req.method === 'GET' && pathname === '/api/stats') {
    sendJson(res, 200, { success: true, stats: calcStats(state.orders) });
    return;
  }

  if (req.method === 'GET' && pathname === '/api/orders') {
    const orders = [...state.orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    sendJson(res, 200, { success: true, orders });
    return;
  }

  if (req.method === 'POST' && pathname === '/api/orders') {
    try {
      const body = await parseBody(req);
      const normalized = normalizeOrderPayload(body);
      const order = {
        id: state.nextOrderId++,
        status: normalized.status,
        customer: normalized.customer,
        items: normalized.items,
        total: normalized.total,
        createdAt: nowIso()
      };

      state.orders.push(order);
      ensureMember(state, order.customer);
      saveState(state);
      broadcast({ type: 'NEW_ORDER', order });
      sendJson(res, 201, { success: true, order });
    } catch (error) {
      sendJson(res, 400, { success: false, message: error.message });
    }
    return;
  }

  const statusMatch = pathname.match(/^\/api\/orders\/(\d+)\/status$/);
  if (req.method === 'PUT' && statusMatch) {
    const orderId = Number(statusMatch[1]);
    const order = state.orders.find(item => Number(item.id) === orderId);
    if (!order) {
      sendJson(res, 404, { success: false, message: '找不到訂單' });
      return;
    }

    try {
      const body = await parseBody(req);
      const status = String(body.status || '').trim();
      if (!VALID_STATUSES.has(status)) {
        sendJson(res, 400, { success: false, message: '無效的訂單狀態' });
        return;
      }
      order.status = status;
      order.updatedAt = nowIso();
      saveState(state);
      broadcast({ type: 'ORDER_UPDATED', order });
      sendJson(res, 200, { success: true, order });
    } catch (error) {
      sendJson(res, 400, { success: false, message: error.message });
    }
    return;
  }

  if (req.method === 'GET' && pathname === '/api/members') {
    const members = [...state.members].sort((a, b) => Number(a.id) - Number(b.id));
    sendJson(res, 200, { success: true, members });
    return;
  }

  const memberOrdersMatch = pathname.match(/^\/api\/members\/(\d+)\/orders$/);
  if (req.method === 'GET' && memberOrdersMatch) {
    const memberId = Number(memberOrdersMatch[1]);
    const member = state.members.find(item => Number(item.id) === memberId);
    if (!member) {
      sendJson(res, 200, { success: true, orders: [] });
      return;
    }
    const orders = state.orders.filter(order => order.customer && order.customer.phone === member.phone);
    sendJson(res, 200, { success: true, orders });
    return;
  }

  if (req.method === 'GET' && pathname === '/api/events') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      'Access-Control-Allow-Origin': '*'
    });
    res.write(': connected\n\n');
    sseClients.add(res);
    req.on('close', () => sseClients.delete(res));
    return;
  }

  sendJson(res, 404, { success: false, message: 'API route not found' });
});

server.listen(PORT, () => {
  console.log(`[backend] listening on http://localhost:${PORT}`);
  console.log(`[backend] data file: ${DATA_FILE}`);
});
