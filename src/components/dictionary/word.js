import keyWordsList from './game_keys';
import { _getValidSubstrings } from './util';

class Word {

  constructor() {
    this._generateRandomWord();
    this._generateSubwords();
  }

  _generateSubwords() {
    const shortSubwords = _getValidSubstrings(this.value, { min: 3, max: 3 } );
    const longSubwords = _getValidSubstrings(this.value, { min: 4, max: 6 });
    this.allSubwords = [...shortSubwords, ...longSubwords];
  }

  _generateRandomWord() {
    const rand = Math.floor(Math.random() * keyWordsList.length);
    this.value = keyWordsList[rand];
  }

  includes(letter) {
    return this.value.includes(letter.toLowerCase());
  }

}

export default Word;
