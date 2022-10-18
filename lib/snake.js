import { Input } from "./input.js";

export class Snake {
    static inputDirection = {x: 0, y: 0};
    static lastDrawnDirection = {x: 0, y: 0};
    static newSegments = 0;
    
    static SNAKE_SPEED = 5; // moves per second
    static EXPANSION_RATE = 1; // segments per food

    static snakeBody = [{x: 11, y: 11}];

    static opposite = (dir1, dir2) => dir1.x == -dir2.x && dir1.y == -dir2.y;

    static update = () => {
        Snake.addSegments();
        const newDir = Input.direction;
        if (!Snake.opposite(Snake.lastDrawnDirection, newDir)) Snake.inputDirection = newDir;
    
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

    static expandSnake = () => {
        Snake.newSegments += Snake.EXPANSION_RATE;
    }

    static onSnake = (position, {ignoreHead=false} = {}) => {
        return Snake.snakeBody.slice(ignoreHead ? 1 : 0).some(segment => {
            return Snake.equalPositions(segment, position);
        })
    }
    
    static equalPositions = (pos1, pos2) => {
        return pos1.x === pos2.x&& pos1.y === pos2.y;
    }

    static addSegments = () => {
        for (let i = 0; i < Snake.newSegments; i++) {
            Snake.snakeBody.push({...Snake.snakeBody[Snake.snakeBody.length - 1]});
        }

        Snake.newSegments = 0;
    }

    static getSnakeHead = () => {
        return Snake.snakeBody[0];
    }
    
    static snakeIntersection = () => {
        return Snake.onSnake(Snake.snakeBody[0], { ignoreHead: true })
    }
}


