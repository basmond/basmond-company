const merchItems = [
  {
    name: "bввe",
    image: "merch/tee-white.png",
    status: "Buy",
    url: "https://example.com"
  },
  {
    name: "basMond Hoodie",
    image: "merch/hoodie-black.png",
    status: "Buy",
    url: "https://example.com"
  },
  {
    name: "Records Cap",
    image: "merch/cap.png",
    status: "Sold out",
    url: ""
  },
  {
    name: "basMond Longsleeve",
    image: "merch/longsleeve.png",
    status: "Buy",
    url: "https://example.com"
  },
  {
    name: "basMond Poster",
    image: "merch/poster.png",
    status: "Sold out",
    url: ""
  }
];

const merchGrid = document.querySelector("#merchGrid");

merchGrid.innerHTML = merchItems
  .map((item) => {
    const isSoldOut = item.status.toLowerCase() === "sold out";

    return `
      <article class="merch-card">
        <div class="merch-image-wrap">
          <img src="${item.image}" alt="${item.name}" class="merch-image" />
        </div>

        <div class="merch-info">
          <h2 class="merch-title">${item.name}</h2>

          ${
            isSoldOut
              ? `<span class="merch-status is-sold-out">Sold out</span>`
              : `<a class="merch-status" href="${item.url}" target="_blank" rel="noopener">Buy</a>`
          }
        </div>
      </article>
    `;
  })
  .join("");
