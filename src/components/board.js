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
        this.answerDisplay[word] = shortAnswer;
        this.shortAnswers.append(shortAnswer.answerItem);
      } else {
        const longAnswer = new LetterTiles(word);
        this.answerDisplay[word] = longAnswer;
        this.longAnswers.append(longAnswer.answerItem);
      }
    });
  }

  populateKeyWord() {
    //shuffle keyWord letters
    const keyWordField = document.getElementById("key-word");
    // const keyWord = new LetterTiles(this.keyWord.shuffled);
    const shuffledKeyWord = this.keyWord.shuffled();
    const keyWord = new LetterTiles(shuffledKeyWord);
    keyWord.reveal();
    if (keyWordField.firstChild) {
      keyWordField.removeChild(keyWordField.firstChild);
    }
    keyWordField.append(keyWord.answerItem);
  }

  updateAnswers(word) {
    if (this.answerDisplay[word]) {
      this.answerDisplay[word].reveal();
    }
  }

  revealAll() {
    Object.keys(this.answerDisplay).forEach(word => {
      if (!this.answerDisplay[word].revealed) {
        this.answerDisplay[word].reveal(true);
      }
    });
  }

  reset() {
    this.answerDisplay = {};
    while (this.shortAnswers.firstChild) {
      this.shortAnswers.removeChild(this.shortAnswers.firstChild);
    }

    while (this.longAnswers.firstChild) {
      this.longAnswers.removeChild(this.longAnswers.firstChild);
    }
    
  }

}

export default Board;
