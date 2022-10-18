
const floor = Math.floor;
const random = Math.random;

const GRID_SIZE = 21;

export const randomGridPosition = () => {
    return {
        x: floor(random() * GRID_SIZE) + 1,
        y: floor(random() * GRID_SIZE) + 1
    }
}
