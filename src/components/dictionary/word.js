import keyWordsList from './game_keys';
import { _getValidSubstrings } from './subwords';

class Word {

  constructor() {
    this._generateRandomWord();
    this._getValidSubstrings();
    this._generateLetters();
  }

  _getValidSubstrings() {
    this.shortSubwords = _getValidSubstrings(this.value, { min: 3, max: 3 } )
    this.longSubwords = _getValidSubstrings(this.value, { min: 4, max: 6 })
  }

  _generateRandomWord() {
    const rand = Math.floor(Math.random() * keyWordsList.length);
    this.value = keyWordsList[rand];
  }

  _generateLetters() {
    const chars = this.value.split("");
    this.letters = new Set(chars);
  }

}

export default Word;
