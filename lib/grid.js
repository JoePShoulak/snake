
const floor = Math.floor;
const random = Math.random;

const GRID_SIZE = 21;

export const randomGridPosition = () => {
    return {
        x: floor(random() * GRID_SIZE) + 1,
        y: floor(random() * GRID_SIZE) + 1
    }
}

export const outsideGrid = (position) => {
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}
