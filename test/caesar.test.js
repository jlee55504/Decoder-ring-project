// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    it("should return false if shift value isn't present and 'encode' is set to true", () => {
      const expected = false;
      const actual = caesar("thinkful");
      expect(actual).to.be.false;
    });
     it("should return false if shift value is equal to 0 and 'encode' is set to true", () => {
      const expected = false;
      const actual = caesar("thinkful", 0);
      expect(actual).to.be.false;
    });
    it("should return false if shift value is less than -25 and 'encode' is set to true", () => {
      const expected = false;
      const actual = caesar("thinkful", -25);
      expect(actual).to.be.false;
    });
    it("should return false if shift value is greater than 25 and 'encode' is set to true", () => {
      const expected = false;
      const actual = caesar("thinkful", 26);
      expect(actual).to.be.false;
    });
    it("should return an answer with spaces maintained throughout and 'encode' is set to true", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar("This is a secret message!", 8)
        expect(actual).to.equal(expected);
      });
      it("should return an answer with non-letters included and 'encode' is set to true", () => {
        const expected = "$bpqa qa i amkzmb umaaiom!";
        const actual = caesar("$This is a secret message!", 8);
        expect(actual).to.equal(expected);
      });
      it("should return an answer with the correctly shifted numbers if the 'shift' number is positive and 'encode' is set to true", () => {
        const expected = "wklqnixo";
        const actual = caesar("thinkful", 3);
        expect(actual).to.equal(expected);
      });
      it("should return an answer with the correctly shifted numbers if the 'shift' number is negative and 'encode' is set to true", () => {
        const expected = "qefkhcri";
        const actual = caesar("thinkful", -3);
        expect(actual).to.equal(expected);
      });
      it("should return an answer with the correctly shifted numbers if the 'shift' number is longer than the alphabet and 'encode' is set to true", () => {
        const expected = "ccc";
        const actual = caesar("zzz", 3);
        expect(actual).to.equal(expected);
      });
      it("should return an answer with the correctly shifted numbers while ignoring capital letters and 'encode' is set to true", () => {
        const expected = "wklqnixo";
        const actual = caesar("Thinkful", 3);
        expect(actual).to.equal(expected);
      });
    });

describe("caesar (decode)", () => {
      it("should return an answer with spaces maintained throughout and 'encode' is set to false", () => {
        const expected = "thin kful ";
        const actual = caesar("wklq nixo ", 3, false);
        expect(actual).to.equal(expected);
      });
      it("should return an answer with non-letters included and 'encode' is set to false", () => {
        const expected = "$thinkful!";
        const actual = caesar("$wklqnixo!", 3, false);
        expect(actual).to.equal(expected);
      });
      it("should return an answer with the correctly shifted numbers if the 'shift' number is positive and 'encode' is set to false", () => {
        const expected = "thinkful";
        const actual = caesar("wklqnixo", 3, false);
        expect(actual).to.equal(expected);
      });
      it("should return an answer with the correctly shifted numbers if the 'shift' number is negative and 'encode' is set to false", () => {
        const expected = "ddd";
        const actual = caesar("aaa", -3, false);
        expect(actual).to.equal(expected);
      });
      it("should return an answer with the correctly shifted numbers if the 'shift' number is longer than the alphabet and 'encode' is set to false", () => {
        const expected = "xxx";
        const actual = caesar("aaa", 3, false);
        expect(actual).to.equal(expected);
      });
      it("should return an answer with the correctly shifted numbers while ignoring capital letters and 'encode' is set to false", () => {
        const expected = "thinkful";
        const actual = caesar("Wklqnixo", 3, false);
        expect(actual).to.equal(expected);
      });
    });