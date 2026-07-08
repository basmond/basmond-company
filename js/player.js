const audio = document.getElementById("audio");


let currentTrack = 0;


const player = document.getElementById("player");



function playTrack(index){


currentTrack=index;


audio.src=tracks[index].file;



player.classList.add("show");



document.getElementById("playerTitle").textContent =
tracks[index].title;



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
