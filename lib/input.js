export class Input {
    static direction = { x: 0, y: 0 };

    static cardinal = {
        up: { x: 0, y: -1 },
        down: { x: 0, y: 1 },
        left: { x: -1, y: 0 },
        right: { x: 1, y: 0 }
    }

    static update = (newDir) => Input.direction = newDir;

    static listen = () => {
        window.addEventListener('keydown', e => {
            switch (e.key) {
                case 'ArrowUp':
                case 'w':
                    Input.update(Input.cardinal.up);
                    break;
                case 'ArrowDown':
                case 's':
                    Input.update(Input.cardinal.down);
                    break;
                case 'ArrowLeft':
                case 'a':
                    Input.update(Input.cardinal.left);
                    break;
                case 'ArrowRight':
                case 'd':
                    Input.update(Input.cardinal.right);
                    break;
                default:
                    break;
            }
        })
    }
}


