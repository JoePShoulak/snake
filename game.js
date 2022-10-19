import { Snake} from "./lib/Snake.js"
import { Food } from "./lib/Food.js";
import { GameWindow } from "./lib/Grid.js"
import { Input } from "./lib/Input.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

Input.listen();

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
    if (secondsSinceLastRender < 1 / Snake.speed) return;

    lastRenderTime = currentTime;
    
    update();
    draw();
}

const checkDeath = () => gameOver = GameWindow.outside(Snake.getHead()) || Snake.intersectedSelf();

window.requestAnimationFrame(main)
