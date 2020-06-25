import { Game } from './../src/game.js';

describe('RPG', ()=>{
  let game;

  beforeEach(()=>{
    game = new Game();
  });

  test('should create a game object', ()=>{
    expect(game).toBeDefined();
  });
});