const sectionsEl = document.querySelectorAll(".section");
const sectBtnsEl = document.querySelectorAll(".controls");
const sectBtnEl = document.querySelectorAll(".control");
const allSectionsEl =
  document.querySelector(".main-content"); /* Target the hole body */

function pageTransitions() {
  //Button click active class
  for (let i = 0; i < sectBtnEl.length; i++) {
    sectBtnEl[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }

  // function pageTransitions() {
  //     sectBtnEl.forEach(button => {
  //         button.addEventListener("click", function () {
  //             document.querySelector(".active-btn").classList.remove("active-btn");
  //             this.classList.add("active-btn");
  //             document.querySelector(".active").classList.remove("active");
  //             document.getElementById(button.dataset.id).classList.add("active");
  //         })
  //     })
  // }

  /* Sections Active Class */
  allSectionsEl.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      sectionsEl.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  /* TOGGLE THEME*/
  const themeBtnEl = document.querySelector(".theme-btn");
  themeBtnEl.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}

pageTransitions();
