# Decoder ring project

Completed Chegg Skill's "decoder ring" "Qualified" project.

## Overview:
Decoder ring project encodes and decodes messages in three different ways using three different functions: the Caesar, Polybius, and substitution ciphers.

## Technology

### Built with:
  * JavaScript ES6
  * HTML5
  * CSS3
  * Chai used for testing


![Alt text](https://github.com/jlee55504/Decoder-ring-project/blob/main/imgs/Caesar%20cipher%20image.png?raw=true "The Caesar cipher")

## caesar.js
The Caesar shift relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

Function caesar() takes a message (input), number of letter shifts (shift), and an optional (encode) parameter to shift the specified number of shifts to the given message (input) and returns the answer. If the "_encode_" parameter is set to false, the (shift) parameter is reversed (i.e. 8 becomes -8) and applied to the message (input). Spaces and other nonalphabetic symbols are maintained throughout the answer. If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it wraps around to the front of the alphabet (e.g., z becomes c). Capital letters are ignored. 

![Alt text](https://github.com/jlee55504/Decoder-ring-project/blob/main/imgs/Polybius%20square%20image.png?raw=true "The Polybius cipher")

## polybius.js
The Polybius square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate.

Function polybius() takes a message (input) and optional (encode) parameter and turns letter messages (input) into a string of numbers by matching the message (input) characters with the correct value in the letter objects in the "_alphabet_" array and adds the right key to the answer if encode is set to true. If the _encode_ parameter is set to false and numbers are used for the string message (input), the numbers in the message characters (input) are matched the correct key in the "_alphabet_" array and the correct value is added to the answer and returned. The letters I and J share a space. When encoding, both letters are converted to 42, but when decoding, both letters are shown for each "i" and "j". Capital letters are ignored. Spaces are maintained throughout, even when seperating single numbers. I added this because of my obsession for perfection and it goes beyond Chegg Skill's requirements for this project. I also added code that will return instructions if numbers or symbols are used in this function when _encode_ is set to true or if letters or symbols are used when _encode_ is set to false. These both are also out of Chegg Skills requirements. I wrote tests for all my extra work that all pass in the polybius.test.js file.    

![Alt text](https://github.com/jlee55504/Decoder-ring-project/blob/main/imgs/Subsitution%20image.png?raw=true "The Substitution cipher")

## substitution.js
The substitution cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the substitution alphabet. This cipher requires that the recipient have the substitution alphabet.

Function substitution() takes a message (input), substitution alphabet (alphabet), and an optional (encode) parameter and matches the message (input) characters with the key in the corresponding letter object in the "_alphabetArr_" array and adds and returns the correct values set by the substitution alphabet (alphabet) if "_encode_" is set to true. If "_encode_" is set to false, the message (input) characters are matched with the correct values in the letter objects in the "_alphabetArr_" array set by the substitution alphabet (alphabet) and the correct keys are added up and returned. Capital letters are ignored. False is returned if substitution alphabet (alphabet) doesn't exist or isn't exactly 26 characters long.  False is also returned if each character in the substitution alphabet (alhpabet) isn't unique. 

