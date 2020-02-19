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
let songIndex = 2;
//Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song){
    title.innerText = song;
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