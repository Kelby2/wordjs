class Score {

  constructor() {
    this.currentScore = 0;
    this.gameScore = document.getElementById("score");
    this.display();
  }

  update(word) {
    this.currentScore += this._calculateScore(word);
    this.display();
  }

  display() {
    this.gameScore.innerHTML = this.currentScore;
  }

  _calculateScore(word) {
    return word.length * 30;
  }

  _calculateTotalScore(list) {

  }

}

export default Score;
