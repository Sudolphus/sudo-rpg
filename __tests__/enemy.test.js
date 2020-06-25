/* eslint-disable no-undef */
import { Game } from './../src/game.js';
import { Enemy } from './../src/enemies.js';

describe ('RPG Enemies', ()=>{
  let game;
  let goblin;

  beforeEach(()=>{
    game = new Game();
    goblin = new Enemy('goblin', 5, 8);
    game.addEnemy(goblin);
  });

  test('should allow enemies to be added to the game', ()=>{
    expect(game.enemies[0]).toMatchObject(goblin);
  });

  test('enemies should have a name, damage value, and hp', ()=>{
    expect(goblin.name).toBe('goblin');
    expect(goblin.damageValue).toBe(5);
    expect(goblin.hp).toBe(8);
  });

  test('enemies should be able to attack', ()=>{
    expect(goblin.attack()).toEqual(5);
  });

  test('enemies can take damage', ()=>{
    goblin.takeDamage(3, game);
    expect(goblin.hp).toEqual(5);
  });

  test('enemies are removed when hp = 0', ()=>{
    goblin.takeDamage(8, game);
    expect(game.enemies.length).toEqual(0);
  });

  test('should remove only the defeated enemy, and not similar enemies', ()=>{
    let goblin2 = new Enemy('goblin', 5, 8);
    game.addEnemy(goblin2);
    goblin.takeDamage(8, game);
    expect(game.enemies.length).toEqual(1);
    expect(game.enemies[0]).toMatchObject(goblin2);
  });
});