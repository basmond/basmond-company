const merchItems = [
  {
    name: "basMond san andreas t-shirt white 50$",
    image: "merch/1shirt.png",
    status: "Buy",
    url: "https://tagger.gambit-rp.com/pages/basmond"
  },
  {
    name: "basMond panama hat 15$",
    image: "merch/1panama.png",
    status: "Sold out",
    url: "https://tagger.gambit-rp.com/pages/basmond"
  },
  {
    name: "basMond sweater 125$",
    image: "merch/1sweater.png",
    status: "Sold out",
    url: "https://tagger.gambit-rp.com/pages/basmond"
  },
  {
    name: "basMond x sony t610 phone 299$",
    image: "merch/1phone.png",
    status: "Sold out",
    url: "https://tagger.gambit-rp.com/pages/basmond"
  },
  {
    name: "basMond san andreas t-shirt green 50$",
    image: "merch/2shirt.png",
    status: "Sold out",
    url: "https://tagger.gambit-rp.com/pages/basmond"
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
