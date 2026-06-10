const archiveItems = [
  {
    date: "26-03-05",
    title: "Good Flirts.",
    videoId: "dQw4w9WgXcQ"
  },
  {
    date: "26-02-23",
    title: "Birds & the Bees.",
    videoId: "dQw4w9WgXcQ"
  },
  {
    date: "26-02-20",
    title: "Ca$ino.",
    videoId: "dQw4w9WgXcQ"
  },
  {
    date: "25-07-31",
    title: "Project 3 Agency",
    videoId: "dQw4w9WgXcQ"
  },
  {
    date: "25-05-29",
    title: "Dave Free for Bottega Veneta.",
    videoId: "dQw4w9WgXcQ"
  },
  {
    date: "25-05-25",
    title: "lose.",
    videoId: "dQw4w9WgXcQ"
  },
  {
    date: "25-04-22",
    title: "Kendrick Lamar for Chanel.",
    videoId: "dQw4w9WgXcQ"
  },
  {
    date: "25-04-19",
    title: "Grand National Tour.",
    videoId: "dQw4w9WgXcQ"
  },
  {
    date: "25-04-11",
    title: "luther.",
    videoId: "dQw4w9WgXcQ"
  },
  {
    date: "25-03-18",
    title: "Most Innovative Companies 2025.",
    videoId: "dQw4w9WgXcQ"
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

        <div class="release-player" id="player-${index}">
          <iframe
            src=""
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
    const index = button.dataset.index;
    const item = archiveItems[index];
    const player = document.querySelector(`#player-${index}`);
    const iframe = player.querySelector("iframe");
    const isOpen = player.classList.contains("is-open");

    document.querySelectorAll(".release-player").forEach((el) => {
      el.classList.remove("is-open");
      el.querySelector("iframe").src = "";
    });

    document.querySelectorAll(".archive-link").forEach((btn) => {
      btn.classList.remove("is-active");
    });

    if (!isOpen) {
      iframe.src = `https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0`;
      player.classList.add("is-open");
      button.classList.add("is-active");
    }
  });
});
