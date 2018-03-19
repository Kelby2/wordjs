//start
//stop
//display

class Timer {

  constructor(game) {
    this.game = game;
    this.duration = 5;
    this.endOfTime = false;
    this.clock = document.getElementById("clock");
  }

  start() {
    this.tick = setInterval(() => {
      this.display(this.duration);
      this.duration--;
    }, 1000);
  }

  stop() {
    clearInterval(this.tick);
    this.endOfTime = true;
    this.game.endGame();
  }

  display() {
    if (this.duration <= 0) {
      this.stop();
    }
    this.clock.innerHTML = this.duration;
  }

  increase(duration) {
    //increase duration after entering X words
    //future implementation
  }

}

export default Timer;
