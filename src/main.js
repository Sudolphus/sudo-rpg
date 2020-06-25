import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Game } from '../src/game.js';
import { Warrior, Wizard, Thief } from '../src/characterClasses.js';
let game = new Game();

function buildGameInterface() {
  $("#characterCreationInterface").remove();
  $("#gameInterface").show();
}

function attachCharacterClassListeners() {
  $(".classPickButton").click(function(event) {
    event.preventDefault();
    const characterClass = $(this).attr('id');
    if (characterClass === 'pickWarrior') {
      game.selectClass(new Warrior());
    } else if (characterClass === 'pickWizard') {
      game.selectClass(new Wizard());
    } else if (characterClass === 'pickThief') {
      game.selectClass(new Thief());
    }
    buildGameInterface();
  });
}

$(document).ready(function() {
  attachCharacterClassListeners();
});