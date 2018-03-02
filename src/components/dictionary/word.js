import keys from './game_keys';
import { _getValidSubstrings } from './subwords';

class Word {

  constructor() {
    this._generateRandomWord();
    this._getValidSubstrings();
  }

  _getValidSubstrings() {
    this.shortSubstrings = _getValidSubstrings(this.value, { min: 3, max: 3 } )
    this.longSubstrings = _getValidSubstrings(this.value, { min: 4, max: 6 })
  }

  _generateRandomWord() {
    const rand = Math.floor(Math.random() * keys.length);
    this.value = keys[rand];
  }

}

export default Word;
