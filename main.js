const electron=require('electron'); 

const Browser = electron.BrowserWindow; 
const app= electron.app; 
let mainWindow; 

 function CreateWindow() { 
    mainWindow= new Browser({ 
    width: 1366, // açılacak pencerenin genişliği 
    height: 768, // açılacak pencerenin yüksekliği 
    title:'White Noise', // açılacak pencerenin başlığı 
    
});

mainWindow.loadFile('infinia.html');  

}
app.on('ready', CreateWindow);