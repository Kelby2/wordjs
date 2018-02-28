import Dictionary from "./components/dictionary/dictionary";
import Timer from "./components/timer";
import { sixCharGameWords } from "./components/dictionary/game_words";
// import Board from "./components/board";

class Game {
  constructor() {
    this.dictionary = new Dictionary();
    // this.board = new Board();
    this.timer = new Timer(3);
    this.gameOver = false;
    this.gameWords = sixCharGameWords
  }

  run() {
    this.generateWord();
    this.timer.start();
  }

  generateWord() {
    const randIndex = Math.floor(Math.random() * this.gameWords.length)
    return this.gameWords[randIndex];
  }

  

}

export default Game;
