import { Direction } from '2048-engine';

const createKeyDownHandler =
  (move: (direction: Direction) => void) => (e: KeyboardEvent) => {
    console.log(e.key);
    switch (e.key) {
      case 'ArrowUp':
      case 'w': {
        move(Direction.UP);
        break;
      }
      case 'ArrowDown':
      case 's': {
        move(Direction.DOWN);
        break;
      }
      case 'ArrowLeft':
      case 'a': {
        console.log('move left');
        move(Direction.LEFT);
        break;
      }
      case 'ArrowRight':
      case 'd': {
        move(Direction.RIGHT);
        break;
      }
      default: {
        return;
      }
    }
    e.preventDefault();
  };

export default createKeyDownHandler;
