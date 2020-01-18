const body = document.querySelector("body");

const IMG_COUNT = 5;

function paintImg(imageNumber) {
    const image = new Image();
    image.src = `images/${imageNumber}.jpg`;
    image.classList.add("backimg");
    body.prepend(image);
}

function getRandom() {
    return Math.floor(Math.random() * IMG_COUNT + 1);
}

function init() {
    const randomNumber = getRandom();
    paintImg(randomNumber);
}
init();