import { createGame } from '../src';

const game = createGame();
document.getElementById('app')?.appendChild(game.gameElement);
