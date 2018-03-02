import Dictionary from "./components/dictionary/dictionary";
import Timer from "./components/timer";
import Word from "./components/dictionary/word";
// import Board from "./components/board";

class Game {
  constructor() {
    // this.board = new Board();
    this.timer = new Timer(3);
    this.gameOver = false;
  }

  run() {
    this.word = new Word();
    this.timer.start();
  }


}

export default Game;
