import TimerObject from "./components/timer";
import Score from "./components/score";
import Word from "./components/dictionary/word";
import Message from "./components/message";
import Board from "./components/board";
import { _charFrequency } from "./components/dictionary/util";

class GameHandler {

  constructor() {
    this.gameOver = false;
    this.validateInput = this.validateInput.bind(this);
    this.endGame = this.endGame.bind(this);
    this.userInput = document.getElementById("user-input");
    this.revealBtn = document.getElementById("gg");
    this.timer = new TimerObject(this);
    this.userInput.disabled = true;
  }

  beginRound() {
    this.userInput.value = "";
    this._createComponents();
    this.timer.start();
    this.message.clear();
    this.handlePlayerAction();
  }

  handlePlayerAction() {
    this.userInput.disabled = false;
    this.userInput.focus();
    this.userInput.addEventListener("keypress", this.validateInput);
    this.revealBtn.addEventListener("click", this.endGame);
  }

  validateInput() {
    event.preventDefault();
    if (!this._validKey(event.key, event.currentTarget)) {
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
    const isAnswer = this._checkAnswer(word);
    if (isAnswer === true) {
      this.correctAnsCounter += 1;
      this._updateBoardAnswers(word);
    }
    this.message.display(word, isAnswer);
    if (this._allRevealed()) { this.endGame(); }
  }

  endGame() {
    const percentage =
      Math.floor(this.correctAnsCounter / this.answerKey.size * 100);
    this.message.conclude(percentage);
    this.board.revealAll();
    this.timer.stop();
    this.userInput.disabled = true;
    this.revealBtn.removeEventListener("click", this.endGame);
  }

  _createComponents() {
    this.word = new Word();
    this.answerKey = new Set(this.word.allSubwords);
    this.board = new Board(this.word);
    this.score = new Score();
    this.message = new Message();
    this.correctAnsCounter = 0;
  }

  _validKey(letter, inputForm) {
    //compares letter frequency of word to the input
    //only allows user to enter letters that are in the keyWord
    const keyWordCharFrequency = _charFrequency(this.word.value);
    const inputCharFrequency = _charFrequency(inputForm.value);
    if (keyWordCharFrequency[letter] === inputCharFrequency[letter]) {
      return false;
    }
    return true;
  }

  _checkAnswer(word) {
    if (!this.answerKey.has(word)) {
      return false;
    } else {
      if (this.board.ansDisplayKey[word].revealed) {
        return "duplicate";
      }
    }
    return true;
  }

  _allRevealed() {
    return this.correctAnsCounter === this.answerKey.size;
  }

  _updateBoardAnswers(word) {
    this.board.updateAnswerDisplay(word);
    this.score.update(word);
  }

}

export default GameHandler;
