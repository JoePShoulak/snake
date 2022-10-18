let inputDirection = {x: 0, y: 0};

const dir = {
    up: {x: 0, y: -1},
    down: {x: 0, y: 1},
    left: {x: -1, y: 0},
    right: {x: 1, y: 0}
}

const updateDir = (newDir) => {
    inputDirection = newDir;
}

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
        case 'w':
            updateDir(dir.up);
            break;
        case 'ArrowDown':
        case 's':
            updateDir(dir.down);
            break;
        case 'ArrowLeft':
        case 'a':
            updateDir(dir.left);
            break;
        case 'ArrowRight':
        case 'd':
            updateDir(dir.right);
            break;
        default:
            break;
    }
})

export const getInputDirection = () => {
    return inputDirection;
}
