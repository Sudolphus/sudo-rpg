import $ from 'jquery';
import { Enemy } from './enemies.js';

function refreshEnemyInterface(game, enemy) {
  const enemyInterface = $('#enemyInterface');
  enemyInterface.empty();
  let enemyHTML = `<p><strong>${enemy.name}</strong></p>`;
  enemyHTML += `<p>HP: ${enemy.hp}</p>`;
  if (game.characterClass.characterClass === 'warrior') {
    enemyHTML += `<button class='btn ability' id='powerSmash'>Power Smash!</button>`;
    enemyHTML += `<button class='btn ability' id='doubleStrike'>Double Strike!</button>`;
  } else if (game.characterClass.characterClass === 'wizard') {
    enemyHTML += `<button class='btn ability' id='fireball'>Fireball!</button>`;
    enemyHTML += `<button class='btn ability' id='lightningBolt'>Lightning Bolt!</button>`;
  } else if (game.characterClass.characterClass === 'thief') {
    enemyHTML += `<button class='btn ability' id='riposte'>Riposte!</button>`;
    enemyHTML += `<button class='btn ability' id='sneakyStab'>Sneaky Stab!</button>`;
  }
  enemyInterface.html(enemyHTML);
}

export function firstRoomPassage(game) {
  const roomInterface = $('#roomInterface');
  const enemy = new Enemy('Goblin', 3, 8);
  game.addEnemy(enemy);
  let roomHTML = '';
  roomHTML += `In this room, you run into a goblin! You have no choice but to fight!`;
  roomHTML += `<div class='Enemy Interface'><div>`;
  roomInterface.html(roomHTML);
  refreshEnemyInterface(game, enemy);
}