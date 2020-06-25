/* eslint-disable no-undef */
import { Game } from './../src/game.js';
import { Character, Warrior, Wizard, Thief } from '../src/characterClasses.js';

describe('RPG', ()=>{
  let game;
  let character;
  let warrior;
  let wizard;
  let thief;

  beforeEach(()=>{
    game = new Game();
    character = new Character();
    warrior = new Warrior();
    wizard = new Wizard();
    thief = new Thief();
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

  test('should allow for character class objects', ()=>{
    expect(warrior).toBeDefined();
    expect(wizard).toBeDefined();
    expect(thief).toBeDefined();
  });
});