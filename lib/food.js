import {onSnake, expandSnake} from "./snake.js";
import {randomGridPosition} from "./grid.js";

export const getRandomFoodPosition = () => {
    let newFoodPosition;

    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }

    return newFoodPosition;
}


let food = getRandomFoodPosition();

export const update = () => {
    if (onSnake(food)) {
        console.log("hit")
        expandSnake();
        food = getRandomFoodPosition();
    }
}

export const draw = (gameBoard) => {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}
