console.log('inside electron app');

const electron = require('electron');
const { ipcMain } = electron;

// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
// this should be placed at top of main.js to handle setup events quickly
if (handleSquirrelEvent(app)) {
	// squirrel event handled and app will exit in 1000ms, so don't do anything else
	return;
}

ipcMain.on('bringToFocus', () => {
	// Reply on async message from renderer process
	if (mainWindow) {
		// If window is minimized, mazimize it else restore it from tray
		if (mainWindow.isMinimized()) {
			mainWindow.maximize();
		} else {
			mainWindow.show();
		}
		// Focus the app after it has been brought to the foreground
		mainWindow.focus();
	}
});

function createWindow() {
	// Create the browser window.
	const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
	mainWindow = new BrowserWindow({
		width: Math.ceil(width * 0.3),
		height,
		x: width - Math.ceil(width * 0.3),
		y: 0,
		resizable: false,
		frame: false,
		alwaysOnTop: process.platform !== 'darwin',
		backgroundColor: '#fff'
	});

	// and load the index.html of the app.
	const startUrl =
		process.env.ELECTRON_START_URL ||
		url.format({
			pathname: path.join(__dirname, '/../build/index.html'),
			protocol: 'file:',
			slashes: true
		});
	mainWindow.loadURL(startUrl);

	// Open the DevTools.
	// mainWindow.webContents.openDevTools();

	// Emitted when the window is closed.
	mainWindow.on('closed', function() {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function() {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createWindow();
	}
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

function handleSquirrelEvent(application) {
	if (process.argv.length === 1) {
		return false;
	}

	const ChildProcess = require('child_process');
	const path = require('path');

	const appFolder = path.resolve(process.execPath, '..');
	const rootAtomFolder = path.resolve(appFolder, '..');
	const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
	const exeName = path.basename(process.execPath);

	const spawn = function(command, args) {
		let spawnedProcess, error;

		try {
			spawnedProcess = ChildProcess.spawn(command, args, {
				detached: true
			});
		} catch (error) {}

		return spawnedProcess;
	};

	const spawnUpdate = function(args) {
		return spawn(updateDotExe, args);
	};

	const squirrelEvent = process.argv[1];
	switch (squirrelEvent) {
		case '--squirrel-install':
		case '--squirrel-updated':
			// Optionally do things such as:
			// - Add your .exe to the PATH
			// - Write to the registry for things like file associations and
			//   explorer context menus

			// Install desktop and start menu shortcuts
			spawnUpdate([ '--createShortcut', exeName ]);

			setTimeout(application.quit, 1000);
			return true;

		case '--squirrel-uninstall':
			// Undo anything you did in the --squirrel-install and
			// --squirrel-updated handlers

			// Remove desktop and start menu shortcuts
			spawnUpdate([ '--removeShortcut', exeName ]);

			setTimeout(application.quit, 1000);
			return true;

		case '--squirrel-obsolete':
			// This is called on the outgoing version of your app before
			// we update to the new version - it's the opposite of
			// --squirrel-updated

			application.quit();
			return true;
	}
}
