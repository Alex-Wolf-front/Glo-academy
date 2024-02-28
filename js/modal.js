const modal = () => {
  const modal = document.querySelector(".search-model");
  const modalOpen = document.querySelector(".search-switch");
  const modalClose = modal.querySelector(".search-close-switch");

  modalOpen.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("active");
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  const searchInput = modal.querySelector("#search-input");
  searchInput.addEventListener("keyup", () => {
    console.log(searchInput.value);
  });
};

modal();
