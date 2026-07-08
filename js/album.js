const tracksContainer = document.getElementById("tracks");


let allTracks = [];

let number = 1;



albumTracks.forEach(disk=>{


tracksContainer.innerHTML += `

<div class="disk-title">

    💿 ${disk.disk}

</div>

`;



disk.tracks.forEach(track=>{


track.id = allTracks.length;

allTracks.push(track);



tracksContainer.innerHTML += `


<div class="track" data-index="${track.id}">


<div class="track-number">

<span class="number">
${number}
</span>

<span class="play-icon">
▶
</span>

</div>


<div class="track-title">

${track.title}

</div>



<div class="track-plays">

${track.plays}

</div>




<button class="lyrics-btn" data-id="${track.id}">

Lyrics

</button>




<div class="track-duration">

${track.duration}

</div>


</div>


`;

number++;


});


});



tracks = allTracks;



document.querySelectorAll(".track").forEach(track=>{


track.onclick=(e)=>{


if(e.target.classList.contains("lyrics-btn"))
return;


playTrack(Number(track.dataset.index));


};


});





document.querySelectorAll(".lyrics-btn").forEach(btn=>{


btn.onclick=()=>{


openLyrics(btn.dataset.id);


};


});





function openLyrics(id){


document
.getElementById("lyricsText")
.textContent =
tracks[id].lyrics;



document
.getElementById("lyricsTitle")
.textContent =
tracks[id].title;



document
.getElementById("lyricsModal")
.classList.add("open");


}



document
.getElementById("closeLyrics")
.onclick=()=>{


document
.getElementById("lyricsModal")
.classList.remove("open");


};
