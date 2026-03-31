const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

const DEFAULT_START_URL = "http://localhost:3000";

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    icon: path.join(__dirname, "../public/icon.png"),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  
  // mainWindow.webContents.openDevTools();

  const isDev = process.env.ELECTRON_START_URL || !app.isPackaged;

  if (isDev) {
    const startUrl = process.env.ELECTRON_START_URL || DEFAULT_START_URL;
    mainWindow.loadURL(startUrl);
  } else {
    mainWindow.loadFile(path.join(__dirname, "../build/client/index.html"));
  }
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
