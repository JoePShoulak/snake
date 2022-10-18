export class Input {
    static direction = { x: 0, y: 0 };

    static cardinal = {
        up: { x: 0, y: -1 },
        down: { x: 0, y: 1 },
        left: { x: -1, y: 0 },
        right: { x: 1, y: 0 }
    }

    static updateDir = (newDir) => {
        Input.direction = newDir;
    }

    static addListener = () => {
        window.addEventListener('keydown', e => {
            switch (e.key) {
                case 'ArrowUp':
                case 'w':
                    Input.updateDir(Input.cardinal.up);
                    break;
                case 'ArrowDown':
                case 's':
                    Input.updateDir(Input.cardinal.down);
                    break;
                case 'ArrowLeft':
                case 'a':
                    Input.updateDir(Input.cardinal.left);
                    break;
                case 'ArrowRight':
                case 'd':
                    Input.updateDir(Input.cardinal.right);
                    break;
                default:
                    break;
            }
        })
    }
}


