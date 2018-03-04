//populate_board
//display
class Board {

  constructor(game) {
    this.game = game;
    this.word = this.game.word;
    this.populate();
  }

  populate() {
    //creates side panels and main game word panel
    this.word.shortSubwords;
    this.word.longSubwords;
    const word = document.getElementById("word");
    word.innerHTML = this.word.value;
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
