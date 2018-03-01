import word_library from "./valid_words_library";

class Dictionary {
  constructor() {
    this.dictionary = new Set(word_library);
  }

  isValid(word) {
    return this.dictionary.has(word);
  }

  validateCollection(wordArray) {
    return wordArray.filter(word => this.isValid(word));
  }

}

export default Dictionary;
