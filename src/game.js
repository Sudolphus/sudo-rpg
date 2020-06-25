export class Game {
  constructor() {
    this.enemies = [];
    this.room = 0;
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