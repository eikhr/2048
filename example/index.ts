import { createBoard, createGame } from '../src';

const game = createGame({ onMoved: (state) => onMoved(state) });
document.getElementById('game')?.appendChild(game.htmlElement);

const mirrorBoard = createBoard(game.currentState);
const onMoved = mirrorBoard.update;

mirrorBoard.htmlElement.style.width = '300px';
document.getElementById('mirror')?.appendChild(mirrorBoard.htmlElement);
