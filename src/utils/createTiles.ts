import getTileData from './getTileData';
import newTileElement from '../domElements/tile/newTileElement';
import { BoardMeta } from '../types';
import { Board } from '2048-engine';

const createTiles = (
  boardMeta: BoardMeta,
  board: Board,
  prevBoard?: Board
): HTMLElement[] =>
  getTileData(board, prevBoard).map((tile) => newTileElement(tile, boardMeta));

export default createTiles;
