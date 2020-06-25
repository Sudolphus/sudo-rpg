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

  test('should allow for selected class to be added to the Game', ()=>{
    game.selectClass(warrior);
    expect(game.characterClass).toBe(warrior);
  });

  test('should assign statistics to each class', ()=>{
    expect(warrior.hp).toEqual(20);
    expect(warrior.stamina).toEqual(10);
    expect(warrior.strength).toEqual(10);
    expect(warrior.intelligence).toEqual(3);
    expect(warrior.dexterity).toEqual(8);
    expect(wizard.hp).toEqual(10);
    expect(wizard.stamina).toEqual(20);
    expect(wizard.strength).toEqual(3);
    expect(wizard.intelligence).toEqual(10);
    expect(wizard.dexterity).toEqual(8);
    expect(thief.hp).toEqual(15);
    expect(thief.stamina).toEqual(15);
    expect(thief.strength).toEqual(6);
    expect(thief.intelligence).toEqual(5);
    expect(thief.dexterity).toEqual(10);
  });
});