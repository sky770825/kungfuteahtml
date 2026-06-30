// 舊版佔位檔：目前主頁 index.html 沒有載入此檔。
// 正式菜單、訂單、外送距離與後台同步邏輯都在 index.html 內維護。
// 保留這個檔名是為了避免舊文件或工具找不到檔案，但不要在主頁重新掛載舊版程式。
(function () {
  if (typeof console !== 'undefined') {
    console.warn('script.js 是舊版佔位檔；請以 index.html 內嵌腳本為準。');
  }
})();
