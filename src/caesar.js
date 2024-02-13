// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  function caesar(input, shift, encode = true) {
    // your solution code here
    let answer = "";
    let currLetter;
    let currIndex;
    let newIndex;
    let code = input.toLowerCase();
    if (shift === 0 || shift < -25 || shift > 25) return false;
    console.log(input)
    console.log(shift);
 
    for (let i = 0; i < code.length; i++) {
      if (!alphabet.includes(code[i])) {
        answer += code[i];
        continue;
      }
      if (shift < 0) {
        currIndex = alphabet.indexOf(code[i]);
        if (currIndex + shift < 0) {
          console.log("minus number > 25");
           newIndex = currIndex + shift + 25;
          answer += alphabet[newIndex + 1];
          continue;
        }
        console.log("minus number < 25")
        answer += alphabet[currIndex + shift];
      } else if (shift > 0) {
        currIndex = alphabet.indexOf(code[i]);
        if (currIndex + shift > 25) {
          console.log("Positive number > 25")
          newIndex = currIndex + shift - 25;
          answer += alphabet[newIndex -1];
          continue;
        }
        console.log("Positive number < 25")
        answer += alphabet[currIndex + shift];
      }
    }
    return answer;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
