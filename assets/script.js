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
const songs = ['creative-minds', 'going-higher', 'tomorrow'];
// Keep track of song
let songIndex = 2;
//Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song){
    title.innerHTML = `Currently playing: <strong>${song.charAt(0).toUpperCase() + song.slice(1)}</strong>`;
    audio.src = `assets/sounds/${song}.mp3`;
    cover.src = `assets/images/${song}.jpg`;
}

// Play song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    audio.pause();
}

// Previous Song
function prevSong() {
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

// Next Song
function nextSong() {
    songIndex++;
    if(songIndex > (songs.length -1)){
        songIndex = 0 ;
    }
    loadSong(songs[songIndex]);
    
    playSong();
}

// update progress bar
function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width =`${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
  
    audio.currentTime = (clickX / width) * duration;
  }

// EVENT LISTENERS

playBtn.addEventListener('click', () => {
    //Check to see if song is playing or not.
    const isPlaying = musicContainer.classList.contains('play');
    if(isPlaying){
        pauseSong();
    } else {
        playSong();
    }
})

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Progress bar updates
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Next song when songs ends
audio.addEventListener('ended', nextSong);