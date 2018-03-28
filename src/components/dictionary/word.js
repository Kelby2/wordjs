import keyWordsList from './game_keys';
import { _getValidSubstrings } from './util';

class Word {

  constructor() {
    this._generateRandomWord();
    this._generateSubwords();
  }

  _generateSubwords() {
    this.allSubwords = _getValidSubstrings(this.value, { min: 3, max: 6 });
  }

  _generateRandomWord() {
    const rand = Math.floor(Math.random() * keyWordsList.length);
    this.value = keyWordsList[rand];
    this.value = 'exit'
  }

  includes(letter) {
    return this.value.includes(letter.toLowerCase());
  }

}

export default Word;
