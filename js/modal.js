const modal = document.querySelector(".search-model");
const modalOpen = document.querySelector(".search-switch");
const modalClose = modal.querySelector(".search-close-switch");

modalOpen.addEventListener("click", () => {
    modal.style.display = "block";
})

modalClose.addEventListener("click", () => {
    modal.style.display = "none";
})