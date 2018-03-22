//start
//stop
//display

class Timer {

  constructor(game) {
    this.game = game;
    this.duration = 120;
    this.clock = document.getElementById("clock");
    this.stop = this.stop.bind(this);
  }

  start() {
    clearInterval(this.tick);
    this.countdown = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.duration--;
    this.display();
  }

  stop() {
    clearInterval(this.countdown);
    this.clock.innerHTML = "--";
    this.game.endGame();
  }

  display() {
    if (this.duration <= 0) {
      this.stop();
    }
    this.clock.innerHTML = this._formatTime(this.duration);
  }

  _formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) { seconds = "0" + seconds; }

    if (minutes > 0) {
      return `${minutes}:${seconds}`;
    } else {
      return `${seconds}`;
    }
  }

  increase(duration) {
    //increase duration after entering X words
    //future implementation
  }

}

export default Timer;
