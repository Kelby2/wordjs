import GameHandler from "./game";

document.addEventListener("DOMContentLoaded", () => {
  const game = new GameHandler();
  const newGame = document.getElementById("new-game");

  window.onload = () => {
    newGame.addEventListener("click", () => {
      event.preventDefault();
      game.beginRound();
    });
  };

});
