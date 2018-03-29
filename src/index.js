import GameHandler from "./game";

document.addEventListener("DOMContentLoaded", () => {
  const game = new GameHandler();
  const newGame = document.getElementById("new-game");

  window.onload = () => {
    newGame.addEventListener("click", () => {
      event.preventDefault();
      instructions.classList.remove("active");
      game.beginRound();
    });
  };

  const instructions = document.getElementById("ins");
  const insToggler = document.getElementById("ins-btn");
  insToggler.addEventListener("click", () =>{
    instructions.classList.toggle("active");
  });
});
