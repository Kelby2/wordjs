import * as firebase from 'firebase/app';
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

  const config = {
    apiKey: 'AIzaSyAbTuJaoP1ZaUlBzkGbowEBN6IdK5SPsNc',
    authDomain: 'wordjs-80f4a.firebaseapp.com',
    databaseURL: 'https://wordjs-80f4a.firebaseio.com',
    projectId: 'wordjs-80f4a',
    storageBucket: 'wordjs-80f4a.appspot.com',
    messagingSenderId: '726517595431'
  };
  firebase.initializeApp(config);

  const instructions = document.getElementById("ins");
  const insToggler = document.getElementById("ins-btn");
  insToggler.addEventListener("click", () => {
    instructions.classList.toggle("active");
  });
});
