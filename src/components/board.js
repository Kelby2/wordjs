import LetterTiles from './tile_factory';

class Board {

  constructor(keyWord) {
    this.keyWord = keyWord;
    this.shortAnsCharLimit = 4;
    this.shortAnsDisplay = document.getElementById("short-list");
    this.longAnsDisplay = document.getElementById("long-list");
    this.reset();
    this.populate();
  }

  populate() {
    //creates side panels and main game word panel
    //shuffles and displays keyWord on game-panel
    this.populateKeyWord();

    this.keyWord.allSubwords.forEach(word => {
      if (word.length < this.shortAnsCharLimit) {
        const shortAnsItem = new LetterTiles(word);
        this.ansDisplayKey[word] = shortAnsItem;
        this.shortAnsDisplay.append(shortAnsItem.answerItem);
      } else {
        const longAnsItem = new LetterTiles(word);
        this.ansDisplayKey[word] = longAnsItem;
        this.longAnsDisplay.append(longAnsItem.answerItem);
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

  updateAnswerDisplay(word) {
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
    while (this.shortAnsDisplay.firstChild) {
      this.shortAnsDisplay.removeChild(this.shortAnsDisplay.firstChild);
    }

    while (this.longAnsDisplay.firstChild) {
      this.longAnsDisplay.removeChild(this.longAnsDisplay.firstChild);
    }

  }

}

export default Board;
