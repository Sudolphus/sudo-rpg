/* eslint-disable no-undef */
import { Equipment, Potion } from './../src/items.js';
import { Warrior, Wizard } from './../src/characterClasses.js';

describe ('RPG Items', ()=> {
  let warrior;
  let wizard;
  let sword;
  let axe;
  let shield;
  let healingPotion;
  let staminaPotion;

  beforeEach(()=>{
    warrior = new Warrior();
    wizard = new Wizard();
    sword = new Equipment('sword', 2, 0, 'weaponHand', ['warrior', 'thief']);
    shield = new Equipment('shield', 0, 2, 'shieldHand', ['any']);
    axe = new Equipment('axe', 3, 0, 'weaponHand', ['warrior']);
    healingPotion = new Potion('healingPotion', 5, 0);
    staminaPotion = new Potion('staminaPotion', 0, 5);
  });

  test('should detect if a player has an inventory', ()=>{
    expect(warrior.inventory).toBeDefined();
  });

  test('should add objects to inventory', ()=>{
    warrior.addToInventory('Sword');
    expect(warrior.inventory[0]).toBe('Sword');
  });

  test('should allow player to drop items from inventory', ()=>{
    warrior.addToInventory('Sword');
    warrior.removeFromInventory('Sword');
    expect(warrior.inventory.length).toBe(0);
  });

  test('should allow item objects with stats', ()=>{
    expect(sword.damageBonus).toEqual(2);
    expect(sword.slot).toEqual('weaponHand');
  });

  test('should allow items to equip to correct slot', ()=>{
    warrior.equip(sword);
    warrior.equip(shield);
    expect(warrior.weaponHand).toBe(sword);
    expect(warrior.shieldHand).toBe(shield);
    expect(warrior.inventory.includes(sword)).toBe(false);
  });

  test('should prevent players from equipping disallowed items', ()=>{
    wizard.equip(sword);
    expect(wizard.weaponHand).toBeNull();
  });

  test('should allow unequipping of items', ()=>{
    warrior.equip(sword);
    warrior.unequip(sword);
    expect(warrior.weaponHand).toBeNull();
    expect(warrior.inventory.includes(sword)).toBe(true);
  });

  test('should swap items if equipping to a used slot', ()=>{
    warrior.equip(sword);
    warrior.equip(axe);
    expect(warrior.weaponHand).toBe(axe);
    expect(warrior.inventory[0]).toBe(sword);
  });

  test('should update player abilities based on equipment', ()=> {
    expect(warrior.damageBonus).toEqual(0);
    expect(warrior.protection).toEqual(0);
    warrior.equip(sword);
    warrior.equip(shield);
    expect(warrior.damageBonus).toEqual(2);
    expect(warrior.protection).toEqual(2);
    warrior.unequip(sword);
    warrior.unequip(shield);
    expect(warrior.damageBonus).toEqual(0);
    expect(warrior.protection).toEqual(0);
  });

  test('should update damage based on equipment appropriately', ()=>{
    warrior.equip(sword);
    expect(warrior.attack()).toEqual(12);
    expect(warrior.powerSmash()).toEqual(22);
  });

  test('should allow healing potions to heal', ()=>{
    warrior.takeDamage(10);
    warrior.usePotion(healingPotion);
    expect(warrior.hp).toEqual(15);
    warrior.usePotion(healingPotion);
    expect(warrior.hp).toEqual(20);
    warrior.usePotion(healingPotion);
    expect(warrior.hp).toEqual(20);
  });

  test('should allow stamina potions to gain stamina', ()=>{
    warrior.powerSmash();
    warrior.usePotion(staminaPotion);
    expect(warrior.stamina).toEqual(14);
  });

  test('potions should be removed from inventory when used', ()=>{
    warrior.addToInventory(healingPotion);
    warrior.usePotion(healingPotion);
    expect(warrior.inventory.includes(healingPotion)).toBe(false);
  });

  test('only the used potion should be removed from inventory when used', ()=>{
    let healingPotion2 = new Potion('healingPotion', 5, 0);
    warrior.addToInventory(healingPotion);
    warrior.addToInventory(healingPotion2);
    warrior.usePotion(healingPotion);
    expect(warrior.inventory.includes(healingPotion)).toBe(false);
    expect(warrior.inventory.includes(healingPotion2)).toBe(true);
  });
});