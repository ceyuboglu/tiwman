
const electron = require('electron');
const ipcMain = electron.ipcMain;
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const Menu = electron.Menu;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;
let detailWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 900, height: 700, webPreferences:{nodeIntegration:true}});
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);

  detailWindow = new BrowserWindow({width: 900, height: 700,parent: mainWindow, show:false, webPreferences:{nodeIntegration:true}});
  detailWindow.loadURL(isDev ? 'http://localhost:3000/detail' : `file://${path.join(__dirname, '../build/index.html')}`);
  detailWindow.on('close', (e) => {
    e.preventDefault();
    detailWindow.hide();
});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('get-details',(event,arg) => {
  detailWindow.show();
  detailWindow.webContents.send('detail',arg)
});