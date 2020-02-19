// Making all constants
// Misc Info
const musicContainer = document.getElementById('music-container');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
// Buttons
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
// Music
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Array of song titles
const songs = ['creativeminds', 'goinghigher', 'tomorrow'];
// Keep track of song
let songIndex = 1;
//Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song){
    title.innerText = song;
    audio.src = `assets/sounds/${song}.mp3`;
    cover.src = `assets/images/${song}.jpg`;
}
