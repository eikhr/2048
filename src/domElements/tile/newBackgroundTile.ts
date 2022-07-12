import { BoardMeta, Position } from '../../types';
import baseTileElements from './baseTileElements';

const newBackgroundTile = (
  position: Position,
  boardMeta: BoardMeta
): HTMLElement => {
  const { tileContainer, tileElement } = baseTileElements(position, boardMeta);

  tileElement.style.backgroundColor = 'rgba(238, 228, 218, 0.35)';

  return tileContainer;
};

export default newBackgroundTile;
