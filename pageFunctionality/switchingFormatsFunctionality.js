import { variants } from "../dataStorage.js";

function selectedVariant() {
  Array.from(
    document.querySelectorAll(".description__formats .description__format"),
  ).forEach((el) => el.classList.remove("selected"));
  if (sessionStorage.getItem("selectedVariant") !== null) {
    Array.from(
      document.querySelectorAll(".description__formats .description__format"),
    )
      .find(
        (el) =>
          el.textContent.split(" ")[0] ===
          sessionStorage.getItem("selectedVariant"),
      )
      .classList.add("selected");

    document.querySelector(".description__sku div:nth-child(2)").textContent =
      variants[`${sessionStorage.getItem("selectedVariant")}`].article;
    document.querySelector(
      ".description__prices .description__new-price",
    ).textContent =
      variants[`${sessionStorage.getItem("selectedVariant")}`].price;
    document.querySelector(
      ".description__prices .description__old-price",
    ).textContent =
      variants[`${sessionStorage.getItem("selectedVariant")}`].oldPrice;
  } else {
    sessionStorage.setItem("selectedVariant", "100");
    selectedVariant();
  }
}

function changeVariant() {
  Array.from(
    document.querySelectorAll(".description__formats .description__format"),
  ).forEach((el) =>
    el.addEventListener("click", () => {
      sessionStorage.setItem("selectedVariant", el.textContent.split(" ")[0]);
      selectedVariant();
    }),
  );
}

selectedVariant();
changeVariant();
