/* eslint-disable no-undef */
import { Game } from './../src/game.js';
import { Character } from './../src/character.js';

describe('RPG', ()=>{
  let game;
  let character;

  beforeEach(()=>{
    game = new Game();
    character = new Character();
  });

  test('should create a game object', ()=>{
    expect(game).toBeDefined();
  });

  test('should allow for character objects', ()=>{
    expect(character).toBeDefined();
  });

  test('should allow for characters to have basic abilities', ()=>{
    expect(character.attack()).toBeTruthy();
    expect(character.block()).toBeTruthy();
  });
});