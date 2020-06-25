export class Game {
  constructor() {
    this.enemies = [];
  }

  selectClass(characterClass) {
    this.characterClass = characterClass;
  }
  
  addEnemy(enemy) {
    this.enemies.push(enemy);
  }

  removeEnemy(enemy) {
    this.enemies = this.enemies.filter(creature => creature != enemy);
  }
}