class LetterTiles {

  constructor(word, key = false) {
    this.keyWord = word;
    this.revealed = false;
    if (key) { this._shuffle(); }
    this.answerItem = document.createElement("li");
    this.answerItem.classList.add("answer", "strong");
    this.tiles = this._createLetterTiles(this.keyWord);
    this._fill();
  }

  reveal(endOfGame = false) {
    //adds the letter to each tile to reveal the answer
    this.revealed = true;
    this.tiles.map((tile, idx) => {
      tile.innerHTML = this.keyWord[idx].toUpperCase();
      if (endOfGame) { tile.classList.add("end-game"); }
    });
    this._fill();
  }

  _createLetterTiles(word) {
    //creates individual tiles for each letter of the word
    const letters = word.split("");
    return letters.map(letter => {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      return tile;
    });
  }

  _fill() {
    //appends the tile to the answer to show on the board
    this.answerItem.append(...this.tiles);
  }

  _shuffle() {
    const letterArr = this.keyWord.split("");
    for (let i = letterArr.length-1; i > 0; i--) {
      const rIndex = Math.floor(Math.random() * (i+1));
      [letterArr[i], letterArr[rIndex]] = [letterArr[rIndex], letterArr[i]];
    }
    this.keyWord = letterArr.join('');
  }

}

export default LetterTiles;
