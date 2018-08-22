import * as firebase from 'firebase/app';
import 'firebase/database';

export function renderScoreMessage(word, currentScore) {
  const highScoreField = document.getElementById('highscore');
  let message;
  if (currentScore < 90) {
    message = `Hmm... let's try that again...`;
    highScoreField.innerHTML = message;
    return null;
  }

  firebase.database().ref(`words/${word}`).once('value').then(snapshot => {
    if (!snapshot.val() || currentScore > snapshot.val().highScore) {
      message = `You got the new high score for <span class="strong clr-grn">${word}</span>!`;
      if (snapshot.val()) {
        message += `<br>Previous high score: <span class="strong clr-red">${snapshot.val().highScore}</span>`;
        message += `<br>Your score: <span class="strong clr-grn">${currentScore}</span>`;
      }
      highScoreField.innerHTML = message;
      firebase.database().ref(`words/${word}`).set({ highScore: currentScore });
    } else {
      message = `The high score for
      <span class="strong clr-grn">${word}</span> was
      ${snapshot.val().highScore}...<br> you were close.`;
      highScoreField.innerHTML = message;
    }
  });

}
