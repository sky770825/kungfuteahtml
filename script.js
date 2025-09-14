// 功夫茶點餐系統 JavaScript
// 加料選項資料
const toppings = [
  { name: "黑糖波霸", price: 10, displayName: "波霸" },
  { name: "仙草", price: 10, displayName: "仙草" },
  { name: "寒天球", price: 10, displayName: "寒天球" },
  { name: "蒟蒻", price: 10, displayName: "蒟蒻" },
  { name: "愛玉", price: 10, displayName: "愛玉" },
  { name: "38料粉條", price: 10, displayName: "38料粉條" }
];

// 飲品資料
const menuData = [
  // 功夫・好茶
  { name: "功夫茶王", category: "功夫・好茶", prices: { 'L': 45 }, notes: "★ 無糖微冰限定, 不可加料", fixedOptions: { sugar: "無糖", ice: "微冰" }, canAddToppings: false },
  { name: "岩葉紅茶", category: "功夫・好茶", prices: { 'L': 35, '瓶': 55 }, canAddToppings: true },
  { name: "翠玉綠茶", category: "功夫・好茶", prices: { 'L': 35, '瓶': 55 }, canAddToppings: true },
  { name: "四季春青茶", category: "功夫・好茶", prices: { 'L': 35, '瓶': 55 }, canAddToppings: true },
  { name: "烏龍觀音", category: "功夫・好茶", prices: { 'L': 35, '瓶': 55 }, canAddToppings: true },
  { name: "蜜桃胭脂紅茶", category: "功夫・好茶", prices: { 'L': 40, '瓶': 60 }, canAddToppings: true },
  { name: "手作冬瓜茶", category: "功夫・好茶", prices: { 'L': 35 }, notes: "甜度固定", fixedOptions: { sugar: "甜度固定" }, canAddToppings: true },
  { name: "阿里山冰茶", category: "功夫・好茶", prices: { 'L': 50 }, notes: "推薦, 不可加料, 不可做熱飲", canAddToppings: false },
  { name: "日月潭紅玉", category: "功夫・好茶", prices: { 'L': 50 }, notes: "推薦, 不可加料, 不可做熱飲", canAddToppings: false },

  // 特調・奶蓋
  { name: "芝士奶蓋綠茶/青茶", category: "特調・奶蓋", prices: { 'L': 70 }, teaOptions: ["綠茶", "青茶"], canAddToppings: true },
  { name: "芝士奶蓋紅茶/烏龍", category: "特調・奶蓋", prices: { 'L': 70 }, teaOptions: ["紅茶", "烏龍"], canAddToppings: true },
  { name: "玫瑰冰茶", category: "特調・奶蓋", prices: { 'L': 55 }, notes: "甜度固定", fixedOptions: { sugar: "甜度固定" }, canAddToppings: true },
  { name: "青梅綠茶", category: "特調・奶蓋", prices: { 'L': 55 }, canAddToppings: true },
  { name: "多多綠茶", category: "特調・奶蓋", prices: { 'L': 60 }, canAddToppings: true },
  { name: "胭脂多多", category: "特調・奶蓋", prices: { 'L': 60 }, canAddToppings: true },
  { name: "粉粿胭脂紅", category: "特調・奶蓋", prices: { 'L': 50 }, canAddToppings: true },
  { name: "冰淇淋岩葉紅茶", category: "特調・奶蓋", prices: { 'L': 60 }, notes: "最低微冰", canAddToppings: true },

  // 功夫・鮮奶
  { name: "黑糖波霸鮮奶", category: "功夫・鮮奶", prices: { 'M': 65, 'L': 80 }, notes: "無另外加糖", noSugarOptions: true, canAddToppings: true },
  { name: "紅豆粉粿鮮奶", category: "功夫・鮮奶", prices: { 'M': 65, 'L': 80 }, notes: "★ 黃金比例", fixedOptions: { sugar: "黃金比例" }, canAddToppings: false },
  { name: "巧克力鮮奶", category: "功夫・鮮奶", prices: { 'L': 75 }, canAddToppings: true },
  { name: "岩葉紅茶拿鐵", category: "功夫・鮮奶", prices: { 'M': 55, 'L': 65 }, canAddToppings: true },
  { name: "烏龍觀音拿鐵", category: "功夫・鮮奶", prices: { 'M': 55, 'L': 65 }, canAddToppings: true },
  { name: "英式伯爵拿鐵", category: "功夫・鮮奶", prices: { 'L': 70 }, canAddToppings: true },
  { name: "蜜桃胭脂拿鐵", category: "功夫・鮮奶", prices: { 'L': 70 }, canAddToppings: true },
  { name: "冰淇淋紅茶拿鐵", category: "功夫・鮮奶", prices: { 'L': 75 }, notes: "最低微冰", canAddToppings: true },

  // 功夫・奶茶
  { name: "38奶霸", category: "功夫・奶茶", prices: { 'M': 60, 'L': 65 }, notes: "★ 含波霸+蒟蒻+仙草", canAddToppings: false },
  { name: "黑糖波霸奶茶", category: "功夫・奶茶", prices: { 'M': 55, 'L': 60 }, notes: "★", canAddToppings: true },
  { name: "咖啡凍奶茶", category: "功夫・奶茶", prices: { 'M': 60, 'L': 65 }, canAddToppings: true },
  { name: "厚奶茶/奶綠", category: "功夫・奶茶", prices: { 'M': 50, 'L': 55 }, canAddToppings: true },
  { name: "烏龍觀音奶茶", category: "功夫・奶茶", prices: { 'M': 50, 'L': 55 }, canAddToppings: true },
  { name: "英式伯爵奶茶", category: "功夫・奶茶", prices: { 'L': 65 }, canAddToppings: true },
  { name: "蜜桃胭脂奶茶", category: "功夫・奶茶", prices: { 'L': 65 }, canAddToppings: true },
  { name: "莊園玫瑰奶茶", category: "功夫・奶茶", prices: { 'L': 65 }, canAddToppings: true },
  { name: "巧克力奶茶", category: "功夫・奶茶", prices: { 'L': 65 }, canAddToppings: true },

  // 職人・特選
  { name: "隱山烏龍", category: "職人・特選", prices: { 'L': 45 }, notes: "★ 無糖限定, 不可加料", fixedOptions: { sugar: "無糖" }, canAddToppings: false },
  { name: "星桃樂胭脂", category: "職人・特選", prices: { '單一價': 75 }, notes: "★ 黃金比例", fixedOptions: { sugar: "黃金比例", ice: "黃金比例" }, canAddToppings: false },

  // 功夫・水果
  { name: "輕飲水果茶王", category: "功夫・水果", prices: { 'L': 65 }, notes: "★ 推薦, 不可加料", canAddToppings: false },
  { name: "寒天柚香飲", category: "功夫・水果", prices: { 'L': 65 }, canAddToppings: true },
  { name: "粉裸柚香綠", category: "功夫・水果", prices: { 'L': 65 }, canAddToppings: true },
  { name: "鮮榨柳橙綠", category: "功夫・水果", prices: { 'L': 65 }, notes: "推薦, 甜度固定", fixedOptions: { sugar: "甜度固定" }, canAddToppings: true },
  { name: "芭樂檸檬綠", category: "功夫・水果", prices: { 'L': 70 }, notes: "★ 黃金比例", fixedOptions: { sugar: "黃金比例", ice: "黃金比例" }, canAddToppings: false },
  { name: "黃金芒果綠", category: "功夫・水果", prices: { 'L': 60 }, canAddToppings: true },
  { name: "百香3Q", category: "功夫・水果", prices: { 'L': 60 }, notes: "不含茶, 含波霸+蒟蒻+椰果", canAddToppings: false },
  { name: "百香羅勒子", category: "功夫・水果", prices: { 'L': 55 }, notes: "不含茶", canAddToppings: true },
  { name: "冬瓜輕檸檬", category: "功夫・水果", prices: { 'L': 55 }, notes: "不含茶, 甜度固定", fixedOptions: { sugar: "甜度固定" }, canAddToppings: true },
  { name: "黃金芒果莎莎", category: "功夫・水果", prices: { 'L': 60 }, notes: "★ 冰沙", fixedOptions: { sugar: "", ice: "冰沙" }, noSugarOptions: true, canAddToppings: false },
  { name: "泰式榴槤莎莎", category: "功夫・水果", prices: { 'L': 110 }, notes: "★ 熱銷限定, 冰沙", fixedOptions: { sugar: "", ice: "冰沙" }, noSugarOptions: true, canAddToppings: false },
];

// 全域變數
let currentOrder = [];
let currentBeverage = null;
let savedOrders = JSON.parse(localStorage.getItem('kungfuTeaOrders') || '[]');

// DOM 元素
const menuContainer = document.getElementById('menu-container');
const orderContainer = document.getElementById('order-container');
const totalAmountEl = document.getElementById('total-amount');
const orderPreview = document.getElementById('order-preview');
const copyOrderBtn = document.getElementById('copy-order');
const sendOrderBtn = document.getElementById('send-order');
const clearOrderBtn = document.getElementById('clear-order');
const saveOrderBtn = document.getElementById('save-order');
const loadOrdersBtn = document.getElementById('load-orders');
const modal = document.getElementById('order-modal');
const modalTitle = document.getElementById('modal-title');
const sizeOptions = document.getElementById('size-options');
const quantityInput = document.getElementById('quantity');
const addToOrderBtn = document.getElementById('add-to-order');
const cancelOrderBtn = document.getElementById('cancel-order');

// 訂購資訊輸入框
const customerName = document.getElementById('customer-name');
const customerPhone = document.getElementById('customer-phone');
const deliveryAddress = document.getElementById('delivery-address');

// 初始化菜單
function initMenu() {
  const categories = [...new Set(menuData.map(item => item.category))];

  categories.forEach(category => {
    const categoryDropdown = document.createElement('div');
    categoryDropdown.className = 'category-dropdown';

    const categoryHeader = document.createElement('div');
    categoryHeader.className = 'category-header';
    categoryHeader.innerHTML = `
      ${category}
      <span class="dropdown-arrow">▼</span>
    `;

    const categoryContent = document.createElement('div');
    categoryContent.className = 'category-content';

    // 創建該分類下的飲品
    const categoryItems = menuData.filter(item => item.category === category);
    categoryItems.forEach(beverage => {
      const beverageEl = createBeverageElement(beverage);
      categoryContent.appendChild(beverageEl);
    });

    // 點擊標題切換展開/收起
    categoryHeader.addEventListener('click', () => {
      const arrow = categoryHeader.querySelector('.dropdown-arrow');
      const isActive = categoryContent.classList.contains('active');

      if (isActive) {
        categoryContent.classList.remove('active');
        arrow.classList.remove('rotated');
      } else {
        categoryContent.classList.add('active');
        arrow.classList.add('rotated');
      }
    });

    categoryDropdown.appendChild(categoryHeader);
    categoryDropdown.appendChild(categoryContent);
    menuContainer.appendChild(categoryDropdown);
  });
}

// 創建飲品元素
function createBeverageElement(beverage) {
  const beverageEl = document.createElement('div');
  beverageEl.className = 'beverage-item';
  beverageEl.onclick = () => openOrderModal(beverage);

  const pricesText = Object.entries(beverage.prices)
    .map(([size, price]) => `${size} $${price}`)
    .join(' / ');

  let notesHtml = '';
  if (beverage.notes) {
    const cleanNotes = beverage.notes.replace(/★\s*/g, '');
    if (cleanNotes.trim()) {
      let noteClass = 'beverage-notes';
      if (cleanNotes.includes('推薦')) {
        noteClass += ' recommended';
      } else if (cleanNotes.includes('不可加料')) {
        noteClass += ' no-toppings';
      } else if (cleanNotes.includes('無另外加糖') || cleanNotes.includes('無糖')) {
        noteClass += ' no-sugar';
      } else if (cleanNotes.includes('不含茶')) {
        noteClass += ' no-tea';
      } else if (cleanNotes.includes('甜度固定') || cleanNotes.includes('固定')) {
        noteClass += ' fixed-options';
      } else if (cleanNotes.includes('最低微冰')) {
        noteClass += ' ice-limit';
      } else if (cleanNotes.includes('不含咖啡因')) {
        noteClass += ' no-caffeine';
      } else if (cleanNotes.includes('含') && (cleanNotes.includes('波霸') || cleanNotes.includes('蒟蒻') || cleanNotes.includes('仙草'))) {
        noteClass += ' included-toppings';
      } else if (cleanNotes.includes('冰沙')) {
        noteClass += ' smoothie';
      } else if (cleanNotes.includes('限定')) {
        noteClass += ' limited';
      } else if (cleanNotes.includes('不可做熱飲')) {
        noteClass += ' no-hot';
      } else if (cleanNotes.includes('黃金比例')) {
        noteClass += ' golden-ratio';
      }

      notesHtml = `<div class="${noteClass}">${cleanNotes}</div>`;
    }
  }

  // 處理星星圖示
  let displayName = beverage.name;
  if (beverage.notes && beverage.notes.includes('★')) {
    displayName = `<span class="star">★</span> ${beverage.name}`;
  }

  beverageEl.innerHTML = `
    <div class="beverage-name-price">
      <div class="beverage-name-text">${displayName}</div>
      <div class="beverage-price-text">${pricesText}</div>
    </div>
    ${notesHtml}
  `;

  return beverageEl;
}

// 可愛提醒函數
function showCuteAlert(title, message, icon = '😊', details = null) {
  const alertModal = document.getElementById('cute-alert');
  const alertTitle = document.getElementById('alert-title');
  const alertMessage = document.getElementById('alert-message');
  const alertIcon = document.getElementById('alert-icon');
  const alertDetails = document.getElementById('alert-details');
  const missingFields = document.getElementById('missing-fields');
  const okBtn = document.getElementById('alert-ok-btn');

  alertTitle.textContent = title;
  alertMessage.textContent = message;
  alertIcon.textContent = icon;

  if (details) {
    alertDetails.style.display = 'block';
    missingFields.innerHTML = details;
  } else {
    alertDetails.style.display = 'none';
  }

  alertModal.style.display = 'block';

  // 點擊確定按鈕關閉
  okBtn.onclick = () => {
    alertModal.style.display = 'none';
  };

  // 點擊背景關閉
  alertModal.onclick = (e) => {
    if (e.target === alertModal) {
      alertModal.style.display = 'none';
    }
  };
}

// 檢查訂購資訊是否完整
function checkOrderInfo() {
  const name = customerName.value.trim();
  const phone = customerPhone.value.trim();
  const address = deliveryAddress.value.trim();

  if (!name || !phone || !address) {
    const orderInfoSection = document.querySelector('.order-section');
    orderInfoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const missingFields = [];
    if (!name) {
      customerName.style.borderColor = '#ff6b6b';
      customerName.focus();
      missingFields.push('👤 訂購人姓名');
    }
    if (!phone) {
      customerPhone.style.borderColor = '#ff6b6b';
      if (!name) customerPhone.focus();
      missingFields.push('📞 聯絡電話');
    }
    if (!address) {
      deliveryAddress.style.borderColor = '#ff6b6b';
      if (!name && !phone) deliveryAddress.focus();
      missingFields.push('📍 外送地址');
    }

    const detailsHtml = missingFields.map(field => `<div style="margin: 5px 0; color: #e74c3c;">${field}</div>`).join('');

    showCuteAlert(
      '請先填寫訂購資訊！',
      '親愛的顧客，請先填寫完整的訂購資訊後再選擇飲品哦～',
      '🤗',
      detailsHtml
    );
    return false;
  }
  return true;
}

// 距離計算相關功能
const storeAddress = "四維路90號, 楊梅區, 桃園市, 台灣";
let distanceCalculationTimeout;

// 初始化距離計算功能
function initDistanceCalculation() {
  const deliveryAddressInput = document.getElementById('delivery-address');
  let mapsAPILoaded = false;

  deliveryAddressInput.addEventListener('input', function () {
    const address = this.value.trim();
    clearTimeout(distanceCalculationTimeout);
    hideDistanceResult();

    if (address.length > 5) {
      useBackupDistanceCalculation(address);

      if (!mapsAPILoaded && typeof google === 'undefined') {
        loadGoogleMapsAPI();
        mapsAPILoaded = true;
      }
    }
  });
}

// 備用距離計算方法（快速估算）
function useBackupDistanceCalculation(customerAddress) {
  const distanceResult = document.getElementById('distance-result');

  const areaEstimates = {
    '楊梅': 2, '中壢': 8, '桃園': 12, '新竹': 18, '台北': 25, '新北': 20,
    '新莊': 15, '板橋': 18, '三重': 16, '蘆竹': 10, '大園': 8, '觀音': 15,
    '龍潭': 12, '平鎮': 6, '八德': 10, '龜山': 14
  };

  let estimatedDistance = 10;

  for (const [area, distance] of Object.entries(areaEstimates)) {
    if (customerAddress.includes(area)) {
      estimatedDistance = distance;
      break;
    }
  }

  const deliveryLevel = getDeliveryLevel(estimatedDistance);

  distanceResult.innerHTML = `
    <div class="distance-display">
      <span class="distance-icon">📍</span>
      <span class="distance-text">距離店家: <span class="distance-value">約 ${estimatedDistance}</span>公里 (估算)</span>
    </div>
    <div class="delivery-level">
      <span class="level-icon">🚚</span>
      <span class="level-text">外送級別: <span class="level-value ${deliveryLevel.levelClass}">${deliveryLevel.distance}</span></span>
    </div>
    <div class="free-shipping-info">
      <span class="free-icon">💰</span>
      <span class="free-text">免運條件: <span class="free-shipping-value">滿$${deliveryLevel.freeShipping}免運</span></span>
    </div>
    <div style="margin-top: 8px; padding: 8px; background: rgba(255, 193, 7, 0.1); border-radius: 6px; font-size: 0.8rem; color: #856404;">
      ⚠️ 此為估算距離，實際距離請以店家確認為準
    </div>
  `;
  distanceResult.style.display = 'block';
}

// 隱藏距離結果
function hideDistanceResult() {
  const distanceResult = document.getElementById('distance-result');
  distanceResult.style.display = 'none';
}

// 根據距離獲取外送級別
function getDeliveryLevel(distanceKm) {
  const deliveryFeeData = [
    { distance: "2公里以內", fee: 30, freeShipping: 240, minOrder: 120 },
    { distance: "3公里以內", fee: 45, freeShipping: 360, minOrder: 180 },
    { distance: "4公里以內", fee: 60, freeShipping: 480, minOrder: 240 },
    { distance: "5公里以內", fee: 75, freeShipping: 600, minOrder: 300 },
    { distance: "6公里以內", fee: 90, freeShipping: 720, minOrder: 360 },
    { distance: "7公里以內", fee: 105, freeShipping: 840, minOrder: 420 },
    { distance: "8公里以內", fee: 120, freeShipping: 960, minOrder: 480 },
    { distance: "9公里以內", fee: 135, freeShipping: 1080, minOrder: 540 },
    { distance: "10公里以內", fee: 150, freeShipping: 1200, minOrder: 600 },
    { distance: "11公里以內", fee: 165, freeShipping: 1320, minOrder: 660 },
    { distance: "12公里以內", fee: 180, freeShipping: 1440, minOrder: 720 },
    { distance: "13公里以內", fee: 195, freeShipping: 1560, minOrder: 780 },
    { distance: "14公里以內", fee: 210, freeShipping: 1680, minOrder: 840 },
    { distance: "15公里以內", fee: 225, freeShipping: 1800, minOrder: 900 },
    { distance: "16公里以內", fee: 240, freeShipping: 1920, minOrder: 960 },
    { distance: "17公里以內", fee: 255, freeShipping: 2040, minOrder: 1020 },
    { distance: "18公里以內", fee: 270, freeShipping: 2160, minOrder: 1080 },
    { distance: "19公里以內", fee: 285, freeShipping: 2280, minOrder: 1140 },
    { distance: "20公里以內", fee: 300, freeShipping: 2400, minOrder: 1200 }
  ];

  for (let i = 0; i < deliveryFeeData.length; i++) {
    const level = deliveryFeeData[i];
    const maxDistance = parseInt(level.distance.match(/\d+/)[0]);

    if (distanceKm <= maxDistance) {
      let levelClass = 'level-low';
      if (maxDistance >= 15) levelClass = 'level-max';
      else if (maxDistance >= 10) levelClass = 'level-high';
      else if (maxDistance >= 5) levelClass = 'level-medium';

      return {
        distance: level.distance,
        fee: level.fee,
        freeShipping: level.freeShipping,
        minOrder: level.minOrder,
        levelClass: levelClass
      };
    }
  }

  return {
    distance: "超過20公里",
    fee: 300,
    freeShipping: 2400,
    minOrder: 1200,
    levelClass: 'level-max'
  };
}

// 其他核心功能函數...
function openOrderModal(beverage) {
  if (!checkOrderInfo()) return;

  currentBeverage = beverage;
  modalTitle.textContent = beverage.name;

  sizeOptions.innerHTML = '';
  const sizes = Object.keys(beverage.prices);

  sizes.forEach((size, index) => {
    const sizeBtn = document.createElement('div');
    sizeBtn.className = 'option-btn';
    if (index === 0) sizeBtn.classList.add('selected');
    sizeBtn.textContent = `${size} (${beverage.prices[size]})`;
    sizeBtn.onclick = () => selectOption(sizeBtn, 'size');
    sizeOptions.appendChild(sizeBtn);
  });

  // 處理各種選項...
  modal.style.display = 'block';
}

// 其他必要的函數...
function selectOption(btn, type) {
  const parentContainer = btn.parentNode;
  parentContainer.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

// 更新訂單顯示
function updateOrderDisplay() {
  if (currentOrder.length === 0) {
    orderContainer.innerHTML = '<div class="empty-order">尚未選擇任何飲品</div>';
  } else {
    orderContainer.innerHTML = '';
    currentOrder.forEach((item, index) => {
      const orderItemEl = createOrderItemElement(item, index);
      orderContainer.appendChild(orderItemEl);
    });
  }

  const total = currentOrder.reduce((sum, item) => sum + item.price, 0);
  totalAmountEl.textContent = total;
}

function createOrderItemElement(item, index) {
  const orderItemEl = document.createElement('div');
  orderItemEl.className = 'order-item';

  let optionsText = '';
  const options = [];
  if (item.tea) options.push(item.tea);
  if (item.sugar) options.push(item.sugar);
  if (item.ice) options.push(item.ice);
  optionsText = options.join(' / ');

  let toppingsText = '';
  if (item.toppings && item.toppings.length > 0) {
    const displayToppings = item.toppings.map(toppingName => {
      const topping = toppings.find(t => t.name === toppingName);
      return topping ? topping.displayName : toppingName;
    });
    toppingsText = `<div style="color: #667eea; font-size: 0.8rem;">加料: ${displayToppings.join(', ')}</div>`;
  }

  orderItemEl.innerHTML = `
    <div class="order-item-header">
      <span class="order-item-name">${item.beverage.name} (${item.size})</span>
      <span class="order-item-price">$${item.price}</span>
    </div>
    <div class="order-item-details">
      <span>${optionsText}</span>
      <div class="quantity-controls">
        <button class="quantity-btn" onclick="changeQuantity(${index}, -1)">−</button>
        <span class="quantity-display">${item.quantity}</span>
        <button class="quantity-btn" onclick="changeQuantity(${index}, 1)">+</button>
      </div>
    </div>
    ${toppingsText}
  `;

  return orderItemEl;
}

function changeQuantity(index, change) {
  const item = currentOrder[index];
  item.quantity += change;

  if (item.quantity <= 0) {
    currentOrder.splice(index, 1);
  } else {
    const basePrice = item.beverage.prices[item.size];
    let toppingsPrice = 0;
    if (item.toppings) {
      item.toppings.forEach(toppingName => {
        const topping = toppings.find(t => t.name === toppingName);
        if (topping) {
          toppingsPrice += topping.price;
        }
      });
    }
    item.price = (basePrice + toppingsPrice) * item.quantity;
  }

  updateOrderDisplay();
  updateOrderPreview();
}

function updateOrderPreview() {
  const name = customerName.value.trim();
  const phone = customerPhone.value.trim();
  const address = deliveryAddress.value.trim();

  if (!name || !phone || !address || currentOrder.length === 0) {
    orderPreview.textContent = '請先填寫完整的訂購資訊和選擇飲品...';
    copyOrderBtn.disabled = true;
    sendOrderBtn.disabled = true;
    return;
  }

  const total = currentOrder.reduce((sum, item) => sum + item.price, 0);
  const orderTime = new Date().toLocaleString('zh-TW');

  let previewText = `🧋 功夫茶 KUNG FU TEA 訂單\n`;
  previewText += `================\n`;
  previewText += `📅 訂購時間：${orderTime}\n`;
  previewText += `👤 訂購人：${name}\n`;
  previewText += `📞 聯絡電話：${phone}\n`;
  previewText += `📍 外送地址：${address}\n`;
  previewText += `================\n`;
  previewText += `📋 訂購內容：\n\n`;

  currentOrder.forEach((item, index) => {
    let orderLine = `${index + 1}. ${item.beverage.name} ${item.size}`;

    const options = [];
    if (item.tea) options.push(item.tea);
    if (item.sugar) options.push(item.sugar);
    if (item.ice) options.push(item.ice);
    if (options.length > 0) {
      orderLine += ` ${options.join('')}`;
    }

    if (item.toppings && item.toppings.length > 0) {
      const displayToppings = item.toppings.map(toppingName => {
        const topping = toppings.find(t => t.name === toppingName);
        return topping ? topping.displayName : toppingName;
      });
      orderLine += ` +${displayToppings.join('+')}`;
    }

    orderLine += ` ×${item.quantity} 計：${item.price}`;
    previewText += orderLine + '\n';
  });

  previewText += `\n================\n`;
  previewText += `💰 總金額：${total}\n`;
  previewText += `================\n`;
  previewText += `\n謝謝您的訂購！🙏`;

  orderPreview.textContent = previewText;
  copyOrderBtn.disabled = false;
  sendOrderBtn.disabled = false;
}

// 事件監聽器
document.addEventListener('DOMContentLoaded', () => {
  // 初始化應用
  initMenu();
  updateOrderDisplay();
  updateOrderPreview();

  // 初始化距離計算功能
  initDistanceCalculation();

  // 其他事件監聽器...
  copyOrderBtn.onclick = async () => {
    try {
      await navigator.clipboard.writeText(orderPreview.textContent);
      copyOrderBtn.textContent = '✅ 已複製！';
      setTimeout(() => {
        copyOrderBtn.textContent = '📋 複製訂單文字';
      }, 2000);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = orderPreview.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      copyOrderBtn.textContent = '✅ 已複製！';
      setTimeout(() => {
        copyOrderBtn.textContent = '📋 複製訂單文字';
      }, 2000);
    }
  };

  sendOrderBtn.onclick = () => {
    const orderText = encodeURIComponent(orderPreview.textContent);
    const lineUrl = `https://lin.ee/QmyIa34?text=${orderText}`;
    window.open(lineUrl, '_blank');
  };

  // 監聽訂購資訊輸入變化
  [customerName, customerPhone, deliveryAddress].forEach(input => {
    input.addEventListener('input', function () {
      this.style.borderColor = '#e0e6ff';
      updateOrderPreview();
    });
  });
});
