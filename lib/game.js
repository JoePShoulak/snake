import { Snake} from "./snake.js"
import { Food } from "./food.js";
import { Grid } from "./grid.js"
import { Input } from "./input.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

Input.addListener();

const update = () => {
    Snake.update();
    Food.update();
    checkDeath();
}

const draw = () => {
    gameBoard.innerHTML = '';
    Snake.draw(gameBoard);
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
    if (secondsSinceLastRender < 1 / Snake.SNAKE_SPEED) return;

    lastRenderTime = currentTime;
    
    update();
    draw();
}

const checkDeath = () => {
    gameOver = Grid.outsideGrid(Snake.getSnakeHead()) || Snake.snakeIntersection();
}


window.requestAnimationFrame(main)
