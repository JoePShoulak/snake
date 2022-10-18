import {Snake} from "./Snake.js";
import {GameWindow} from "./Grid.js";

export class Food {
    static newFoodPos = () => {
        let newPos;
        
        while (newPos == null || Snake.on(newPos)) {
            newPos = GameWindow.randomPos();
        }
        
        return newPos;
    }

    static food = Food.newFoodPos();

    static update = () => {
        if (Snake.on(Food.food)) {
            Snake.expand();
            Food.food = Food.newFoodPos();
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
