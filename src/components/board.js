//populate_board
//display
class Board {

  constructor(game) {
    this.game = game;
    this.keyWord = this.game.word;
    this.populate();
  }

  populate() {
    //creates side panels and main game word panel
    this.keyWord.shortSubwords;
    this.keyWord.longSubwords;
    const keyWord = document.getElementById("key-word");
    keyWord.innerHTML = this.keyWord.value;
  }

  shuffleLetters() {
    //shuffle key_word letters
  }

  updateAnswers() {
    //update side panels
  }

  validateInput() {
    //validate valid key entry (has to be a letter in the word)
  }

  validateEntry() {
    //only allow alpha chars, enter, and spacebar
  }

  handleInput() {
    //eventListener for input form
  }

}

export default Board;
