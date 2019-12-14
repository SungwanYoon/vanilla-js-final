const IMG_NUMBER = 4;

function paintImage(imageNumber) {
  const image = new Image();
  //console.log(imageNumber);
  image.src = `images/${imageNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
