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
    expect(character.attack()).toBeDefined();
    expect(character.block()).toBeDefined();
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
    expect(warrior.characterClass).toBe('warrior');
    expect(wizard.hp).toEqual(10);
    expect(wizard.stamina).toEqual(20);
    expect(wizard.strength).toEqual(3);
    expect(wizard.intelligence).toEqual(10);
    expect(wizard.dexterity).toEqual(8);
    expect(wizard.characterClass).toBe('wizard');
    expect(thief.hp).toEqual(15);
    expect(thief.stamina).toEqual(15);
    expect(thief.strength).toEqual(6);
    expect(thief.intelligence).toEqual(5);
    expect(thief.dexterity).toEqual(10);
    expect(thief.characterClass).toBe('thief');
  });

  test('should assign abilities to each class', ()=>{
    expect(warrior.powerSmash()).toBeDefined();
    expect(warrior.doubleStrike()).toBeDefined();
    expect(wizard.fireball()).toBeDefined();
    expect(wizard.lightningBolt()).toBeDefined();
    expect(thief.riposte()).toBeDefined();
    expect(thief.sneakyStab()).toBeDefined();
  });

  test('ensure that each character inherited abilities properly', ()=>{
    expect(warrior.attack()).toEqual(10);
  });
});