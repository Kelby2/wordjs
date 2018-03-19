import subset from 'all-subsets';
import permutations from 'permutation';
import Dictionary from './dictionary';

function _getSubsets(word) {
  const letters = word.split('');
  // unique subsets
  return subset(letters)
            .filter(letterArrs => letterArrs.length > 2)
            .map(substrings => substrings.join(''));
}

function _getPermutations(array) {
  const subwords = array.reduce((acc, el) => {
    return acc.concat(permutations(el, { unique: true }));
  }, []);
  return subwords;
}

export const _getValidSubstrings = (keyWord, lengths) => {
  const dictionary = new Dictionary();
  const substrings = _getSubsets(keyWord);
  const subwords = _getPermutations(substrings);
  const validSubwords = dictionary.validateCollection(subwords);
  return validSubwords.filter((word, index, list) => (
    word.length >= lengths.min
    && word.length <= lengths.max
    && list.indexOf(word) === index
  )).sort((word1, word2) => (
    //sorts first by length and then alphabetically
    word1.length - word2.length || word1.localeCompare(word2)
  ));
};

export const _charFrequency = (string) => {
  const frequency = {};
  const letters = string.split("");
  letters.forEach(letter => {
    if (frequency[letter]) {
      frequency[letter] += 1;
    } else {
      frequency[letter] = 1;
    }
  });

  return frequency;
};
