import LetterTiles from './letter_tiles';
//populate_board
//display
class Board {

  constructor(game) {
    this.game = game;
    this.keyWord = this.game.word;
    this.answerKey = [...this.keyWord.shortSubwords, ...this.keyWord.longSubwords];
    this.populate();
    this.handleInput();
    this.valdiateEntry = this.validateEntry.bind(this);
  }

  populate() {
    //creates side panels and main game word panel
    const keyWord = document.getElementById("key-word");
    const shortAnswers = document.getElementById("short-list");
    // const longAnswers = document.getElementById("long-list");
    //
    //
    // this.keyWord.shortSubwords.forEach(word => {
    //   const wordBlock = document.createElement('li');
    //   wordBlock.innerHTML = word;
    //   shortAnswers.append(wordBlock);
    // });
    //
    // this.keyWord.longSubwords.forEach(word => {
    //   const wordBlock = document.createElement('li');
    //   wordBlock.innerHTML = word;
    //   longAnswers.append(wordBlock);
    // });
    keyWord.innerHTML = this.keyWord.value;
    this.keyWord.shortSubwords.forEach(word => {
      const x = new LetterTiles(word);
      shortAnswers.append(x.answer);
    })
  }

  shuffleLetters() {
    //shuffle key_word letters
    console.log('Shuffling!')
  }

  updateAnswers() {
    //update side panels
  }

  validateInput() {
    //validate valid key entry (has to be a letter in the word)
  }

  validateEntry(keyWord) {
    //only allow alpha chars, enter, and spacebar
    if (event.keyCode === 32) {
      event.preventDefault();
      this.shuffleLetters();
    }

  }

  handleInput() {
    //eventListener for input form
    const entryPoint = document.getElementById("user-input");
    entryPoint.addEventListener("keypress", () => {
      this.validateEntry(this.keyWord)
    });
  }

}

export default Board;
