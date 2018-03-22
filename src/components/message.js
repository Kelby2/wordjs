import { calculateWordScore } from './dictionary/util.js';

class Message {

  constructor() {
    this.field = document.getElementById("message");
  }

  alert(entry, type) {
    let message;
    const score = calculateWordScore(entry);
    const color = (type === "valid") ? "green" : "#990016";
    const word = `<span class="strong" style="color:${color}">
    ${entry}</span>`;

    switch (type) {
      case "valid":
        message = `<span class="strong" style="color:${color}">
        ${score}</span> points for ${word}`;
        break;
      case "duplicate":
        message = `${word} has already been played`;
        break;
      case "invalid":
        message = `${word}<br>does not exist in the dictionary`;
        break;
    }

    this.field.innerHTML = message;
  }

  alertMin() {
    this.field.innerHTML = "Please enter a minimum of 3 letters";
  }

  clear() {
    this.field.innerHTML = "";
  }

}

export default Message;
