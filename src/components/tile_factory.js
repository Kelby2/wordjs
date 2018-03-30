class LetterTiles {

  constructor(word, key = false) {
    this.word = word;
    this.revealed = false;
    this.key = key;
    if (this.key) { this._shuffle(); }
    this.answerItem = document.createElement("li");
    this.answerItem.classList.add("answer", "strong");
    this.tiles = this._createLetterTiles(this.word);
    this._fill();
  }

  reveal(endOfGame = false) {
    //adds the letter to each tile to reveal the answer
    this.revealed = true;
    this.tiles.map((tile, idx) => {
      tile.innerHTML = this.word[idx].toUpperCase();
      if (endOfGame) { tile.classList.add("end-game"); }
    });

    if (!this.key) {
      this.answerItem.classList.add("search");
      this.answerItem.addEventListener("click", () => {
        window.open(
          `https://google.com/search?q=define+${this.word}`
        );
      });
    }
    
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
    const letterArr = this.word.split("");
    for (let i = letterArr.length-1; i > 0; i--) {
      const rIndex = Math.floor(Math.random() * (i+1));
      [letterArr[i], letterArr[rIndex]] = [letterArr[rIndex], letterArr[i]];
    }
    if (this.word === letterArr.join('')) {
      this._shuffle();
    } else {
      this.word = letterArr.join('');
    }
  }

}

export default LetterTiles;
