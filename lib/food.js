import {onSnake, expandSnake} from "./snake.js";
import {randomGridPosition} from "./grid.js";

export class Food {
    static getRandomFoodPosition = () => {
        let newFoodPosition;
        
        while (newFoodPosition == null || onSnake(newFoodPosition)) {
            newFoodPosition = randomGridPosition();
        }
        
        return newFoodPosition;
    }

    static food = Food.getRandomFoodPosition();

    static update = () => {
        if (onSnake(Food.food)) {
            expandSnake();
            Food.food = Food.getRandomFoodPosition();
        }
    }

    static draw = (gameBoard) => {
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = Food.food.y;
        foodElement.style.gridColumnStart = Food.food.x;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
    }
}
