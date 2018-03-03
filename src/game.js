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
    this.board = new Board(this);
  }

  run() {
    this.word = new Word();
    this.timer.start();
    this.board.render();
  }


}

export default Game;
