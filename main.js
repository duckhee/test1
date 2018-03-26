const electron = require('electron');
const {spawn, exec} = require('child_process');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const powersaveBlocker = electron.powerSaveBlocker;
powersaveBlocker.start('prevent-display-sleep');
const Developmentmode = process.argv.includes("dev");

let mainWindow;

function createWindow(){
    var atomScreen = electron.screen;
    var displays = atomScreen.getAllDisplays();
    var externalDisplay = null;
    for(var i in displays){
        if(displays[i].bounds.x > 0 || displays[i].bounds.y >0){
            externalDisplay = displays[i];
            break;
        }
    }

    var browserWindowOptions = {width: 800, height:600, icon:'favicon.ico', kiosk: !Developmentmode, autoHideMenuBar: true, darkTheme:true};
    if(externalDisplay){
        browserWindowOptions.x = externalDisplay.bounds.x + 50;
        browserWindowOptions.y = externalDisplay.bounds.y + 50;
    }

    mainWindow = new BrowserWindow(browserWindowOptions);

    mainWindow.loadURL('file://'+__dirname +'/index.html');

    //dev mode
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function(){
        mainWindow = null;
    });
}
    
app.on('ready', createWindow);

app.on('window-all-closed', function(){
    app.quit();
});

app.on('will-quit', function(){

});
