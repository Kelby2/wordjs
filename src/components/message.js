import { calculateWordScore } from './dictionary/util.js';

class Message {

  constructor() {
    this.field = document.getElementById("message");
  }

  display(entry, isAnswer) {
    let message;
    this.clear();
    const score = calculateWordScore(entry);
    const color = (isAnswer === true) ? "#008000" : "#990016";
    const word = `<span class="strong" style="color:${color}">
    ${entry}</span>`;

    switch (isAnswer) {
      case true:
        message = `Scored <span class="strong" style="color:${color}">
        ${score}</span> points for ${word}`;
        break;
      case "duplicate":
        message = `${word} has already been played`;
        break;
      case false:
        message = `${word}<br>does not exist in the dictionary`;
        break;
    }
    this.field.innerHTML = message;
    setTimeout(() => {
      this.field.classList.add("fade");
    }, 0);
  }

  conclude(percentage) {
    this.clear();
    const color = (percentage > 49) ? "#008000" : "#990016";
    const message = `You got <span class="strong" style="color:${color}">
    ${percentage}%</span> of the words`;
    this.field.innerHTML = message;
  }

  alertMin() {
    this.field.innerHTML = "Please enter at least 3 letters";
  }

  clear() {
    this.field.classList.remove("fade");
    this.field.innerHTML = "";
  }

}

export default Message;
