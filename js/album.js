const tracksContainer = document.getElementById("tracks");


tracks.forEach((track,index)=>{


tracksContainer.innerHTML += `


<div class="track" data-index="${index}">


    <div class="track-number">

        <span class="number">
            ${index+1}
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



    <button class="lyrics-btn" data-lyrics="${index}">

        Lyrics

    </button>



    <div class="track-duration">

        ${track.duration}

    </div>


</div>


`;


});





// запуск трека

document.querySelectorAll(".track").forEach(track=>{


track.addEventListener("click",(e)=>{


if(e.target.classList.contains("lyrics-btn"))
return;


playTrack(Number(track.dataset.index));


});


});




// открытие текста

document.querySelectorAll(".lyrics-btn").forEach(button=>{


button.addEventListener("click",()=>{


const index = button.dataset.lyrics;


openLyrics(index);


});


});




// окно текста

function openLyrics(index){


alert(tracks[index].lyrics);


}
