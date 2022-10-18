import {SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection} from "./snake.js"
import {update as updateFood, draw as drawFood} from "./food.js"
import {outsideGrid} from "./grid.js"

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

const update = () => {
    updateSnake();
    updateFood();
    checkDeath();
}

const draw = () => {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

const main = (currentTime) => {
    if (gameOver) {
        return alert('you lose');
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lastRenderTime = currentTime;
    
    update();
    draw();
}

const checkDeath = () => {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}


window.requestAnimationFrame(main)
