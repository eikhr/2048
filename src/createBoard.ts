import newGameContainer from './domElements/newGameContainer';
import { Board } from '2048-engine';
import { BoardMeta } from './types';
import createTiles from './utils/createTiles';

interface GameBoard {
  htmlElement: HTMLElement;
  update: (newBoard: Board) => void;
}

const createBoard = (board: Board): GameBoard => {
  const boardMeta: BoardMeta = {
    rows: board.length,
    cols: board[0].length,
  };

  const gameContainer = newGameContainer(boardMeta);
  gameContainer.addTiles(createTiles(boardMeta, board));

  let currentBoard = board;

  const update = (newBoard: Board) => {
    gameContainer.clearTiles();
    gameContainer.addTiles(createTiles(boardMeta, newBoard, currentBoard));
    currentBoard = newBoard;
  };

  return { htmlElement: gameContainer.rootElement, update };
};

export default createBoard;
