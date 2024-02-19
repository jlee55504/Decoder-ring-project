// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let answer = "";
    /*Checks if the substitution alphabet (alphabet) length is exactly 26 or exists. If not, it returns false*/
    if (!alphabet || alphabet.length !== 26) return false;
    let alphabetArr = [{ "a": "" } ,{ "b": "" }, { "c": "" } , { "d": "" } , { "e": "" } , { f: "" } ,
     { g: "" } , { h: "" } , { i: "" } , { j: "" } , { k: "" } , { l: "" } , { m: "" } , { n: "" } , { o: "" } ,
      { p: "" } , { q: "" } , { r: "" } , { s: "" } , { t: "" } , { u: "" } , { v: "" } , { w: "" } ,
       { x: "" } , { y: "" } , { z: "" } ,];
    /*Makes sure the substitution alphabet (alphabet) is a string and all lowercase*/
    alphabet = alphabet.toString().toLowerCase();
    /*Makes sure the message (input) is a string and all lowercase**/
    input = input.toString().toLowerCase();
    /*Checks that all characters in the substitution alphabet (alphabet) are unique and don't reappear. 
    If so, it returns false*/
    for (let i = 0; alphabet.length; i++) {
      const character = alphabet[i];
      const index = alphabet.indexOf(character);
      if (alphabet.includes(character, index+1)) {
        return false;
      } 
      break;
    }

    const encrypt = (input, alphabet) => {
    /*Sets the alphabet in alphabetObj to equal the substitution alphabet (alphabet)*/
    for (let i = 0; i < alphabetArr.length; i++) {
      const key = Object.keys(alphabetArr[i]).toString();
      alphabetArr[i][key] = alphabet[i];      
    }
   
    /*Matches the message characters (input) with the substitution alphabet (alphabet) in alphabetObj 
    and adds the substitution alphabet characters to the answer*/
    for (let i = 0; i < input.length; i++) {
      /*Current input character*/
      const inputChar = input[i];
      /*Adds a space to the answer if there's one in the current input character*/
      if (inputChar === " ") {
        answer += inputChar;
        continue;
      }
      for (const letters of alphabetArr) {
        /*current 'letter' key in alphabetObj*/
        const letter = Object.keys(letters).toString();
        /*Matches the current input character (input) with the substitution alphabet key in alphabetObj 
        and adds the matching value to the answer*/
        if(inputChar === letter) {
          answer += Object.values(letters).toString();
          break;
        }
      }
    }
    }

    const decrypt = (input, alphabet) => {

    }
    /*Encodes message (input) if "encode" is set to true*/
    if (encode === true) encrypt(input, alphabet);
    /*Decodes message (input) if "encode" is set to false*/
    else if (encode === false) decrypt();
    return answer;
  }
console.log(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"))
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
