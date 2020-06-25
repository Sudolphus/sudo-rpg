import $ from 'jquery';
import { Enemy } from './enemies.js';

function refreshEnemyInterface(game, enemy) {
  const enemyInterface = $('#enemyInterface');
  enemyInterface.empty();

}

export function firstRoomPassage(game) {
  const roomInterface = $('#roomInterface');
  const enemy = new Enemy('Goblin', 3, 8);
  let roomHTML = '';
  roomHTML += `In this room, you run into a goblin! You have no choice but to fight!`;
  roomHTML += `<div class='Enemy Interface'><div>`;
  roomInterface.html(roomHTML);
  refreshEnemyInterface(game, enemy);
}