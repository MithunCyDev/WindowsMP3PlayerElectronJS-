const { ipcRenderer } = require('electron');

document.getElementById('fileInput').addEventListener('change', (event) => {
    const filePath = event.target.files[0].path;
    ipcRenderer.send('play', filePath);
});

ipcRenderer.on('play', (event, filePath) => {
    const audioElement = document.getElementById('audio');
    audioElement.src = filePath;
    audioElement.play();
});
