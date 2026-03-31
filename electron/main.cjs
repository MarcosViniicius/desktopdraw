const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const DEFAULT_START_URL = "http://localhost:3000";

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    icon: path.join(__dirname, "../public/favicon.ico"),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  const startUrl = process.env.ELECTRON_START_URL || DEFAULT_START_URL;
  mainWindow.loadURL(startUrl);
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
