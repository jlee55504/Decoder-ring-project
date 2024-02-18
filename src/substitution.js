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
    let alphabetObj = {};
    /*Makes sure the substitution alphabet (alphabet) is a string and all lowercase*/
    alphabet = alphabet.toString().toLowerCase();
    /*Checks that all characters in the substitution alphabet (alphabet) are unique and don't reappear. 
    If so, it returns false*/
    for (let i = 0; alphabet.length; i++) {
      const character = alphabet[i];
      const index = alphabet.indexOf(character)
      if (alphabet.includes(character, index+1)) {
        return false;
      } 
    }
    
    const encrypt = () => {

    }

    const decrypt = () => {

    }
    /*Encodes message (input) if "encode" is set to true*/
    if (encode === true) encrypt();
    /*Decodes message (input) if "encode" is set to false*/
    else if (encode === false) decrypt();
    return answer;
  }
console.log(substitution("thinkful", "$wae&zrdxtfcygvuhbijnokm"))
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
