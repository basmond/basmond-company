const audio = document.getElementById("audio");

let currentTrack = 0;

function playTrack(index){

    currentTrack = index;

    audio.src = tracks[index].file;

    audio.play();

    updateActiveTrack();

}

function pauseTrack(){

    audio.pause();

}

function toggleTrack(){

    if(audio.paused){

        audio.play();

    }else{

        audio.pause();

    }

}

function updateActiveTrack(){

    document.querySelectorAll(".track").forEach(track=>{

        track.classList.remove("active");

    });

    document
        .querySelector(`[data-index="${currentTrack}"]`)
        .classList.add("active");

}
