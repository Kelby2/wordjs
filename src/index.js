import GameHandler from "./game";

document.addEventListener("DOMContentLoaded", () => {
  const game = new GameHandler();
  const newGame = document.getElementById("new-game");

  window.onload = () => {
    newGame.addEventListener("click", () => {
      event.preventDefault();
      instructions.classList.remove("show");
      game.beginRound();
    });
  };

  const instructions = document.getElementsByClassName("instructions")[0];
  const asdf = document.getElementById("ins-btn");
  asdf.addEventListener("click", () =>{
    instructions.classList.toggle("show");
  });
});
