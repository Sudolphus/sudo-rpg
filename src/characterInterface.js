import $ from 'jQuery';

function equipItemHTML(slot, game) {
  const item = game.characterClass.findEquip(slot);
  let itemHTML;
  if (item === null) {
    itemHTML = `<p><i>None</i></p>`;
  } else {
    itemHTML = `<p><i>${item.name}</i></p><button class='btn unequipButton' id='unequip${slot}'>`;
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
    itemHTML += `<button class='btn usePotion' id='use${item.name}'>Drink Potion</button>`;
  } else {
    itemHTML += `<button class='btn equipItem' id='use${item.name}'>Equip Item</button>`;
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

function attachEquipListeners(game) {
  $("#equippedItems").on('click', '.unequipButton', function() {
    const slot = $(this).attr('id').slice(7);
    game.characterClass.unequip(game.characterClass.findEquip(slot));
    refreshCharacterInterface(game);
  });
}

function attachInventoryListeners(game) {
  const inventoryItems = $('#inventoryItems');
  inventoryItems.on('click', '.usePotion', function() {
    const potion = game.characterClass.findItem($(this).attr('id').slice(3));
    game.characterClass.usePotion(potion);
    refreshCharacterInterface(game);
  });
  inventoryItems.on('click', '.equipItem', function() {
    const item = game.characterClass.findItem($(this).attr('id').slice(3));
    game.characterClass.equip(item);
    refreshCharacterInterface(game);
  });
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
  attachEquipListeners(game);
  attachInventoryListeners(game);
}