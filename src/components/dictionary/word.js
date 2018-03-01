//value
//shortSubstrings
//longSubstrings
import gameWordsLibrary from './game_words';
import subset from 'all-subsets';
import permutations from 'permutation';
import Dictionary from './dictionary';

class Word {

  constructor() {
    this.dictionary = new Dictionary();
    this._generateRandomWord();
    this._getValidSubstrings();
  }

  _getSubsets(word) {
    const letters = word.split('');
    return subset(letters)
              .filter(letterArrs => letterArrs.length > 2)
              .map(substrings => substrings.join(''));
  }

  _getPermutations(array) {
    const subwords = array.reduce((acc, el) => {
      return acc.concat(permutations(el, { unique: true }))
    }, [])
    return subwords;
  }

  _getValidSubstrings() {
    const substrings = this._getSubsets(this.value);
    const subwords = this._getPermutations(substrings);
    const validSubstrings = this.dictionary.validateCollection(subwords);
    this.shortSubs = validSubstrings.filter(word => word.length === 3);
    this.longSubs = validSubstrings.filter(word => word.length > 3);
  }

  _generateRandomWord() {
    const rand = Math.floor(Math.random() * gameWordsLibrary.length);
    this.value = gameWordsLibrary[rand];
  }

}

export default Word;
