const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
  createPassword();
});

copyIconEl.addEventListener("click", () => {
  copyPassword();
  if (inputEl.value) {
    alertEl.classList.remove("active");
    setTimeout(() => {
      alertEl.classList.add("active");
    }, 2000);
  }
});

function createPassword() {
  const charaters =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const passwordLength = 14;
  let password = "";

  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * charaters.length);
    password += charaters.substring(randomNum, randomNum + 1);
  }
  inputEl.value = password;
  alertEl.innerText = "Password copied!!";
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(
    0,
    9999
  ); /* Allows it to be used in mobile devices */
  navigator.clipboard.writeText(inputEl.value);
}
