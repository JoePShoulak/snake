import {SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection} from "./snake.js"
import { Food } from "./food.js";
import {outsideGrid} from "./grid.js"

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

const update = () => {
    updateSnake();
    Food.update();
    checkDeath();
}

const draw = () => {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    Food.draw(gameBoard);
}

const main = (currentTime) => {
    if (gameOver) {
        if (confirm("Play again?")) {
            window.location = './';
        }
        return;
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
