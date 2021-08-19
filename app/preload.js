const {ipcRenderer, contextBridge} = require("electron");

contextBridge.exposeInMainWorld("api", {
    getGoldPrice: () => ipcRenderer.invoke("get-gold-price"),
    getUsaInflation: () => ipcRenderer.invoke("get-usa-inflation"),
    getFearGreed: () => ipcRenderer.invoke("get-fear-greed"),
    getWilshire5000: () => ipcRenderer.invoke("get-wilshire-5000"),
    getGDP: () => ipcRenderer.invoke("get-GDP"),
});