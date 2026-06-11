const merchItems = [
  {
    name: "basMond Hoodie",
    image: "merch/hoodie.png",
    status: "Buy",
    url: "https://example.com"
  },
  {
    name: "basMond Tee",
    image: "merch/tee.png",
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
    name: "basMond Poster",
    image: "merch/poster.png",
    status: "Buy",
    url: "https://example.com"
  }
];

const shopGrid = document.querySelector("#shopGrid");

shopGrid.innerHTML = merchItems
  .map((item) => {
    const soldOut = item.status.toLowerCase() === "sold out";

    return `
      <article class="shop-card">
        <div class="shop-image-box">
          <img src="${item.image}" alt="${item.name}" class="shop-image">
        </div>

        <div class="shop-info">
          <h2 class="shop-title">${item.name}</h2>

          ${
            soldOut
              ? `<span class="shop-action is-sold-out">Sold out</span>`
              : `<a class="shop-action" href="${item.url}" target="_blank" rel="noopener">Buy</a>`
          }
        </div>
      </article>
    `;
  })
  .join("");
