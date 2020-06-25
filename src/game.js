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
}