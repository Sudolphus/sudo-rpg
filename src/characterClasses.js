export class Character {
  constructor(hp, stamina, strength, intelligence, dexterity, characterClass) {
    this.hp = hp;
    this.stamina = stamina;
    this.strength = strength;
    this.intelligence = intelligence;
    this.dexterity = dexterity;
    this.characterClass = characterClass;
  }

  attack() {
    let damage = 0;
    if (this.strength) {
      damage += this.strength;
    }
    return damage;
  }

  block() {
    let defense = 0;
    if (this.dexterity) {
      defense += this.dexterity;
    }
    return defense;
  }
}

export class Warrior extends Character {
  constructor() {
    super(20, 10, 10, 3, 8, 'warrior');
  }
}

export class Wizard extends Character {
  constructor() {
    super(10, 20, 3, 10, 8, 'wizard');
  }
}

export class Thief extends Character {
  constructor() {
    super(15, 15, 6, 5, 10, 'thief');
  }
}