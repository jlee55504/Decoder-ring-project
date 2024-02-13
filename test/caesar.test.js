// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    it("should return false if shift value isn't present", () => {
      const expected = false
      const actual = caesar("thinkful")
      expect(actual).to.be.false;
    });
     it("should return false if shift value is equal to 0", () => {
      const expected = false
      const actual = caesar("thinkful", 0)
      expect(actual).to.be.false;
    });
    it("should return false if shift value is less than -25", () => {
      const expected = false
      const actual = caesar("thinkful", -25)
      expect(actual).to.be.false;
    });
    it("should return false if shift value is greater than 25", () => {
      const expected = false
      const actual = caesar("thinkful", 26)
      expect(actual).to.be.false;
    });
  });