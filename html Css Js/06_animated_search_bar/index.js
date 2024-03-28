const searchBarContainerEl = document.querySelector(".search-bar-conteiner");

const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
});
