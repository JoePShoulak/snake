import { Input } from "./input.js";

export const SNAKE_SPEED = 5; // moves per second
export const EXPANSION_RATE = 1; // segments per food

let inputDirection = {x: 0, y: 0};
let lastDrawnDirection = {x: 0, y: 0};

let newSegments = 0;

const snakeBody = [{x: 11, y: 11}];

const opposite = (dir1, dir2) => dir1.x == -dir2.x && dir1.y == -dir2.y;

export const update = () => {
    addSegments();
    const newDir = Input.direction;
    if (!opposite(lastDrawnDirection, newDir)) inputDirection = newDir;

    for (let i=snakeBody.length-2; i>=0; i--) {
        snakeBody[i+1] = {...snakeBody[i]};
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export const draw = (gameBoard) => {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
        lastDrawnDirection = inputDirection;
    });
}

export const expandSnake = () => {
    newSegments += EXPANSION_RATE;
}

export const onSnake = (position, {ignoreHead=false} = {}) => {
    return snakeBody.slice(ignoreHead ? 1 : 0).some(segment => {
        return equalPositions(segment, position);
    })
}

export const equalPositions = (pos1, pos2) => {
    return pos1.x === pos2.x&& pos1.y === pos2.y;
}

export const addSegments = () => {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]});
    }

    newSegments = 0;
}

export const getSnakeHead = () => {
    return snakeBody[0];
}

export const snakeIntersection = () => {
    return onSnake(snakeBody[0], { ignoreHead: true })
}
