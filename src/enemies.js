export class Enemy {
  constructor(name, damageValue, hp) {
    this.name = name;
    this.damageValue = damageValue;
    this.hp = hp;
  }

  attack() {
    return this.damageValue;
  }
}