import {Snake} from "./snake.js";
import {Grid} from "./grid.js";

export class Food {
    static getRandomFoodPosition = () => {
        let newFoodPosition;
        
        while (newFoodPosition == null || Snake.onSnake(newFoodPosition)) {
            newFoodPosition = Grid.randomGridPosition();
        }
        
        return newFoodPosition;
    }

    static food = Food.getRandomFoodPosition();

    static update = () => {
        if (Snake.onSnake(Food.food)) {
            Snake.expandSnake();
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
