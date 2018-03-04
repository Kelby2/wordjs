import Dictionary from "./components/dictionary/dictionary";
import Timer from "./components/timer";
import Word from "./components/dictionary/word";
import Board from "./components/board";
// import Board from "./components/board";

class Game {
  constructor() {
    // this.board = new Board();
    this.gameOver = false;
    this.timer = new Timer(3);
  }

  run() {
    this.word = new Word();
    this.board = new Board(this);
    this.timer.start();
  }


}

export default Game;
