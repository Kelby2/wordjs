import LetterTiles from './tile_factory';
//populate_board
//display
class Board {

  constructor(game) {
    this.game = game;
    this.keyWord = this.game.word;
    this.answerKey = {};
    this.populate();
  }

  populate() {
    //creates side panels and main game word panel
    const shortAnswers = document.getElementById("short-list");
    const longAnswers = document.getElementById("long-list");
    //shuffles and displays keyWord on game-panel
    this.populateKeyWord();

    this.keyWord.shortSubwords.forEach(word => {
      const shortAnswer = new LetterTiles(word);
      this.answerKey[word] = shortAnswer;
      shortAnswers.append(shortAnswer.answer);
    });

    this.keyWord.longSubwords.forEach(word => {
      const longAnswer = new LetterTiles(word);
      this.answerKey[word] = longAnswer;
      longAnswers.append(longAnswer.answer);
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
    keyWordField.append(keyWord.answer);
  }

  updateAnswers(word) {
    if (this.answerKey[word]) {
      this.answerKey[word].reveal();
    }
  }

  revealAll() {
    Object.keys(this.answerKey).forEach(word => {
      if (!this.answerKey[word].revealed) {
        this.answerKey[word].reveal(true);
      }
    });
  }

}

export default Board;
