import { BoardMeta, TileData } from '../../types';
import baseTileElements from './baseTileElements';

const newTileElement = (
  tileData: TileData,
  boardMeta: BoardMeta
): HTMLElement => {
  const { tileContainer, tileElement } = baseTileElements(
    tileData.position,
    boardMeta
  );
  tileElement.innerHTML = tileData.value.toString();
  tileElement.classList.add(`value_${tileData.value}`);

  tileContainer.style.zIndex = tileData.ghost ? '1' : '2';

  return tileContainer;
};

export default newTileElement;
