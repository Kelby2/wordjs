import Timer from "./components/timer";
import Score from "./components/score";
import Word from "./components/dictionary/word";
import Board from "./components/board";
import { _charFrequency } from "./components/dictionary/util";
// import Board from "./components/board";

class Game {
  constructor() {
    this.gameOver = false;
    this.timer = new Timer(this);
    this.validateInput = this.validateInput.bind(this);
  }

  run() {
    this.word = new Word();
    this.board = new Board(this);
    this.score = new Score();
    this.timer.start();
    this.score.display();

    this.handlePlayerEntry();
  }

  handlePlayerEntry() {
    const userInput = document.getElementById("user-input");
    userInput.addEventListener("keypress", this.validateInput);
  }

  validateInput() {
    if (!this._isValid(event.key, event.currentTarget)) {
      event.preventDefault();
      switch (event.keyCode) {
        case 13: //enter key to submit input
          this.handleSubmit(event.currentTarget);
          event.currentTarget.value = "";
          break;
        case 32: //spacebar to shuffle letters
          this.board.populateKeyWord();
          break;
      }
    }
  }

  handleSubmit(word) {
    this.board.updateAnswers(word.value);
  }

  endGame() {
    this.board.revealAll();
  }

  _isValid(letter, inputForm) {
    //compares letter frequency of word to the input
    const keyWordCharFrequency = _charFrequency(this.word.value);
    const inputCharFrequency = _charFrequency(inputForm.value);

    if (keyWordCharFrequency[letter] === inputCharFrequency[letter]) {
      return false;
    }
    return true;
  }

}

export default Game;
