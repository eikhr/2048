# 2048 board renderer
![Build](https://github.com/eikhr/2048-board-renderer/actions/workflows/main.yml/badge.svg)

Package for easily rendering boards from the game [2048](https://github.com/gabrielecirulli/2048). Uses data in the format provided from [`2048-engine`](https://github.com/eikhr/2048-engine) to render the board. 

See [2048-react]() for a convenient wrapper for use in React.

## API
The package exposes one method.

`createBoard(boardData)`

It takes one argument, `boardData`, which is a `Board` object from `2048-engine`.

The function returns an object with the following properties:
- `htmlElement`: A `HTMLElement` containing the rendered board.
- `update`: A function that takes an updated `boardData` `Board` object and modifies `htmlElement` to match the new state.

Any updates to the board should be made using the `update` function for animations to be played. New games should create new boards using `createBoard` to avoid weird animations.

## Usage
```javascript
import { createBoard } from '2048-board-renderer';
import { createGame, Direction } from '2048-engine';

const game = createGame();

const board = createBoard(game.currentState.board);
document.getElementById('game')?.appendChild(board.htmlElement);

const move = (direction: Direction) => {
  const gameState = game.move(direction);
  board.update(gameState.board);
};

move(Direction.UP);
```
For a playable example see `example` directory

## Notes on the board HTMLElement
The board HTMLElement is a `div` with no styling regarding width. The width of the board is therefore determined by its parent container. 

The height of the board is determined based on width and the aspect ratio of the board.
