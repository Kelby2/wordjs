class LetterTiles {

  constructor(word) {
    this.keyWord = word;
    this.answer = document.createElement('li');
    this.answer.classList.add('answer');
    this.tiles = this._createTiles();
    this._fill();
  }

  reveal() {
    //adds the letter to each tile to reveal the answer
    this.tiles.map((tile, idx) => {
      tile.innerHTML = this.keyWord[idx];
    })
    this._fill();
  }

  _createTiles() {
    //creates an Array of empty div tiles,
    const letters = this.keyWord.split("");
    return letters.map(letter => {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      return tile;
    })
  }

  _fill() {
    this.answer.append(...this.tiles);
  }



}

export default LetterTiles;
