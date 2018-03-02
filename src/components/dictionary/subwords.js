import subset from 'all-subsets';
import permutations from 'permutation';
import Dictionary from './dictionary';

function _getSubsets(word) {
  const letters = word.split('');
  return subset(letters)
            .filter(letterArrs => letterArrs.length > 2)
            .map(substrings => substrings.join(''));
}

function _getPermutations(array) {
  const subwords = array.reduce((acc, el) => {
    return acc.concat(permutations(el, { unique: true }))
  }, [])
  return subwords;
}

export const _getValidSubstrings = (word, params) => {
  const dictionary = new Dictionary();
  const substrings = _getSubsets(word);
  const subwords = _getPermutations(substrings);
  const validSubstrings = dictionary.validateCollection(subwords);

  return validSubstrings.filter(word => {
    return word.length >= params.min && word.length <= params.max
  })
}
