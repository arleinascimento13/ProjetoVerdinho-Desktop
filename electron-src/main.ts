import { app, BrowserWindow } from "electron";
import path from "path";

console.log("🧠 Electron tentando abrir janela...");

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"), // se quiser usar preload
		},
	});

	// Em dev: localhost, em prod: path para o arquivo buildado
	const startURL =
		process.env.VITE_DEV_SERVER_URL ||
		`file://${path.join(__dirname, "../frontend/dist/index.html")}`;
	console.log("🌐 Carregando URL:", startURL);

	win.loadURL(startURL);

	win.webContents.on("did-fail-load", (_, errorCode, errorDesc) => {
		console.error("❌ Falha ao carregar página:", errorCode, errorDesc);
	});
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
