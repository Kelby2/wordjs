import LetterTiles from './tile_factory';
//populate_board
//display
class Board {

  constructor(game) {
    this.game = game;
    this.keyWord = this.game.word;
    this.answerKey = {};
    this.populate();
    this.handleInput();
  }

  populate() {
    //creates side panels and main game word panel
    const keyWord = document.getElementById("key-word");
    const shortAnswers = document.getElementById("short-list");
    const longAnswers = document.getElementById("long-list");

    keyWord.innerHTML = this.keyWord.value;

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

  shuffleLetters() {
    //shuffle key_word letters
    console.log('Shuffling!');
  }

  updateAnswers(word) {
    const userInput = document.getElementById("user-input");
    userInput.value = "";
    this.answerKey[word].reveal();
  }

  handleInput() {
    //eventListener for input form
  }

}

export default Board;
