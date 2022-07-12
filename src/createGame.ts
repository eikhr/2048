import { Direction, createGame as createGameData, Game } from '2048-engine';
import createKeyDownHandler from './interaction/createKeyDownHandler';
import createBoard from './createBoard';

const createGame = (): Game & { htmlElement: HTMLElement } => {
  const gameData = createGameData();

  const gameBoard = createBoard(gameData.currentState);

  const move = (direction: Direction) => {
    const newState = gameData.move(direction);
    gameBoard.update(newState);
    return newState;
  };

  window.addEventListener('keydown', createKeyDownHandler(move));

  return {
    ...gameData,
    move,
    htmlElement: gameBoard.htmlElement,
  };
};

export default createGame;
