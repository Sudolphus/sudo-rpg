/* eslint-disable no-undef */
import { Game } from './../src/game.js';
import { Character } from './../src/character.js';

describe('RPG', ()=>{
  let game;

  beforeEach(()=>{
    game = new Game();
  });

  test('should create a game object', ()=>{
    expect(game).toBeDefined();
  });

  test('should allow for character objects', ()=>{
    expect(character).toBeDefined();
  });
});