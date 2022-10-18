const floor = Math.floor;
const random = Math.random;

export class GameWindow {
    static size = 21;

    static randomPos = () => {
        return {
            x: floor(random() * GameWindow.size) + 1,
            y: floor(random() * GameWindow.size) + 1
        }
    }

    static outside = (position) => {
        return (
            position.x < 1 || position.x > GameWindow.size ||
            position.y < 1 || position.y > GameWindow.size
        )
    }
}