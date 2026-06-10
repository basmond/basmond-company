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
