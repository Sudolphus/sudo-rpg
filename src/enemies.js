export class Enemy {
  constructor(name, damageValue, hp) {
    this.name = name;
    this.damageValue = damageValue;
    this.hp = hp;
  }

  attack() {
    return this.damageValue;
  }

  takeDamage(damage, game) {
    this.hp -= damage;
    if (this.hp <= 0) {
      game.removeEnemy(this);
    }
  }
}