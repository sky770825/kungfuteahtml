# 功夫茶 KUNG FU TEA - 線上點餐系統 v2.1.0

## 📋 專案簡介

這是專為功夫茶楊梅四維店設計的線上點餐頁，主要用途是讓顧客填寫外送資訊、試算金額、產生訂單預覽，並複製內容手動傳送到 LINE 官方帳號。

## ✨ 主要功能

- 🧋 **完整菜單系統** - 功夫茶、特調、鮮奶、奶茶等分類
- 📱 **響應式設計** - 支援手機、平板、桌面裝置
- 🛒 **訂單預覽** - 即時訂單預覽、數量調整、外送金額試算
- ✅ **完成畫面** - 開啟 LINE 官方帳號後顯示完整訂單預覽與複製按鈕
- 💾 **本機紀錄** - 使用瀏覽器 LocalStorage，最多10筆訂單；完成送單流程時會自動儲存在目前裝置
- 📋 **一鍵複製** - 快速複製訂單文字，手動貼到 LINE 官方帳號
- 🔁 **過往訂單再用** - 可載入本機紀錄找回過往品項，並直接複製新的訂單預覽
- 💬 **LINE 送單** - 開啟官方帳號後，由顧客自行貼上訂單；店家回覆確認後才算訂購成功
- 📞 **外送平台整合** - foodpanda、Uber Eats 連結
- 🏠 **實用工具** - 房地產相關服務連結

## 🚀 快速開始

### 安裝依賴
```bash
npm install
```

### 啟動開發伺服器
```bash
npm run dev
```

### 或使用簡單 HTTP 伺服器
```bash
npm start
```

### 本機後台（選用）
```bash
KUNGFU_TEA_ADMIN_TOKEN=請換成自己的密碼 npm run backend
```

正式站不需要後台收訂單，也不會自動 POST 訂單到 `/api/orders`。本機後台只保留作為開發測試或距離代理用途。

前端預覽預設使用 5501 port，後台 API 預設使用 3000 port。如需在開發環境使用後端距離代理，可另外設定：

- `KUNGFU_TEA_ADMIN_TOKEN`: 後台管理 Token
- `KUNGFU_TEA_SERPAPI_KEY`: 後端距離精算使用的 SerpApi 金鑰
- `KUNGFU_TEA_ALLOWED_ORIGINS`: 允許呼叫後端 API 的前端網址，多個網址用逗號分隔

正式 GitHub Pages 是靜態前端，未設定 `window.KUNGFU_TEA_BACKEND_API_URL` 時會直接使用前端內建距離估算，不會探測 `localhost:3000` 或同網域 `/api`。

## 📁 專案結構

```
網頁開發工具/
├── index.html          # 主頁面
├── css/
│   └── style.css       # 樣式檔案
├── js/
│   └── script.js       # 舊版備份，主頁未載入
├── assets/             # 靜態資源
├── images/             # 圖片資源
├── package.json        # 專案配置
└── README.md           # 專案說明
```

## 🛠️ 技術規格

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **樣式**: CSS Grid, Flexbox, CSS Variables
- **儲存**: LocalStorage API
- **響應式**: Mobile-first 設計
- **瀏覽器支援**: Chrome, Firefox, Safari, Edge

## 📱 支援裝置

- 📱 手機 (320px+)
- 📱 平板 (768px+)
- 💻 桌面 (1024px+)

## 🔗 相關連結

- **foodpanda**: https://foodpanda.go.link/34CwH
- **Uber Eats**: 楊梅四維店專用連結
- **電話訂購**: 03-4882975
- **LINE 官方帳號**: https://lin.ee/QmyIa34
- **店家地址**: 楊梅區四維路90號

## 📞 聯絡資訊

- **店家名稱**: 功夫茶 KUNG FU TEA - 楊梅四維店
- **地址**: 楊梅區四維路90號
- **電話**: 03-4882975
- **營業時間**: 請致電確認

## 📄 授權

MIT License - 詳見 LICENSE 檔案

## 🔄 版本歷史

- **v2.0.0** - 完整重構，新增訂單儲存功能
- **v1.0.0** - 初始版本
