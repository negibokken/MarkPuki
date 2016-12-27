'use strict';
const electron = require('electron');

const app = electron.app;
const Menu = electron.Menu;

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

function onClosed() {
  // dereference the window
  // for multiple windows store them in an array
  mainWindow = null;
}

function createMainWindow() {
  const win = new electron.BrowserWindow({
    width: 1000,
    height: 600
  });

  win.setMinimumSize(1000, 400);
  win.setMaximumSize(1000, 800);

  win.loadURL(`file://${__dirname}/index.html`);
  win.on('closed', onClosed);

  return win;
}
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (!mainWindow) {
    mainWindow = createMainWindow();
  }
});

app.on('ready', () => {
  mainWindow = createMainWindow();
});

function setMenu() {
  let template;
  if (process.platform == 'darwin') {
    template = [
      {
        label: 'MarkPuki',
        submenu: [{
          label: 'Reload',
          accelerator: 'Command+R',
          click: () => {
            win.reload()
          }
        }]
      }
    ]
  }
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu);
}