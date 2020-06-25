export class Equipment {
  constructor(name, attackDamage, protection, slot, allowed) {
    this.name = name;
    this.attackDamage = attackDamage;
    this.protection = protection;
    this.slot = slot;
    this.allowed = allowed;
  }
}