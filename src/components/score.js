class Score {

  constructor() {
    this.currentScore = 0;
  }

  update(word) {
    this.currentScore += this._calculateScore(word);
  }

  display() {
    const gameScore = document.getElementById("score")
    gameScore.innerHTML = this.currentScore;
  }

  _calculateScore(word) {
    return word.length * 10
  }

  _calculateTotalScore() {

  }

}

export default Score;
