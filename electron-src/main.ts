import { app, BrowserWindow } from "electron";
import path from "path";

function createWindow() {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        fullscreen: true,
        resizable: true,
        maximizable: true,
        minimizable: true,
        fullscreenable: false,
        autoHideMenuBar: false,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });
    
	win.maximize();



    const startURL =
        process.env.VITE_DEV_SERVER_URL ||
        `file://${path.join(__dirname, "../frontend/dist/index.html")}`;
    
    win.loadURL(startURL);

    win.webContents.on("did-fail-load", (_, errorCode, errorDesc) => {
        console.error("❌ Falha ao carregar página:", errorCode, errorDesc);
    });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});