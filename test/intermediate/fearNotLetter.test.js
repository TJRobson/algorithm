import { assert } from 'chai';
import fearNotLetter from '../src/fearNotLetter.js';

describe('Missing letters', () => {
  it('fearNotLetter("abce") should return "d".', () => {
    assert.deepEqual(fearNotLetter("abce"), "d", 'message: <code>fearNotLetter("abce")</code> should return "d".');
  });
  it('fearNotLetter("abcdefghjklmno") should return "i".', () => {
    assert.deepEqual(fearNotLetter("abcdefghjklmno"), "i", 'message: <code>fearNotLetter("abcdefghjklmno")</code> should return "i".');
  });
  it('fearNotLetter("bcd") should return undefined.', () => {
    assert.isUndefined(fearNotLetter("bcd"), 'message: <code>fearNotLetter("bcd")</code> should return undefined.');
  });
  it('fearNotLetter("yz") should return undefined.', () => {
    assert.isUndefined(fearNotLetter("yz"), 'message: <code>fearNotLetter("yz")</code> should return undefined.');
  });
});
