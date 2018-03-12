class LetterTiles {

  constructor(word) {
    this.keyWord = word;
    this.revealed = false;
    this.answer = document.createElement('li');
    this.answer.classList.add('answer');
    this.tiles = this._createLetterTiles();
    this._fill();
  }

  reveal() {
    //adds the letter to each tile to reveal the answer
    this.revealed = true;
    this.tiles.map((tile, idx) => {
      tile.innerHTML = this.keyWord[idx];
    })
    this._fill();
  }

  _createLetterTiles() {
    //creates individual tiles for each letter of the word
    const letters = this.keyWord.split("");
    return letters.map(letter => {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      return tile;
    })
  }

  _fill() {
    //appends the tile to the answer to show on the board
    this.answer.append(...this.tiles);
  }

}

export default LetterTiles;
