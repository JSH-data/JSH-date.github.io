const body = document.querySelector("body");

// Math.floor(3.5) = 3, Math.ceil(3.5) = 4
// Math.floor(Math.random() * 5) 5미만의 숫자를 랜덤으로 반환

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.remove("bgImage");
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom(); 
    paintImage(randomNumber);
}

init();
