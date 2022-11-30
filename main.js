const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    // On MacOS, open a new window if app is activated and
    // all windows are closed
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        } 
    });
});

// Quit application when all windows are closed (except on MacOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});