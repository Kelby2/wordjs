import Game from "./game";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  const newGameBtn = document.getElementById("new-game");
  window.onload = () => {
    // game.beginRound();
    newGameBtn.addEventListener("click", () => {
      game.beginRound();
    });

  };


});
