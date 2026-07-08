const audio = document.getElementById("audio");

let currentTrack = 0;

const player = document.getElementById("player");

function playTrack(index){

    currentTrack=index;

    audio.src=tracks[index].file;

    audio.play();

    player.style.display="flex";

    document.getElementById("playerTitle").textContent=
    tracks[index].title;

    document.getElementById("durationTime").textContent=
    tracks[index].duration;

    document.getElementById("playPauseBtn").textContent="⏸";

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

function formatTime(time){

    const m=Math.floor(time/60);

    const s=Math.floor(time%60);

    return `${m}:${s<10?"0":""}${s}`;

}

audio.addEventListener("timeupdate",()=>{

    const percent=(audio.currentTime/audio.duration)*100;

    progressBar.value=percent||0;

    currentTime.textContent=formatTime(audio.currentTime);

});

progressBar.addEventListener("input",()=>{

    audio.currentTime=(progressBar.value/100)*audio.duration;

});

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
