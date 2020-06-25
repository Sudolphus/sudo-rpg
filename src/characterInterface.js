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

function listEquippedItems(game) {
  const weaponHTML = equipItemHTML('weaponHand', game);
  const shieldHTML = equipItemHTML('shieldHand', game);
  const armorHTML = equipItemHTML('armor', game);
  $("#weaponHand").html(weaponHTML);
  $("#shieldHand").html(shieldHTML);
  $("#armor").html(armorHTML);
}

function buildInventoryItemHTML(item) {
  let itemHTML = `<li><i>${item.name}</i></p>`;
  if (/potion/i.test(item.name)) {
    itemHTML += `<button class='btn usePotion'>Drink Potion</button>`;
  } else {
    itemHTML += `<button class='btn equipItem'>Equip Item</button>`;
  }
  return itemHTML;
}

function listInventoryItems(inventory) {
  const inventoryItems = $("#inventoryItems");
  if (inventory.length === 0) {
    inventoryItems.html(`<li><i>None</i></li>`);
  } else {
    let inventoryHTML = '';
    for (const item of inventory) {
      inventoryHTML += buildInventoryItemHTML(item);
    }
    inventoryItems.html(inventoryHTML);
  }
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
  listEquippedItems(game);
  characterInterface.append(`<p>Inventory: </p><ul id='inventoryItems'></ul>`);
  listInventoryItems(game.characterClass.inventory);
  attachEquipListeners();
  attachInventoryListeners();
}