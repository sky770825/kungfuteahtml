/**
 * 功夫茶點餐系統 JavaScript 檔案
 * 作者：功夫茶楊梅四維店
 * 版本：v2.0
 */

// 加料選項資料
const toppings = [
    {name: "黑糖波霸", price: 10, displayName: "波霸"},
    {name: "仙草", price: 10, displayName: "仙草"},
    {name: "寒天球", price: 10, displayName: "寒天球"},
    {name: "蒟蒻", price: 10, displayName: "蒟蒻"},
    {name: "愛玉", price: 10, displayName: "愛玉"},
    {name: "38料粉條", price: 10, displayName: "38料粉條"}
];

// 飲品資料
const menuData = [
    // 功夫・好友茶
    {name: "功夫茶王", category: "功夫・好友茶", prices: {'L': 45}, notes: "★ 無糖微冰限定, 不可加料", fixedOptions: {sugar: "無糖", ice: "微冰"}, canAddToppings: false},
    {name: "岩葉紅茶", category: "功夫・好友茶", prices: {'L': 35, '瓶': 55}, canAddToppings: true},
    {name: "翠玉綠茶", category: "功夫・好友茶", prices: {'L': 35, '瓶': 55}, canAddToppings: true},
    {name: "四季春青茶", category: "功夫・好友茶", prices: {'L': 35, '瓶': 55}, canAddToppings: true},
    {name: "烏龍觀音", category: "功夫・好友茶", prices: {'L': 35, '瓶': 55}, canAddToppings: true},
    {name: "蜜桃胭脂紅茶", category: "功夫・好友茶", prices: {'L': 40, '瓶': 60}, canAddToppings: true},
    {name: "手作冬瓜茶", category: "功夫・好友茶", prices: {'L': 35}, notes: "無另外加糖", noSugarOptions: true, canAddToppings: true},
    {name: "阿里山冰茶", category: "功夫・好友茶", prices: {'L': 50}, notes: "推薦, 不可加料, 不可做熱飲", canAddToppings: false},
    {name: "日月潭紅玉", category: "功夫・好友茶", prices: {'L': 50}, notes: "推薦, 不可加料, 不可做熱飲", canAddToppings: false},

    // 特調系列
    {name: "芝士奶蓋綠茶/青茶", category: "特調", prices: {'L': 70}, canAddToppings: true},
    {name: "芝士奶蓋紅茶/烏龍", category: "特調", prices: {'L': 70}, canAddToppings: true},
    {name: "玫瑰冰茶", category: "特調", prices: {'L': 55}, notes: "無另外加糖", noSugarOptions: true, canAddToppings: true},
    {name: "青梅綠茶", category: "特調", prices: {'L': 55}, canAddToppings: true},
    {name: "多多綠茶", category: "特調", prices: {'L': 60}, canAddToppings: true},
    {name: "胭脂多多", category: "特調", prices: {'L': 60}, canAddToppings: true},
    {name: "粉粿胭脂紅", category: "特調", prices: {'L': 50}, canAddToppings: true},
    {name: "冰淇淋岩葉紅茶", category: "特調", prices: {'L': 60}, notes: "最低微冰", canAddToppings: true},

    // 功夫・鮮奶
    {name: "黑糖波霸鮮奶", category: "功夫・鮮奶", prices: {'M': 65, 'L': 80}, notes: "無另外加糖", noSugarOptions: true, canAddToppings: true},
    {name: "紅豆粉粿鮮奶", category: "功夫・鮮奶", prices: {'M': 65, 'L': 80}, notes: "★ 黃金比例", fixedOptions: {sugar: "黃金比例"}, canAddToppings: false},
    {name: "巧克力鮮奶", category: "功夫・鮮奶", prices: {'L': 75}, canAddToppings: true},
    {name: "岩葉紅茶拿鐵", category: "功夫・鮮奶", prices: {'M': 55, 'L': 65}, canAddToppings: true},
    {name: "烏龍觀音拿鐵", category: "功夫・鮮奶", prices: {'M': 55, 'L': 65}, canAddToppings: true},
    {name: "英式伯爵拿鐵", category: "功夫・鮮奶", prices: {'L': 70}, canAddToppings: true},
    {name: "蜜桃胭脂拿鐵", category: "功夫・鮮奶", prices: {'L': 70}, canAddToppings: true},
    {name: "冰淇淋紅茶拿鐵", category: "功夫・鮮奶", prices: {'L': 75}, notes: "最低微冰", canAddToppings: true},

    // 功夫・奶茶
    {name: "38奶霸", category: "功夫・奶茶", prices: {'M': 60, 'L': 65}, notes: "★ 含波霸+蒟蒻+仙草", canAddToppings: false},
    {name: "黑糖波霸奶茶", category: "功夫・奶茶", prices: {'M': 55, 'L': 60}, notes: "★", canAddToppings: true},
    {name: "咖啡凍奶茶", category: "功夫・奶茶", prices: {'M': 60, 'L': 65}, canAddToppings: true},
    {name: "厚奶茶/奶綠", category: "功夫・奶茶", prices: {'M': 50, 'L': 55}, canAddToppings: true},
    {name: "烏龍觀音奶茶", category: "功夫・奶茶", prices: {'M': 50, 'L': 55}, canAddToppings: true},
    {name: "英式伯爵奶茶", category: "功夫・奶茶", prices: {'L': 65}, canAddToppings: true},
    {name: "蜜桃胭脂奶茶", category: "功夫・奶茶", prices: {'L': 65}, canAddToppings: true},
    {name: "莊園玫瑰奶茶", category: "功夫・奶茶", prices: {'L': 65}, canAddToppings: true},
    {name: "巧克力奶茶", category: "功夫・奶茶", prices: {'L': 65}, canAddToppings: true},

    // 期間・限定
    {name: "星桃樂胭脂", category: "期間・限定", prices: {'單一價': 75}, canAddToppings: true},

    // 功夫・水果
    {name: "輕飲水果茶王", category: "功夫・水果", prices: {'L': 65}, notes: "★ 推薦", canAddToppings: true},
    {name: "寒天柚香飲", category: "功夫・水果", prices: {'L': 65}, canAddToppings: true},
    {name: "粉裸柚香綠", category: "功夫・水果", prices: {'L': 65}, canAddToppings: true},
    {name: "鮮榨柳橙綠", category: "功夫・水果", prices: {'L': 65}, notes: "推薦, 甜度固定", fixedOptions: {sugar: "甜度固定"}, canAddToppings: true},
    {name: "芭樂檸檬綠", category: "功夫・水果", prices: {'L': 70}, notes: "★ 固定半糖微冰", fixedOptions: {sugar: "半糖", ice: "微冰"}, canAddToppings: true},
    {name: "黃金芒果綠", category: "功夫・水果", prices: {'L': 60}, canAddToppings: true},
    {name: "百香3Q", category: "功夫・水果", prices: {'L': 60}, notes: "不含咖啡因, 含波霸+蒟蒻+椰果", canAddToppings: false},
    {name: "百香羅勒子", category: "功夫・水果", prices: {'L': 55}, notes: "不含茶", canAddToppings: true},
    {name: "冬瓜檸檬", category: "功夫・水果", prices: {'L': 55}, notes: "不含另外加糖", noSugarOptions: true, canAddToppings: true},
    {name: "黃金芒果莎莎", category: "功夫・水果", prices: {'L': 60}, notes: "★ 冰沙", fixedOptions: {sugar: "", ice: "冰沙"}, noSugarOptions: true, canAddToppings: false},
    {name: "泰式榴槤莎莎", category: "功夫・水果", prices: {'L': 110}, notes: "★ 熱銷限定, 冰沙", fixedOptions: {sugar: "", ice: "冰沙"}, noSugarOptions: true, canAddToppings: false},
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
        // 移除備註中的星星圖示，因為已經移到名稱前面
        const cleanNotes = beverage.notes.replace(/★\s*/g, '');
        if (cleanNotes.trim()) {
            // 根據備註內容決定樣式類別
            let noteClass = 'beverage-notes';
            if (cleanNotes.includes('推薦')) {
                noteClass += ' recommended';
            } else if (cleanNotes.includes('不可加料')) {
                noteClass += ' no-toppings';
            } else if (cleanNotes.includes('無另外加糖') || cleanNotes.includes('無糖')) {
                noteClass += ' no-sugar';
            } else if (cleanNotes.includes('甜度固定') || cleanNotes.includes('固定')) {
                noteClass += ' fixed-options';
            } else if (cleanNotes.includes('最低微冰')) {
                noteClass += ' ice-limit';
            } else if (cleanNotes.includes('含') && (cleanNotes.includes('波霸') || cleanNotes.includes('蒟蒻') || cleanNotes.includes('仙草'))) {
                noteClass += ' included-toppings';
            } else if (cleanNotes.includes('不含咖啡因')) {
                noteClass += ' no-caffeine';
            } else if (cleanNotes.includes('不含茶')) {
                noteClass += ' no-tea';
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

// 檢查訂購資訊是否完整
function checkOrderInfo() {
    const name = customerName.value.trim();
    const phone = customerPhone.value.trim();
    const address = deliveryAddress.value.trim();
    
    if (!name || !phone || !address) {
        // 滾動到訂購資訊區域
        const orderInfoSection = document.querySelector('.order-section');
        orderInfoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // 高亮顯示未填寫的欄位
        if (!name) {
            customerName.style.borderColor = '#ff6b6b';
            customerName.focus();
        } else if (!phone) {
            customerPhone.style.borderColor = '#ff6b6b';
            customerPhone.focus();
        } else if (!address) {
            deliveryAddress.style.borderColor = '#ff6b6b';
            deliveryAddress.focus();
        }
        
        alert('請先填寫完整的訂購資訊（姓名、電話、地址）後再選擇飲品！');
        return false;
    }
    return true;
}

// 打開訂購模態框
function openOrderModal(beverage) {
    // 先檢查訂購資訊
    if (!checkOrderInfo()) {
        return;
    }
    
    currentBeverage = beverage;
    modalTitle.textContent = beverage.name;
    
    // 創建尺寸選項
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

    // 處理甜度選項
    const sugarGroup = document.getElementById('sugar-group');
    if (beverage.fixedOptions?.sugar || beverage.noSugarOptions) {
        sugarGroup.style.display = 'none';
    } else {
        sugarGroup.style.display = 'block';
        resetSugarSelections();
    }

    // 處理冰塊選項
    const iceGroup = document.getElementById('ice-group');
    if (beverage.fixedOptions?.ice) {
        iceGroup.style.display = 'none';
    } else {
        iceGroup.style.display = 'block';
        // 特殊處理：冰淇淋飲品只顯示微冰以上選項
        if (beverage.name === '冰淇淋岩葉紅茶' || beverage.name === '冰淇淋紅茶拿鐵') {
            resetIceSelectionsForIceCream();
        } else if (beverage.name === '阿里山冰茶' || beverage.name === '日月潭紅玉') {
            resetIceSelectionsNoHot();
        } else if (beverage.name === '紅豆粉粿鮮奶') {
            resetIceSelectionsForRedBean();
        } else {
            resetIceSelections();
        }
    }

    // 處理加料選項
    const toppingsGroup = document.getElementById('toppings-group');
    if (beverage.canAddToppings) {
        toppingsGroup.style.display = 'block';
        createToppingsOptions();
    } else {
        toppingsGroup.style.display = 'none';
    }

    quantityInput.value = 1;
    modal.style.display = 'block';
}

// 創建加料選項
function createToppingsOptions() {
    const toppingsContainer = document.getElementById('toppings-options');
    toppingsContainer.innerHTML = '';
    
    toppings.forEach(topping => {
        const toppingBtn = document.createElement('div');
        toppingBtn.className = 'option-btn';
        toppingBtn.textContent = `${topping.name} (+${topping.price})`;
        toppingBtn.dataset.toppingName = topping.name;
        toppingBtn.dataset.toppingPrice = topping.price;
        toppingBtn.onclick = () => toggleTopping(toppingBtn);
        toppingsContainer.appendChild(toppingBtn);
    });
}

// 切換加料選擇
function toggleTopping(btn) {
    const isSelected = btn.classList.contains('selected');
    const toppingName = btn.dataset.toppingName;
    const selectedToppings = document.querySelectorAll('#toppings-options .option-btn.selected');
    
    // 如果點擊的是38料粉條
    if (toppingName === '38料粉條') {
        if (isSelected) {
            // 取消選擇38料粉條
            btn.classList.remove('selected');
        } else {
            // 選擇38料粉條時，取消所有其他加料
            selectedToppings.forEach(otherBtn => otherBtn.classList.remove('selected'));
            btn.classList.add('selected');
        }
    } else {
        // 如果點擊的是其他加料
        if (isSelected) {
            // 取消選擇
            btn.classList.remove('selected');
        } else {
            // 檢查是否已經選了38料粉條
            const specialTopping = document.querySelector('#toppings-options .option-btn[data-topping-name="38料粉條"]');
            if (specialTopping && specialTopping.classList.contains('selected')) {
                alert('選擇38料粉條時不能同時選擇其他加料！');
                return;
            }
            
            // 檢查是否已達到3種加料的限制
            if (selectedToppings.length >= 3) {
                alert('一杯飲料最多只能加3種料！');
                return;
            }
            
            btn.classList.add('selected');
        }
    }
}

// 選擇選項 (尺寸、甜度、冰塊)
function selectOption(btn, type) {
    const parentContainer = btn.parentNode;
    parentContainer.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

// 重置甜度選項
function resetSugarSelections() {
    document.querySelectorAll('#sugar-options .option-btn').forEach((btn, index) => {
        btn.classList.toggle('selected', index === 0);
    });
}

// 重置冰塊選項
function resetIceSelections() {
    document.querySelectorAll('#ice-options .option-btn').forEach((btn, index) => {
        btn.style.display = 'block'; // 確保所有選項都顯示
        btn.classList.toggle('selected', index === 0);
    });
}

// 重置冰淇淋飲品的冰塊選項（只顯示微冰以上）
function resetIceSelectionsForIceCream() {
    const iceOptions = document.querySelectorAll('#ice-options .option-btn');
    iceOptions.forEach((btn, index) => {
        const value = btn.dataset.value;
        // 只顯示微冰、少冰、正冰，隱藏去冰和熱飲
        if (value === '去冰' || value === '熱飲') {
            btn.style.display = 'none';
        } else {
            btn.style.display = 'block';
            btn.classList.toggle('selected', index === 0);
        }
    });
}

// 重置不能做熱飲的飲品冰塊選項（隱藏熱飲選項）
function resetIceSelectionsNoHot() {
    const iceOptions = document.querySelectorAll('#ice-options .option-btn');
    iceOptions.forEach((btn, index) => {
        const value = btn.dataset.value;
        // 隱藏熱飲選項，其他都顯示
        if (value === '熱飲') {
            btn.style.display = 'none';
        } else {
            btn.style.display = 'block';
            btn.classList.toggle('selected', index === 0);
        }
    });
}

// 重置紅豆粉粿鮮奶的冰塊選項（只顯示正冰和熱飲）
function resetIceSelectionsForRedBean() {
    const iceOptions = document.querySelectorAll('#ice-options .option-btn');
    iceOptions.forEach((btn, index) => {
        const value = btn.dataset.value;
        // 只顯示正冰和熱飲，隱藏少冰、微冰、去冰
        if (value === '正冰' || value === '熱飲') {
            btn.style.display = 'block';
            btn.classList.toggle('selected', value === '正冰');
        } else {
            btn.style.display = 'none';
        }
    });
}

// 加入訂單
addToOrderBtn.onclick = () => {
    const selectedSizeBtn = document.querySelector('#size-options .option-btn.selected');
    const sizeText = selectedSizeBtn.textContent;
    const size = sizeText.split(' ')[0];
    const quantity = parseInt(quantityInput.value);

    if (quantity <= 0) {
        alert('數量必須大於 0');
        return;
    }

    // 處理甜度選項
    let sugar = "全糖";
    if (currentBeverage.fixedOptions?.sugar) {
        sugar = currentBeverage.fixedOptions.sugar;
    } else if (currentBeverage.noSugarOptions) {
        sugar = ""; // 不顯示甜度
    } else {
        const selectedSugarBtn = document.querySelector('#sugar-options .option-btn.selected');
        if (selectedSugarBtn) {
            sugar = selectedSugarBtn.dataset.value;
        }
    }

    // 處理冰塊選項
    let ice = "正冰";
    if (currentBeverage.fixedOptions?.ice) {
        ice = currentBeverage.fixedOptions.ice;
    } else {
        const selectedIceBtn = document.querySelector('#ice-options .option-btn.selected');
        if (selectedIceBtn) {
            ice = selectedIceBtn.dataset.value;
        }
    }

    // 處理加料選項
    const selectedToppings = [];
    let toppingsPrice = 0;
    if (currentBeverage.canAddToppings) {
        document.querySelectorAll('#toppings-options .option-btn.selected').forEach(btn => {
            const toppingName = btn.dataset.toppingName;
            const toppingPrice = parseInt(btn.dataset.toppingPrice);
            selectedToppings.push(toppingName);
            toppingsPrice += toppingPrice;
        });
    }

    const basePrice = currentBeverage.prices[size];
    const totalPrice = (basePrice + toppingsPrice) * quantity;

    const orderItem = {
        beverage: currentBeverage,
        size: size,
        sugar: sugar,
        ice: ice,
        toppings: selectedToppings,
        quantity: quantity,
        price: totalPrice
    };

    currentOrder.push(orderItem);
    updateOrderDisplay();
    updateOrderPreview();
    modal.style.display = 'none';
};

// 取消訂購
cancelOrderBtn.onclick = () => {
    modal.style.display = 'none';
};

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

    // 更新總金額
    const total = currentOrder.reduce((sum, item) => sum + item.price, 0);
    totalAmountEl.textContent = total;
}

// 創建訂單項目元素
function createOrderItemElement(item, index) {
    const orderItemEl = document.createElement('div');
    orderItemEl.className = 'order-item';

    // 組合甜度冰塊文字
    let optionsText = '';
    if (item.sugar && item.ice) {
        optionsText = `${item.sugar} / ${item.ice}`;
    } else if (item.sugar) {
        optionsText = item.sugar;
    } else if (item.ice) {
        optionsText = item.ice;
    }

    // 加料文字
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

// 改變數量
function changeQuantity(index, change) {
    const item = currentOrder[index];
    item.quantity += change;

    if (item.quantity <= 0) {
        currentOrder.splice(index, 1);
    } else {
        // 重新計算價格
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

// 更新訂單預覽
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
        
        // 添加甜度冰塊資訊
        if (item.ice && item.sugar) {
            orderLine += ` ${item.ice}${item.sugar}`;
        } else if (item.ice) {
            orderLine += ` ${item.ice}`;
        } else if (item.sugar) {
            orderLine += ` ${item.sugar}`;
        }
        
        // 添加加料資訊
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

// 複製訂單文字
copyOrderBtn.onclick = async () => {
    try {
        await navigator.clipboard.writeText(orderPreview.textContent);
        copyOrderBtn.textContent = '✅ 已複製！';
        setTimeout(() => {
            copyOrderBtn.textContent = '📋 複製訂單文字';
        }, 2000);
    } catch (err) {
        // 備用複製方法
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

// 發送給店家
sendOrderBtn.onclick = () => {
    const orderText = encodeURIComponent(orderPreview.textContent);
    const lineUrl = `https://lin.ee/QmyIa34?text=${orderText}`;
    window.open(lineUrl, '_blank');
};

// 儲存訂單
saveOrderBtn.onclick = () => {
    if (currentOrder.length === 0) {
        alert('訂單是空的，無法儲存！');
        return;
    }

    const name = customerName.value.trim();
    const phone = customerPhone.value.trim();
    const address = deliveryAddress.value.trim();
    
    if (!name || !phone || !address) {
        alert('請先填寫完整的訂購資訊！');
        return;
    }

    const orderData = {
        id: Date.now(),
        name: name,
        phone: phone,
        address: address,
        items: [...currentOrder],
        total: currentOrder.reduce((sum, item) => sum + item.price, 0),
        saveTime: new Date().toLocaleString('zh-TW')
    };

    // 檢查是否超過10個訂單
    if (savedOrders.length >= 10) {
        if (confirm('已儲存10個訂單，是否要覆蓋最舊的訂單？')) {
            savedOrders.shift(); // 移除最舊的訂單
        } else {
            return;
        }
    }

    savedOrders.push(orderData);
    localStorage.setItem('kungfuTeaOrders', JSON.stringify(savedOrders));
    
    alert(`訂單已儲存！\n訂單編號: ${orderData.id}\n儲存時間: ${orderData.saveTime}`);
    updateLoadOrdersButton();
};

// 載入訂單列表
loadOrdersBtn.onclick = () => {
    if (savedOrders.length === 0) {
        alert('沒有儲存的訂單！');
        return;
    }

    // 創建訂單選擇模態框
    const orderModal = document.createElement('div');
    orderModal.className = 'modal';
    orderModal.style.display = 'block';
    orderModal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <h3 class="modal-title">選擇要載入的訂單</h3>
            <div class="orders-list" style="max-height: 400px; overflow-y: auto;">
                ${savedOrders.map((order, index) => `
                    <div class="order-item-select" data-order-id="${order.id}">
                        <div class="order-item-header">
                            <span>訂單 #${order.id}</span>
                            <span class="price">$${order.total}</span>
                        </div>
                        <div class="order-item-details">
                            <div>
                                <strong>${order.name}</strong><br>
                                📞 ${order.phone}<br>
                                📍 ${order.address}
                            </div>
                            <div class="order-actions">
                                <button class="btn btn-primary load-order-btn" data-order-id="${order.id}">載入</button>
                                <button class="btn btn-secondary delete-order-btn" data-order-id="${order.id}">刪除</button>
                            </div>
                        </div>
                        <div style="color: #666; font-size: 0.8rem; margin-top: 5px;">
                            儲存時間: ${order.saveTime}
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="modal-buttons">
                <button class="btn btn-secondary" id="clear-all-orders">清空所有訂單</button>
                <button class="btn btn-secondary" id="close-orders-modal">關閉</button>
            </div>
        </div>
    `;

    document.body.appendChild(orderModal);

    // 添加樣式
    const style = document.createElement('style');
    style.textContent = `
        .order-item-select {
            background: #f8f9ff;
            border: 1px solid #e0e6ff;
            border-radius: 10px;
            padding: 15px;
            margin-bottom: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .order-item-select:hover {
            border-color: #667eea;
            box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);
        }
        .order-actions {
            display: flex;
            gap: 8px;
        }
        .order-actions .btn {
            padding: 8px 12px;
            font-size: 0.9rem;
        }
    `;
    document.head.appendChild(style);

    // 載入訂單
    orderModal.querySelectorAll('.load-order-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const orderId = parseInt(btn.dataset.orderId);
            const order = savedOrders.find(order => order.id === orderId);
            if (order) {
                customerName.value = order.name;
                customerPhone.value = order.phone;
                deliveryAddress.value = order.address;
                currentOrder = [...order.items];
                updateOrderDisplay();
                updateOrderPreview();
                document.body.removeChild(orderModal);
                document.head.removeChild(style);
                alert('訂單已載入！');
            }
        };
    });

    // 刪除訂單
    orderModal.querySelectorAll('.delete-order-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            if (confirm('確定要刪除這個訂單嗎？')) {
                const orderId = parseInt(btn.dataset.orderId);
                const orderIndex = savedOrders.findIndex(order => order.id === orderId);
                if (orderIndex !== -1) {
                    savedOrders.splice(orderIndex, 1);
                    localStorage.setItem('kungfuTeaOrders', JSON.stringify(savedOrders));
                    // 重新載入模態框
                    document.body.removeChild(orderModal);
                    document.head.removeChild(style);
                    loadOrdersBtn.click();
                }
            }
        };
    });

    // 清空所有訂單
    orderModal.querySelector('#clear-all-orders').onclick = () => {
        if (confirm('確定要清空所有儲存的訂單嗎？')) {
            savedOrders = [];
            localStorage.setItem('kungfuTeaOrders', JSON.stringify(savedOrders));
            document.body.removeChild(orderModal);
            document.head.removeChild(style);
            updateLoadOrdersButton();
            alert('所有訂單已清空！');
        }
    };

    // 關閉模態框
    orderModal.querySelector('#close-orders-modal').onclick = () => {
        document.body.removeChild(orderModal);
        document.head.removeChild(style);
    };

    // 點擊模態框外部關閉
    orderModal.onclick = (e) => {
        if (e.target === orderModal) {
            document.body.removeChild(orderModal);
            document.head.removeChild(style);
        }
    };
};

// 更新載入訂單按鈕文字
function updateLoadOrdersButton() {
    loadOrdersBtn.textContent = `📋 載入訂單 (${savedOrders.length}/10)`;
}

// 清空訂單
clearOrderBtn.onclick = () => {
    if (currentOrder.length === 0) return;
    
    if (confirm('確定要清空所有訂單項目嗎？')) {
        currentOrder = [];
        updateOrderDisplay();
        updateOrderPreview();
    }
};

// 監聽訂購資訊輸入變化
[customerName, customerPhone, deliveryAddress].forEach(input => {
    input.addEventListener('input', function() {
        // 清除高亮效果
        this.style.borderColor = '#e0e6ff';
        updateOrderPreview();
    });
});

// 限制數量輸入框只能輸入數字
quantityInput.addEventListener('input', function(e) {
    // 移除所有非數字字符
    this.value = this.value.replace(/[^0-9]/g, '');
    // 確保最小值為1
    if (this.value < 1) {
        this.value = 1;
    }
});

// 防止粘貼非數字內容
quantityInput.addEventListener('paste', function(e) {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData('text');
    const numbers = paste.replace(/[^0-9]/g, '');
    if (numbers) {
        this.value = Math.max(1, parseInt(numbers) || 1);
    }
});

// 點擊模態框外部關閉
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// 設置選項按鈕點擊事件
document.addEventListener('DOMContentLoaded', () => {
    // 甜度選項
    document.querySelectorAll('#sugar-options .option-btn').forEach(btn => {
        btn.onclick = () => selectOption(btn, 'sugar');
    });

    // 冰塊選項
    document.querySelectorAll('#ice-options .option-btn').forEach(btn => {
        btn.onclick = () => selectOption(btn, 'ice');
    });
});

// 初始化應用
initMenu();
updateOrderDisplay();
updateOrderPreview();
updateLoadOrdersButton();
