import Timer from "./components/timer";
import Score from "./components/score";
import Word from "./components/dictionary/word";
import Message from "./components/message";
import Board from "./components/board";
import { _charFrequency } from "./components/dictionary/util";
// import Board from "./components/board";

class Game {

  constructor() {
    this.gameOver = false;
    this.validateInput = this.validateInput.bind(this);
    this.reset = this.reset.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  beginRound() {
    this._createComponents();
    this.message.clear();
    this.timer.start();
    this.userInput = document.getElementById("user-input");
    this.revealBtn = document.getElementById("gg");
    this.newGameBtn = document.getElementById("new-game");
    this.handlePlayerAction();
  }

  handlePlayerAction() {
    this.userInput.disabled = false;
    this.userInput.focus();
    this.userInput.addEventListener("keypress", this.validateInput);
    this.revealBtn.addEventListener("click", this.timer.stop);
    this.newGameBtn.addEventListener("click", this.reset);
  }

  validateInput() {
    event.preventDefault();
    if (!this._isValid(event.key, event.currentTarget)) {
      switch (event.keyCode) {
        case 13: //enter key to submit input
          if (event.currentTarget.value.length < 3) {
            this.message.alertMin();
          } else {
            this.handleSubmit(event.currentTarget.value.toLowerCase());
            event.currentTarget.value = "";
          }
          break;
        case 32: //spacebar to shuffle letters
          this.board.populateKeyWord();
          break;
      }
    } else {
      this.userInput.value += event.key.toUpperCase();
    }
  }

  handleSubmit(word) {
    if (this.answerKey.has(word)) {
      if (this.board.ansDisplayKey[word].revealed) {
        this.message.alert(word, "duplicate");
      } else {
        this.board.updateAnswers(word);
        this.score.update(word);
        this.message.alert(word, "valid");
      }
    } else {
      this.message.alert(word, "invalid");
    }
  }

  endGame() {
    this.board.revealAll();
    this.userInput.disabled = true;
    document.addEventListener("keypress", this.reset);
    this.revealBtn.removeEventListener("click", this.endGame);
  }

  reset() {
    //resets game if new game button is clicked or spacebar is pressed
    //after the end of a game
    if (event.currentTarget.id === "new-game" || event.keyCode === 32) {
      event.preventDefault();
      this.timer.stop();
      this.userInput.value = "";
      this.beginRound();
      document.removeEventListener("keypress", this.reset);
    }
  }

  _createComponents() {
    this.word = new Word();
    this.answerKey = new Set(this.word.allSubwords);
    this.board = new Board(this);
    this.timer = new Timer(this);
    this.score = new Score();
    this.message = new Message();
  }

  _isValid(letter, inputForm) {
    //compares letter frequency of word to the input
    //only allows user to enter letters that are in the keyWord
    const keyWordCharFrequency = _charFrequency(this.word.value);
    const inputCharFrequency = _charFrequency(inputForm.value);
    if (keyWordCharFrequency[letter] === inputCharFrequency[letter]) {
      return false;
    }
    return true;
  }

}

export default Game;
