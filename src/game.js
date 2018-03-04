import Dictionary from "./components/dictionary/dictionary";
import Timer from "./components/timer";
import Score from "./components/score";
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
    this.score = new Score()
    this.timer.start();
    this.score.display();
  }


}

export default Game;
