//start
//reset
//currentTime

class Timer {

  constructor(time) {
    this.time = time, this.playClock = time;
  }

  start() {
    this.runTimer = setInterval(() =>
    {
      this.display();
      this.playClock -= 1;
    }, 1000);
  }

  display() {
    if (this.playClock < 0) {
      clearInterval(this.runTimer);
    } else {
      console.log(this.playClock);
    }
  }

}

export default Timer;
