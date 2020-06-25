export class Equipment {
  constructor(name, attackDamage, protection, slot) {
    this.attackDamage = attackDamage;
    this.protection = protection;
    this.slot = slot;
  }
}

export class Sword extends Equipment {
  constructor() {
    super('sword', 2, 0, 'weapon');
  }
}