const archiveItems = [
  {
    date: "26-06-06",
    title: "THE WAVE by silentbleak.",
    videoId: "kjaUHWz18oQ"
  },
  {
    date: "26-05-28",
    title: "hundreds freestyle by silentbleak.",
    url: "https://drive.google.com/file/d/118AlpMK0lZHepB9ix4WH68iGVGTUKZqn/view"
  },
  {
    date: "26-01-15",
    title: "shawn wayne win 4 sanboard awards for depth.",
    url: "https://tagger.gambit-rp.com/posts/33924"
  },
  {
    date: "25-12-28",
    title: "Bachelors Ballad by frea twee.",
    videoId: "YPmwZEFNPwM"
  },
  {
    date: "25-05-02",
    title: "FREAK TWEEN by frea twee.",
    videoId: "RE_4bzddZzw"
  },
  {
    date: "25-04-25",
    title: "depth by shawn wayne.",
    videoId: "fPtnRC0Y5dM"
  },
  {
    date: "25-02-09",
    title: "VICES by shawn wayne.",
    videoId: "0YeQUmZ34_k"
  },
  {
    date: "25-01-12",
    title: "shawn wayne win 2 sanboard awards for Hydration We Need.",
    url: "https://tagger.gambit-rp.com/pages/sanboard"
  },
  {
    date: "24-11-22",
    title: "Hydration We Need by shawn wayne.",
    videoId: "BjBAgCIF6po"
  },
  {
    date: "24-11-15",
    title: "New Goals by shawn wayne.",
    videoId: "hUB-dy29zc0"
  },
  {
    date: "24-04-05",
    title: "Boat That Sailed At Sunset by shawn wayne.",
    videoId: "y_hFfOEjyiY"
  }
];

const archive = document.querySelector("#archive");

archive.innerHTML = archiveItems
  .map((item, index) => {
    return `
      <div class="archive-item">
        <div class="archive-row">
          <div class="archive-date">${item.date}</div>

          <button class="archive-link" type="button" data-index="${index}">
            ${item.title}
            <span class="external-mark">⌄</span>
          </button>
        </div>

        <div class="release-player" hidden>
          <iframe
            title="${item.title}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    `;
  })
  .join("");

const buttons = document.querySelectorAll(".archive-link");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const index = Number(button.dataset.index);
    const item = archiveItems[index];
    const currentPlayer = button
      .closest(".archive-item")
      .querySelector(".release-player");
    const currentIframe = currentPlayer.querySelector("iframe");

    const wasOpen = !currentPlayer.hidden;

    document.querySelectorAll(".release-player").forEach((player) => {
      player.hidden = true;
      player.classList.remove("is-open");
      player.querySelector("iframe").src = "";
    });

    document.querySelectorAll(".archive-link").forEach((btn) => {
      btn.classList.remove("is-active");
    });

    if (!item.videoId) {
      if (item.url) {
        window.location.href = item.url;
      }
    
      return;
    }
    
    if (!wasOpen) {
      currentIframe.src = `https://www.youtube.com/embed/${item.videoId}?rel=0`;
      currentPlayer.hidden = false;
    
      requestAnimationFrame(() => {
        currentPlayer.classList.add("is-open");
      });
    
      button.classList.add("is-active");
    }
  });
});
