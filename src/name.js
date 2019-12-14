const body = document.querySelector("body");
const nameForm = body.querySelector(".js-name");
const input = body.querySelector(".js-name input");
const greeting = body.querySelector(".js-greeting");

const nameDiv = body.querySelector(".js-nameDiv");
const todoDiv = body.querySelector(".js-todoDiv");

const USER_LS = `user`;

const GHOST_CN = `ghost`;

function checkName() {
  const user = localStorage.getItem(USER_LS);
  if (user === null) {
    // show
    todoDiv.classList.add(GHOST_CN);
    nameDiv.classList.remove(GHOST_CN);
    greeting.innerHTML = `Insert Your name.`;
  } else {
    todoDiv.classList.remove(GHOST_CN);
    nameDiv.classList.add(GHOST_CN);
    greeting.innerHTML = `Hello ${user}, What is your Task?`;
  }
}

function saveName(event) {
  event.preventDefault();
  const user = localStorage.getItem(USER_LS);
  console.log(user);
  if (user === null) {
    localStorage.setItem(USER_LS, input.value);
  }
  location.reload(true);
}

function init() {
  checkName();

  nameForm.addEventListener("submit", saveName);
}
init();
