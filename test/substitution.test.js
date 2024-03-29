// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution (encode)", () => {
    it ("returns false if substitution alphabet (alphabet) doesn't exist and encode is set to true", () => {
        const actual = substitution("thinkful");
        expect(actual).to.be.false;
    });
    it ("returns false if substitution alphabet (alphabet) isn't exaclty 26 characters long and encode is set to true", () => {
        const actual = substitution("thinkful", "short");
        expect(actual).to.be.false;
    });
    it ("return the correct answer with spaces maintained throughout and encode is set to true", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected);
    });
    it ("returns false if all characters in the substitution alphabet (alphabet) aren't unique and encode is set to true", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.be.false;
    });
    it ("returns an answer ignoring capital letters in the message (input) and encode is set to true", () => {
        const actual = substitution("Thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'jrufscpw';
        expect(actual).to.equal(expected);
    });
    it ("the alphabet parameter can include special characters (not letters or spaces) and encode is set to true", () => {
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        const expected = "y&ii$r&";
        expect(actual).to.equal(expected);
    });
});

describe("substitution (decode)", () => {
    it ("returns false if substitution alphabet (alphabet) doesn't exist and encode is set to false", () => {
        const actual = substitution("thinkful", false);
        expect(actual).to.be.false;
    });
    it ("returns false if substitution alphabet (alphabet) isn't exaclty 26 characters long and encode is set to false", () => {
        const actual = substitution("thinkful", "short", false);
        expect(actual).to.be.false;
    });
    it ("returns an answer ignoring capital letters in the message (input) and encode is set to false", () => {
        const actual = substitution("Y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected = "message";
        expect(actual).to.equal(expected);
    });
    it ("return the correct answer with spaces maintained throughout and encode is set to false", () => {
        const actual = substitution("y &ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected = "m essage";
        expect(actual).to.equal(expected);
    });
    it ("the alphabet parameter can include special characters (not letters or spaces) and encode is set to false", () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected = "message";
        expect(actual).to.equal(expected);
    });
    it ("returns false if all characters in the substitution alphabet (alphabet) aren't unique and encode is set to false", () => {
        const actual = substitution("abc", "abcabcabcabcabcabcabcabcyz", false);
        expect(actual).to.be.false;
    });
});