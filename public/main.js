const { app, BrowserWindow, session } = require('electron');

require('@electron/remote/main').initialize();

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			enableRemoteModule: true,
			nodeIntegration: true,
		},
	});

	win.loadURL('http://localhost:3000');
};

app.whenReady().then(() => {
	session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
		callback({
			responseHeaders: {
				...details.responseHeaders,
				'Content-Security-Policy': ["script-src 'self'"],
			},
		});
	});

	//MAC OS
	if (process.platform === 'darwin')
		app.on('activate', () => {
			if (BrowserWindow.getAllWindows().length === 0) createWindow();
		});
	else createWindow();
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});
