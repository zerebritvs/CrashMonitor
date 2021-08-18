const {app, BrowserWindow, ipcMain} = require("electron");

//mantener la app viva 
let mainWindow = null;

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
    });

    mainWindow.loadFile("app/ui/index.html");
    
}

app.whenReady().then(createWindow);
