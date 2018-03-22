import { calculateWordScore } from "./dictionary/util.js";

class Score {

  constructor() {
    this.currentScore = 0;
    this.gameScore = document.getElementById("score");
    this.display();
  }

  update(word) {
    this.currentScore += calculateWordScore(word);
    this.display();
  }

  display() {
    this.gameScore.innerHTML = this.currentScore;
  }


  _calculateTotalScore(list) {

  }

}

export default Score;
