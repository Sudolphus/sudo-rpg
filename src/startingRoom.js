import $ from 'jquery';
import { Equipment } from './items.js';
import { refreshCharacterInterface } from './characterInterface.js';

function decideWeapon(characterClass) {
  let weapon;
  if (characterClass === 'warrior') {
    weapon = new Equipment('Sword', 2, 0, 'weaponHand', ['warrior', 'thief']);
  } else if (characterClass === 'wizard') {
    weapon = new Equipment('Magic Staff', 2, 0, 'weaponHand', ['wizard']);
  } else if (characterClass === 'thief') {
    weapon = new Equipment('Dagger', 2, 0, 'weaponHand', ['any']);
  }
  return weapon;
}

function decideArmor(characterClass) {
  let armor;
  if (characterClass === 'warrior') {
    armor = new Equipment('Chain Mail', 0, 2, 'armor', ['warrior']);
  } else if (characterClass === 'wizard') {
    armor = new Equipment('Wizard Robes', 0, 1, 'armor', ['any']);
  } else if (characterClass === 'thief') {
    armor = new Equipment('Leather Armor', 0, 1, 'armor', ['warrior', 'thief']);
  }
  return armor;
}

function attachButtonListeners(game, weapon, armor) {
  $('#playerSight').on('click', '.pickupItem', function() {
    const itemName = $(this).attr('id').slice(4);
    if (weapon.name === itemName) {
      game.characterClass.addToInventory(weapon);
    } else if (armor.name === itemName) {
      game.characterClass.addToInventory(armor);
    }
    $(`.${itemName}`).remove();
    refreshCharacterInterface(game);
  });
}

export function startingRoomPassage(game) {
  const roomInterface = $('#roomInterface');
  const introText = `<p>You step into the entrance hall of the Dungeon of Sudo. This room seems to only have a few items in it, as though it was expecting you to equip yourself here.<br><p>You see: </p><ul id='playerSight'></ul>`;
  roomInterface.append(introText);
  const weapon = decideWeapon(game.characterClass.characterClass);
  const armor = decideArmor(game.characterClass.characterClass);
  const playerSight = $('#playerSight');
  playerSight.append(`<li class='${weapon.name}'>A ${weapon.name} <button class='btn pickupItem' id='grab${weapon.name}'></li>`);
  playerSight.append(`<li class='${armor.name}'>${armor.name} <button class='btn pickupItem' id='grab${armor.name}'></li>`);
  attachButtonListeners(game, weapon, armor);
}