# wordjs

[Play now!](http://kelbylu.me/wordjs)

Addictive word-finding puzzle game. The goal is to find as many words as you can given the allotted time. Challenge your friends to see who can find more words!

## Gameplay

![gameplay](./assets/readme/gameplay.mp4)

Press the New Word button at the bottom of the page to generate new letters. Within the allotted time (2 minutes), type into the field as many words as you can find with the six letters.

The side panels show all valid words (3-6 letters in length) that can be made using the letters, based on a modified [dictionary](https://github.com/dwyl/english-words) of all english words from user dwyl.

The words remain concealed until the player finds them. If time expires of the player concedes, all unfound words will be revealed. The player will then have the option to click on each word for a definition.

## Implementation
* Dictionary for validating words is constructed using a Set, resulting in O(1) look-up time
* New key-word is generated randomly from a list of 500 possible words for replay value.
* Event listeners added on the input field to validate player key press and submission, responding with custom messages depending on if the word is valid and if it has already been entered.
* Created with responsive design so that game can be viewed and played regardless of screen size.


## Future Implementation
* Light up the letter that the player enters on keypress.
* Multiplayer mode where players can play match up against each other with the same word.
* Implement hint feature that will utilize a trie to provide the player cues on if they are inputting valid words.
* Backend server to keep track of high scores per word.

<br>
Developed using JavaScript ES6, HTML5, CSS3

Kelby Lu
