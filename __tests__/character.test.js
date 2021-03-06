/* eslint-disable no-undef */
import { Game } from '../src/game.js';
import { Warrior, Wizard, Thief } from '../src/characterClasses.js';

describe('RPG characters', ()=>{
  let game;
  let warrior;
  let wizard;
  let thief;

  beforeEach(()=>{
    game = new Game();
    warrior = new Warrior();
    wizard = new Wizard();
    thief = new Thief();
  });

  test('should create a game object', ()=>{
    expect(game).toBeDefined();
  });

  test('should allow for character class objects', ()=>{
    expect(warrior).toBeDefined();
    expect(wizard).toBeDefined();
    expect(thief).toBeDefined();
  });

  test('should allow for selected class to be added to the Game', ()=>{
    game.selectClass(warrior);
    expect(game.characterClass).toMatchObject(warrior);
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
    expect(warrior.attack()).toBeTruthy();
  });

  test('should allow characters to take damage', ()=>{
    warrior.takeDamage(5);
    expect(warrior.hp).toEqual(15);
  });

  test('should allow characters to heal damage', ()=>{
    warrior.takeDamage(5);
    warrior.healDamage(3);
    expect(warrior.hp).toEqual(18);
  });

  test('cap healing at maximum hp', ()=>{
    warrior.takeDamage(5);
    warrior.healDamage(12);
    expect(warrior.hp).toEqual(20);
  });

  test('should detect if a player is defeated', ()=>{
    warrior.takeDamage(20);
    expect(warrior.isDefeated()).toBe(true);
  });

  test('using abilites depletes stamina', ()=>{
    warrior.powerSmash();
    expect(warrior.stamina).toEqual(9);
  });
});