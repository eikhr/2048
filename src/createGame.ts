import {
  Direction,
  createGame as createGameData,
  Game,
  GameState,
} from '2048-engine';
import newGameContainer from './domElements/newGameContainer';
import createKeyDownHandler from './interaction/createKeyDownHandler';
import { BoardMeta } from './types';
import getTileData from './utils/getTileData';
import newTileElement from './domElements/tile/newTileElement';

const createGame = (): Game & { gameElement: HTMLElement } => {
  const gameData = createGameData();
  const boardMeta: BoardMeta = {
    rows: gameData.currentState.board.length,
    cols: gameData.currentState.board[0].length,
  };
  const gameContainer = newGameContainer(boardMeta);

  const updateGameGui = (
    newGameState: GameState,
    prevGameState?: GameState
  ) => {
    gameContainer.clearTiles();
    gameContainer.addTiles(
      getTileData(newGameState.board, prevGameState?.board).map((tile) =>
        newTileElement(tile, boardMeta)
      )
    );
  };

  const move = (direction: Direction) => {
    const prevGameState = gameData.currentState;
    const gameState = gameData.move(direction);
    updateGameGui(gameState, prevGameState);
    return gameState;
  };

  window.addEventListener('keydown', createKeyDownHandler(move));

  updateGameGui(gameData.currentState);

  return {
    ...gameData,
    move,
    gameElement: gameContainer.rootElement,
  };
};

export default createGame;
