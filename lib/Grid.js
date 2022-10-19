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

    static outside = (pos) => {
        return pos.x < 1 || pos.y < 1 || pos.x > GameWindow.size || pos.y > GameWindow.size;
    }
}