//start
//stop
//display

class TimerObject {

  constructor(game) {
    this.game = game;
    this.clockDisplay = document.getElementById("clock");
    this.stop = this.stop.bind(this);
  }

  start() {
    this.stop();
    this.duration = 120;
    this.display();
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
  }

  display() {
    if (this.duration <= 0) {
      this.stop();
      this.game.endGame();
    }
    this.clockDisplay.innerHTML = this._formatTime(this.duration);
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

  increase(time) {
    //potential implementation where user is able to incrase their
    //time if criteria is met
  }

}

export default TimerObject;
