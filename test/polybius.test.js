// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius (encoding)", () => {
    it ("returns an answer which is a string when encoding", () => {
        const actual = polybius("thinkful");
        const expected = "4432423352125413";
        expect(actual).to.equal(expected);
    });
    it ("returns an answer with spaces maintained throughout when encoding", () => {
        const actual = polybius("Hello world");
        const expected = '3251131343 2543241341';
        expect(actual).to.equal(expected);
    });
    it ("returns an answer which ignores capital letters when encoding", () => {
        const actual = polybius("HELLO WORLD");
        const expected = '3251131343 2543241341';
        expect(actual).to.equal(expected);
    });
    it ("returns an answer which converts both letters 'i' and 'j' to '42' when encoding", () => {
        const actual = polybius("ij");
        const expected = '4242';
        expect(actual).to.equal(expected);
    });
    it ("returns instructions when numbers or symbols are entered for the message (input) when encoding", () => {
        const actual = polybius("12#$");
        const expected = "Please use letters or spaces for messages (input) only.";
        expect(actual).to.equal(expected);
    });
});

describe("poybius (decrypt)", () => {
    it ("returns an answer which shows both letters 'i' and 'j' when '42' is entered while decoding", () => {
        const actual = polybius("4242", false);
        const expected = '(i/j)(i/j)';
        expect(actual).to.equal(expected);
    });
    it ("returns false when an uneven message (input) is entered (not counting any spaces) while decoding", () => {
        const actual = polybius("44324233521254134", false);
        expect(actual).to.be.false;
    });
    it ("returns an answer with spaces maintained throughout when decoding", () => {
        const actual = polybius("3251131343 2543241341", false);
        const expected = "hello world";
        expect(actual).to.equal(expected);
    });
    it ("returns an answer with spaces maintained throughout when decoding, even when a space seperates a single number", () => {
        const actual = polybius("3251 131 343 2 5  4 3241341", false);
        const expected = "he llo  w   orld";
        expect(actual).to.equal(expected);
    });
    it ("returns an answer which is a string when decoding", () => {
        const actual = polybius("4432423352125413", false);
        const expected = "th(i/j)nkful";
        expect(actual).to.equal(expected);
    });
    it ("returns instructions when letters or symbols are entered for the message (input) when decoding", () => {
        const actual = polybius("hello world$", false);
        const expected = "Please use numbers or spaces for messages (input) only.";
        expect(actual).to.equal(expected);
    });
});