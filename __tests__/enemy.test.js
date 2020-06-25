/* eslint-disable no-undef */
import { Game } from './../src/game.js';
import { Enemy } from './../src/enemies.js';

describe ('RPG Enemies', ()=>{
  let game;
  let enemy;
  let goblin;

  beforeEach(()=>{
    game = new Game();
    enemy = new Enemy();
    goblin = new Enemy('goblin', 5, 8);
  });

  test('should allow enemies to be added to the game', ()=>{
    game.addEnemy(enemy);
    expect(game.enemies[0]).toMatchObject(enemy);
  });

  test('enemies should have a name, damage value, and hp', ()=>{
    expect(goblin.name).toBe('goblin');
    expect(goblin.damageValue).toBe(5);
    expect(goblin.hp).toBe(8);
  });

  test('enemies should be able to attack', ()=>{
    expect(goblin.attack()).toEqual(5);
  });
});