const floor = Math.floor;
const random = Math.random;

export class Grid {
    static size = 21;

    static randomGridPosition = () => {
        return {
            x: floor(random() * Grid.size) + 1,
            y: floor(random() * Grid.size) + 1
        }
    }

    static outsideGrid = (position) => {
        return (
            position.x < 1 || position.x > Grid.size ||
            position.y < 1 || position.y > Grid.size
        )
    }
}