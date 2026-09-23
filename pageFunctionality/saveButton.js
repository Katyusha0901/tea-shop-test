function saveProduct() {
  document
    .querySelector(".description__saved")
    .addEventListener("click", () => {
      if (
        document
          .querySelector(".description__saved")
          .classList.contains("saved")
      ) {
        document.querySelector(".description__saved").classList.remove("saved");
      } else {
        document.querySelector(".description__saved").classList.add("saved");
      }
    });
}

saveProduct();
