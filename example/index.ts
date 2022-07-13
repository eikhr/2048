import { createBoard } from '../src';
import { createGame, Direction } from '2048-engine';

const game = createGame();

const board = createBoard(game.currentState.board);
document.getElementById('game')?.appendChild(board.htmlElement);

const move = (direction: Direction) => {
  const gameState = game.move(direction);
  board.update(gameState.board);
};

window.addEventListener('keydown', (e) => {
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
});
