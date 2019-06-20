const container = document.getElementById('container');
const square = document.getElementById('alien');
const food = document.createElement('planet');

document.getElementById("body").addEventListener("load", Foodspawn());

document.onkeydown = animate;

let squareLeft = 0;
let squareTop = 0;

function animate(e) {
    if (e.keyCode === 39) {
        squareLeft += 50;
        if (squareLeft >= 700) {
            squareLeft = 700;
        }
    }

    if (e.keyCode === 37) {
        squareLeft -= 50;
        if (squareLeft < 0) {
            squareLeft = 0;
        }
    }

    if (e.keyCode === 40) {
        squareTop += 50;
        if (squareTop > 450) {
            squareTop = 450;
        }
    }

    if (e.keyCode === 38) {
        squareTop -= 50;
        if (squareTop < 0) {
            squareTop = 0;
        }
    }
    square.style.left = squareLeft + 'px';
    square.style.top = squareTop + 'px';

    detectCollision();
}

function Foodspawn() {
    food.id = 'planet';
    // created div will be assigned 'planet' id 
    randomX = Math.floor(Math.random() * (13) + 1) * 50;
    randomY = Math.floor(Math.random() * (7) + 2) * 50;
    // makes random positions 
    food.style.left = randomX + 'px';
    food.style.top = randomY + 'px';
    // left and top will get random position 
    container.appendChild(food);
    // put created div in container 
}

function detectCollision() {
    if (squareLeft === randomX && squareTop === randomY) {
        Foodspawn();
    }
}
