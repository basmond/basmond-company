const tracksContainer = document.getElementById("tracks");

tracks.forEach((track,index)=>{

    tracksContainer.innerHTML+=`

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

        <div class="track-duration">
            ${track.duration}
        </div>

    </div>

    `;

});

document.querySelectorAll(".track").forEach(track=>{

    track.addEventListener("click",()=>{

        playTrack(Number(track.dataset.index));

    });

});
