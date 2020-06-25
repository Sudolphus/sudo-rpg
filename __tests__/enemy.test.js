/* eslint-disable no-undef */
import { Game } from './../src/game.js';
import { Enemy } from './../src/enemies.js';

describe ('RPG Enemies', ()=>{
  let game;
  let enemy;
  
  beforeEach(()=>{
    game = new Game();
    enemy = new Enemy();
  });

  test('should allow enemies to be added to the game', ()=>{
    game.addEnemy(enemy);
    expect(game.enemies[0]).toMatchObject(enemy);
  });
});