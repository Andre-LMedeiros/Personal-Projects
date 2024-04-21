const mainContainerEl = document.querySelector(".main-container");
const popUpContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");
const joinBtnEl = document.querySelector(".btn");

joinBtnEl.addEventListener("click", () => {
  mainContainerEl.classList.add("bg-blur");
  popUpContainerEl.classList.remove("non-active");
});

closeIconEl.addEventListener("click", () => {
  mainContainerEl.classList.remove("bg-blur");
  popUpContainerEl.classList.add("non-active");
});
