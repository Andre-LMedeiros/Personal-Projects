const bntEl = document.querySelector(".btn");

bntEl.addEventListener("mouseover", (event) => {
  const y = event.pageY - bntEl.offsetTop;
  const x = event.pageX - bntEl.offsetLeft;

  bntEl.style.setProperty("--xPos", x + "px");
  bntEl.style.setProperty("--yPos", y + "px");
});
