const clockTitle = document.querySelector(".js-clock");
const NINE_HOURS_MILLISECONDS = 32400000;

function paintTime() {
  const timestamp = new Date();
  const now = new Date(timestamp);
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const seconds = now.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }.${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  paintTime();
  setInterval(paintTime, 1000);
}
init();
