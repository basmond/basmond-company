const archiveItems = [
  {
    date: "26-03-05",
    title: "Good Flirts.",
    url: "https://example.com"
  },
  {
    date: "26-02-23",
    title: "Birds & the Bees.",
    url: "https://example.com"
  },
  {
    date: "26-02-20",
    title: "Ca$ino.",
    url: "https://example.com"
  },
  {
    date: "25-07-31",
    title: "Project 3 Agency",
    url: "https://example.com"
  },
  {
    date: "25-05-29",
    title: "Dave Free for Bottega Veneta.",
    url: "https://example.com"
  },
  {
    date: "25-05-25",
    title: "lose.",
    url: "https://example.com"
  },
  {
    date: "25-04-22",
    title: "Kendrick Lamar for Chanel.",
    url: "https://example.com"
  },
  {
    date: "25-04-19",
    title: "Grand National Tour.",
    url: "https://example.com"
  },
  {
    date: "25-04-11",
    title: "luther.",
    url: "https://example.com"
  },
  {
    date: "25-03-18",
    title: "Most Innovative Companies 2025.",
    url: "https://example.com"
  },
  {
    date: "25-02-09",
    title: "Super Bowl LIX Halftime Show.",
    url: "https://example.com"
  },
  {
    date: "25-02-02",
    title: "Kendrick Lamar wins 5 Grammys.",
    url: "https://example.com"
  }
];

const archive = document.querySelector("#archive");

archive.innerHTML = archiveItems
  .map((item) => {
    return `
      <div class="archive-row">
        <div class="archive-date">${item.date}</div>
        <a class="archive-link" href="${item.url}">
          ${item.title}<span class="external-mark">↴</span>
        </a>
      </div>
    `;
  })
  .join("");
