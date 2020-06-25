export class Equipment {
  constructor(name, damageBonus, protection, slot, allowed) {
    this.name = name;
    this.damageBonus = damageBonus;
    this.protection = protection;
    this.slot = slot;
    this.allowed = allowed;
  }
}