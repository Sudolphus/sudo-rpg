class Character {
  constructor(hp, stamina, strength, intelligence, dexterity, characterClass) {
    this.hp = hp;
    this.maxHP = hp;
    this.stamina = stamina;
    this.strength = strength;
    this.intelligence = intelligence;
    this.dexterity = dexterity;
    this.characterClass = characterClass;
    this.inventory = [];
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

  takeDamage(damage) {
    this.hp -= damage;
  }

  healDamage(heal) {
    if (this.hp + heal >= this.maxHP) {
      this.hp = this.maxHP;
    } else {
      this.hp += heal;
    }
  }

  isDefeated() {
    if (this.hp <= 0) {
      return true;
    } else {
      return false;
    }
  }

  addToInventory(item) {
    this.inventory.push(item);
  }

  removeFromInventory(item) {
    this.inventory = this.inventory.filter(items => items != item);
  }
}

export class Warrior extends Character {
  constructor() {
    super(20, 10, 10, 3, 8, 'warrior');
  }
  powerSmash() {
    return this.strength*2;
  }
  doubleStrike() {
    return (this.strength*.5)*2;
  }
}

export class Wizard extends Character {
  constructor() {
    super(10, 20, 3, 10, 8, 'wizard');
  }
  fireball() {
    return this.intelligence;
  }
  lightningBolt() {
    return this.intelligence*2;
  }
}

export class Thief extends Character {
  constructor() {
    super(15, 15, 6, 5, 10, 'thief');
  }
  riposte() {
    return this.dexterity;
  }
  sneakyStab() {
    return this.dexterity;
  }
}