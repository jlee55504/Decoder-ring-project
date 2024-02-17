// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    let answer = "";
    /*Alaphabet with each letter in its own object with the letter as the value
     and the matching number as the key.*/
    let alphabet = [ { "11": "a" }, { "21": "b" }, { "31": "c" }, { "41": "d" }, { "51": "e" }, { "12": "f" }, { "22": "g" }, { "32": "h" }, { "42": "(i/j)"}, { "52": "k" }, { "13": "l" }, { "23": "m" }, { "33": "n" }, { "43": "o" }, { "53": "p" }, { "14": "q" }, { "24": "r" }, { "34": "s" }, { "44": "t" }, { "54": "u" }, { "15": "v" }, { "25": "w" }, { "35": "x" }, { "45": "y" }, { "55": "z" },];
    
    /*Makes sure message (input) a string and all lowercase*/
    input = input.toString().toLowerCase();

    /*function used to encode a message (input) if encode parameter is set to true*/
    const encodeCode = input => {
      for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < alphabet.length;  j++) {
        /*Checks if message (input) contains "i" or "j". If so, "42" is 
        added to the answer*/
          if (input[i] === "i" || input[i] === "j") {
            answer += "42";
            break;
      }   /*Checks if message (input) contains spaces. If so, a space is 
      added to the answer*/
          else if (input[i] === " ") {
            answer += input[i];
            break;
        /*Matches letters in the message (input) with the corresponding number 
        ("key") and adds it to the answer*/
      }   else if (input[i] === Object.values(alphabet[j]).toString()) {
            answer += Object.keys(alphabet[j]);
            break;
      }
      }
    }
  }

  /*If encode is set to true, this runs encodeCode() (encrypts message (input))*/
    if (encode === true) encodeCode(input);
    /*If encode is set to true, this runs decryptCode() (decrypts message (input))*/
    else if (encode === false) decryptCode(input);
    return answer;
  }
  //console.log(polybius("Hello world"));
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
