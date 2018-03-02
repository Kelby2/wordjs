//value
//shortSubstrings
//longSubstrings
import gameWordsLibrary from './game_words';
import { _getValidSubstrings } from './subwords';

class Word {

  constructor() {
    // this.dictionary = new Dictionary();
    this._generateRandomWord();
    this._getValidSubstrings();
  }

  _getValidSubstrings() {
    this.shortSubs = _getValidSubstrings(this.value, { min: 3, max: 3 } )
    this.longSubs = _getValidSubstrings(this.value, { min: 4, max: 6 })
  }

  _generateRandomWord() {
    const rand = Math.floor(Math.random() * gameWordsLibrary.length);
    this.value = gameWordsLibrary[rand];
  }

}

export default Word;
