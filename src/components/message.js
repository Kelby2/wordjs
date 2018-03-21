import { calculateWordScore } from './dictionary/util.js';

class Message {

  constructor() {
    this.field = document.getElementById("message");
  }

  alert(word, type) {
    let message;
    const score = calculateWordScore(word);

    switch (type) {
      case "valid":
        message = `You scored ${score} points for ${word}`;
        break;
      case "duplicate":
        message = `You already played ${word}`;
        break;
      case "invalid":
        message = `${word} does not exist in the dictionary`;
        break;
    }

    this.field.innerHTML = message;
  }

  alertMin() {
    this.field.innerHTML = "Please enter a minimum of 3 letters";
  }

  endMessage() {
    this.field.innerHTML = "Congrats! The game is over";
  }

  clear() {
    this.field.innerHTML = "";
  }

}

export default Message;
