import createBackgroundTiles from './createBackgroundTiles';
import { BoardMeta } from '../types';

interface GameContainer {
  rootElement: HTMLElement;
  addTiles: (children: HTMLElement[]) => void;
  clearTiles: () => void;
}

const newGameContainer = (boardMeta: BoardMeta): GameContainer => {
  const aspectRatio = boardMeta.rows / boardMeta.cols;

  const rootElement = document.createElement('div');
  rootElement.classList.add('game_container');

  const resizeHelper = document.createElement('div');
  resizeHelper.classList.add('resize_helper');
  rootElement.appendChild(resizeHelper);

  const resizeHeight = () => {
    resizeHelper.style.height = `${rootElement.clientWidth * aspectRatio}px`;
  };

  resizeHeight();
  new ResizeObserver(() => resizeHeight()).observe(rootElement);

  for (const backgroundTileEl of createBackgroundTiles(boardMeta)) {
    resizeHelper.appendChild(backgroundTileEl);
  }

  const tilesContainer = document.createElement('div');
  tilesContainer.classList.add('tiles_container');
  resizeHelper.appendChild(tilesContainer);

  const addTiles = (tileEls: HTMLElement[]) => {
    for (const tileEl of tileEls) {
      tilesContainer.appendChild(tileEl);
    }
  };

  const clearTiles = () => {
    tilesContainer.innerHTML = '';
  };

  return { rootElement, addTiles, clearTiles };
};

export default newGameContainer;
