import { oppositeDirections, equalPositions } from "./helper.js";
import { Input } from "./Input.js";

export class Snake {
    static inputDirection = {x: 0, y: 0};
    static lastDrawnDirection = {x: 0, y: 0};
    static newSegments = 0;
    
    static speed = 5; // moves per second
    static expansionRate = 1; // segments per food

    static snakeBody = [{x: 11, y: 11}];

    static update = () => {
        Snake.addSegments();
        const newDir = Input.direction;
        if (!oppositeDirections(Snake.lastDrawnDirection, newDir)) Snake.inputDirection = newDir;
    
        for (let i=Snake.snakeBody.length-2; i>=0; i--) {
            Snake.snakeBody[i+1] = {...Snake.snakeBody[i]};
        }
    
        Snake.snakeBody[0].x += Snake.inputDirection.x;
        Snake.snakeBody[0].y += Snake.inputDirection.y;
    }

    static draw = (gameBoard) => {
        Snake.snakeBody.forEach(segment => {
            const snakeElement = document.createElement('div');
            snakeElement.style.gridRowStart = segment.y;
            snakeElement.style.gridColumnStart = segment.x;
            snakeElement.classList.add('snake');
            gameBoard.appendChild(snakeElement);
            Snake.lastDrawnDirection = Snake.inputDirection;
        });
    }

    static on = (position, {ignoreHead=false} = {}) => {
        return Snake.snakeBody.slice(ignoreHead ? 1 : 0).some(segment => {
            return equalPositions(segment, position);
        })
    }
    
    static addSegments = () => {
        for (let i = 0; i < Snake.newSegments; i++) {
            Snake.snakeBody.push({...Snake.snakeBody[Snake.snakeBody.length - 1]});
        }
        
        Snake.newSegments = 0;
    }
    
    static getHead = () =>  Snake.snakeBody[0];

    static expand = () => Snake.newSegments += Snake.expansionRate;

    static intersectedSelf = () => Snake.on(Snake.snakeBody[0], { ignoreHead: true });
}


