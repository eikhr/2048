import newGameContainer from './domElements/newGameContainer';
import { GameState } from '2048-engine';
import { BoardMeta } from './types';
import createTiles from './utils/createTiles';

interface GameBoard {
  htmlElement: HTMLElement;
  update: (newGameState: GameState) => void;
}

const createBoard = (gameState: GameState): GameBoard => {
  const boardMeta: BoardMeta = {
    rows: gameState.board.length,
    cols: gameState.board[0].length,
  };

  const gameContainer = newGameContainer(boardMeta);
  gameContainer.addTiles(createTiles(boardMeta, gameState.board));

  let currentState = gameState;

  const update = (newGameState: GameState) => {
    gameContainer.clearTiles();
    gameContainer.addTiles(
      createTiles(boardMeta, newGameState.board, currentState.board)
    );
    currentState = newGameState;
  };

  return { htmlElement: gameContainer.rootElement, update };
};

export default createBoard;
