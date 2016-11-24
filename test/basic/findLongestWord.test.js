import { assert } from 'chai';
import findLongestWord from '../src/findLongestWord.js';

describe('Find the Longest Word in a String', () => {
  it('findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.', () => {
    assert(typeof findLongestWord("The quick brown fox jumped over the lazy dog") === "number", 'message: <code>findLongestWord("The quick brown fox jumped over the lazy dog")</code> should return a number.');
  });
  it('findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.', () => {
    assert(findLongestWord("The quick brown fox jumped over the lazy dog") === 6, 'message: <code>findLongestWord("The quick brown fox jumped over the lazy dog")</code> should return 6.');
  });
  it('findLongestWord("May the force be with you") should return 5.', () => {
    assert(findLongestWord("May the force be with you") === 5, 'message: <code>findLongestWord("May the force be with you")</code> should return 5.');
  });
  it('findLongestWord("Google do a barrel roll") should return 6.', () => {
    assert(findLongestWord("Google do a barrel roll") === 6, 'message: <code>findLongestWord("Google do a barrel roll")</code> should return 6.');
  });
  it('findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.', () => {
    assert(findLongestWord("What is the average airspeed velocity of an unladen swallow") === 8, 'message: <code>findLongestWord("What is the average airspeed velocity of an unladen swallow")</code> should return 8.');
  });
  it('findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.', () => {
    assert(findLongestWord("What if we try a super-long word such as otorhinolaryngology") === 19, 'message: <code>findLongestWord("What if we try a super-long word such as otorhinolaryngology")</code> should return 19.');
  });
});
