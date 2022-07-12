import {
  Direction,
  createGame as createGameData,
  Game,
  GameState,
} from '2048-engine';
import createKeyDownHandler from './interaction/createKeyDownHandler';
import createBoard from './createBoard';

interface Options {
  onMoved?: (newState: GameState) => void;
}

const createGame = (
  options: Options = {}
): Game & { htmlElement: HTMLElement } => {
  const gameData = createGameData();

  const gameBoard = createBoard(gameData.currentState);

  const move = (direction: Direction) => {
    const newState = gameData.move(direction);
    gameBoard.update(newState);
    options.onMoved && options.onMoved(newState);
  };

  window.addEventListener('keydown', createKeyDownHandler(move));

  return {
    ...gameData,
    htmlElement: gameBoard.htmlElement,
  };
};

export default createGame;
