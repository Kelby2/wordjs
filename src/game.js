import Timer from "./components/timer";
import Score from "./components/score";
import Word from "./components/dictionary/word";
import Board from "./components/board";
import { _charFrequency } from "./components/dictionary/util";
// import Board from "./components/board";

class Game {
  constructor() {
    // this.board = new Board();
    this.gameOver = false;
    this.timer = new Timer(3);
    this.validateInput = this.validateInput.bind(this);
  }

  run() {
    this.word = new Word();
    this.board = new Board(this);
    this.score = new Score()
    this.timer.start();
    this.score.display();

    this.handlePlayerEntry();
  }

  handlePlayerEntry() {
    const userInput = document.getElementById("user-input");
    userInput.addEventListener("keypress", this.validateInput);
  }

  validateInput() {
    if (this._isValid(event.key, event.currentTarget)) {
    } else {
        event.preventDefault();
        if (event.keyCode === 13) {
          this.handleSubmit(event.currentTarget);
        }
        if (event.keyCode === 32) {
          this.board.shuffleLetters();
        }
    }
  }

  handleSubmit(word) {
    this.board.updateAnswers(word.value)
  }

  _isValid(letter, inputForm) {
    //compares letter frequency of word to the input
    const keyWordCharFrequency = _charFrequency(this.word.value)
    const inputCharFrequency = _charFrequency(inputForm.value);
    if (keyWordCharFrequency[letter] === inputCharFrequency[letter]) {
      return false;
    }
    return true;
  }


}

export default Game;
