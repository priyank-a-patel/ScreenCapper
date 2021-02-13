const { desktopCapturer, remote } = require('electron');

const { writeFile } = require('fs');

const { dialog, Menu } = remote;

// Buttons
const videoElement = document.querySelector('video');

const startBtn = document.getElementById('startBtn');

const stopBtn = document.getElementById('stopBtn');


const videoSelectBtn = document.getElementById('videoSelectBtn');
videoSelectBtn.onclick = getVideoSources;

// Get the available video sources
async function getVideoSources() {

}
