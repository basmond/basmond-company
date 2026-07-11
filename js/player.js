const audio = document.getElementById("audio");


let currentTrack = 0;


const player = document.getElementById("player");
const playPauseBtn = document.getElementById("playPauseBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const albumPlay = document.getElementById("albumPlay");
const playerTitle = document.getElementById("playerTitle");

function playTrack(index){


currentTrack=index;


audio.src=tracks[index].file;



player.classList.add("show");



playerTitle.textContent = tracks[index].title;



document.getElementById("playPauseBtn").textContent="⏸";



audio.play().catch(()=>{});



updateActiveTrack();


}



function updateActiveTrack(){


document.querySelectorAll(".track").forEach(track=>{

track.classList.remove("active");

});



document
.querySelector(`[data-index="${currentTrack}"]`)
.classList.add("active");


}



playPauseBtn.onclick=()=>{


if(audio.paused){

audio.play();

playPauseBtn.textContent="⏸";


}else{


audio.pause();

playPauseBtn.textContent="▶";


}


};




nextBtn.onclick=()=>{


currentTrack++;


if(currentTrack>=tracks.length)

currentTrack=0;



playTrack(currentTrack);


};




prevBtn.onclick=()=>{


currentTrack--;


if(currentTrack<0)

currentTrack=tracks.length-1;



playTrack(currentTrack);


};




audio.onended=()=>{

nextBtn.click();

};




albumPlay.onclick=()=>{

playTrack(0);

};

const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";

    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);

    return `${min}:${sec.toString().padStart(2, "0")}`;
}

// Когда загрузился трек
audio.addEventListener("loadedmetadata", () => {
    progressBar.max = audio.duration;
    durationTime.textContent = formatTime(audio.duration);
});

// Во время воспроизведения
audio.addEventListener("timeupdate", () => {
    progressBar.value = audio.currentTime;
    currentTime.textContent = formatTime(audio.currentTime);
});

// Перемотка
progressBar.addEventListener("input", () => {
    audio.currentTime = progressBar.value;
});
