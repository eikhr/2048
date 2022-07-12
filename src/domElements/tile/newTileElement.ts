import { BoardMeta, TileData } from '../../types';
import baseTileElements from './baseTileElements';
import setTilePosition from './setTilePosition';

const newTileElement = (
  tileData: TileData,
  boardMeta: BoardMeta
): HTMLElement => {
  const { tileContainer, tileElement } = baseTileElements(
    tileData.position,
    boardMeta
  );

  const setTileValue = (value: number): void => {
    tileElement.innerHTML = value.toString();
    tileElement.classList.forEach((className) => {
      if (className.includes('value_')) {
        tileElement.classList.remove(className);
      }
    });
    tileElement.classList.add(`value_${value}`);
  };

  if (tileData.previousValue) {
    setTileValue(tileData.previousValue);
    setTimeout(() => {
      setTileValue(tileData.value);
    }, 100);
  } else {
    setTileValue(tileData.value);
  }

  if (!tileData.previousPosition) {
    tileElement.classList.add('new');
  } else {
    if (tileData.value !== tileData.previousValue) {
      tileElement.classList.add('merged_into');
    }

    if (
      tileData.position.row !== tileData.previousPosition.row ||
      tileData.position.col !== tileData.previousPosition.col
    ) {
      setTilePosition(tileContainer, tileData.previousPosition, boardMeta);
      tileContainer.style.transition = 'top 200ms, left 200ms';
      setTimeout(
        () => setTilePosition(tileContainer, tileData.position, boardMeta),
        0
      );
    }
  }

  tileContainer.style.zIndex = tileData.ghost ? '1' : '2';

  return tileContainer;
};

export default newTileElement;
