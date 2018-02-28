import { words } from "./words";

class Dictionary {
  constructor() {
    this.dictionary = new Set(words);
  }

  isValid(word) {
    return this.dictionary.has(word);
  }

}

export default Dictionary;
