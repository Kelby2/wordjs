import LetterTiles from './tile_factory';
//populate_board
//display
class Board {

  constructor(game) {
    this.game = game;
    this.keyWord = this.game.word;
    this.shortAnswers = document.getElementById("short-list");
    this.longAnswers = document.getElementById("long-list");
    this.reset();
    this.populate();
  }

  populate() {
    //creates side panels and main game word panel
    //shuffles and displays keyWord on game-panel
    this.populateKeyWord();

    this.keyWord.allSubwords.forEach(word => {
      if (word.length < 4) {
        const shortAnswer = new LetterTiles(word);
        this.ansDisplayKey[word] = shortAnswer;
        this.shortAnswers.append(shortAnswer.answerItem);
      } else {
        const longAnswer = new LetterTiles(word);
        this.ansDisplayKey[word] = longAnswer;
        this.longAnswers.append(longAnswer.answerItem);
      }
    });
  }

  populateKeyWord() {
    //shuffle keyWord letters
    const keyWordField = document.getElementById("key-word");
    const keyWord = new LetterTiles(this.keyWord.value, true);
    keyWord.reveal();
    if (keyWordField.firstChild) {
      keyWordField.removeChild(keyWordField.firstChild);
    }
    keyWordField.append(keyWord.answerItem);
  }

  updateAnswers(word) {
    if (this.ansDisplayKey[word]) {
      this.ansDisplayKey[word].reveal();
    }
  }

  revealAll() {
    //reveals the remaining words
    Object.keys(this.ansDisplayKey).forEach(word => {
      if (!this.ansDisplayKey[word].revealed) {
        this.ansDisplayKey[word].reveal(true);
      }
    });
  }

  reset() {
    this.ansDisplayKey = {};
    while (this.shortAnswers.firstChild) {
      this.shortAnswers.removeChild(this.shortAnswers.firstChild);
    }

    while (this.longAnswers.firstChild) {
      this.longAnswers.removeChild(this.longAnswers.firstChild);
    }

  }

}

export default Board;
