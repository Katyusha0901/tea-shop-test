function addToBasket() {
  document
    .querySelector(".description__basket-button")
    .addEventListener("click", () => {
      document.querySelector(".description__basket-button div").textContent =
        `${Number(document.querySelector(".description__basket-button div").textContent) + 1}`;
    });
}

addToBasket();
