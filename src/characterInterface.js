import $ from 'jQuery';

function equipItemHTML(slot, game) {
  const item = game.characterClass.findEquip(slot);
  let itemHTML;
  if (item === null) {
    itemHTML = `<p><i>None</i></p>`;
  } else {
    itemHTML = `<p><i>${item.name.toUpperCase()}</i></p><button class='btn unequipButton' id='unequip${slot}'>`;
  }
  return itemHTML;
}

function attachEquippedItems(game) {
  const weaponHTML = equipItemHTML('weaponHand', game);
  const shieldHTML = equipItemHTML('shieldHand', game);
  const armorHTML = equipItemHTML('armor', game);
  $("#weaponHand").html(weaponHTML);
  $("#shieldHand").html(shieldHTML);
  $("#armor").html(armorHTML);
}

export function refreshCharacterInterface(game) {
  const characterInterface = $("#characterInterface");
  characterInterface.empty();
  characterInterface.append(`<p><strong>${game.characterClass.characterClass.toUpperCase()}</strong></p>`);
  characterInterface.append(`<p>Items Equipped: </p><ul id='equippedItems'></ul>`);
  const equippedItems = $("#equippedItems");
  equippedItems.append(`Weapon Hand: <span id='weaponHand'></span>`);
  equippedItems.append(`Shield Hand: <span id='shieldHand'></span>`);
  equippedItems.append(`Armor: <span id='armor'></span>`);
  attachEquippedItems(game);
}