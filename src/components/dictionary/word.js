import keyWordsList from './game_keys';
import { _getValidSubstrings } from './util';

class Word {

  constructor() {
    this._generateRandomWord();
    this._getValidSubstrings();
  }

  _getValidSubstrings() {
    this.shortSubwords = _getValidSubstrings(this.value, { min: 3, max: 3 } );
    this.longSubwords = _getValidSubstrings(this.value, { min: 4, max: 6 });
  }

  _generateRandomWord() {
    const rand = Math.floor(Math.random() * keyWordsList.length);
    this.value = keyWordsList[rand];
  }

  shuffled() {
    //Fisher Yates Shuffle
    const letterArr = this.value.split("");
    for (let i = letterArr.length-1; i > 0; i--) {
      const rIndex = Math.floor(Math.random() * (i+1));
      [letterArr[i], letterArr[rIndex]] = [letterArr[rIndex], letterArr[i]];
    }
    return letterArr.join('');
  }

  includes(letter) {
    return this.value.includes(letter.toLowerCase());
  }

}

export default Word;
