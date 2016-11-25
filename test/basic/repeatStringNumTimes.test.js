import { assert } from 'chai';
import repeatStringNumTimes from '../../src/basic/repeatStringNumTimes.js';

describe('Repeat a string repeat a string', () => {
  it('repeatStringNumTimes("*", 3) should return "***".', () => {
    assert(repeatStringNumTimes("*", 3) === "***", 'message: <code>repeatStringNumTimes("*", 3)</code> should return <code>"***"</code>.');
  });
  it('repeatStringNumTimes("abc", 3) should return "abcabcabc".', () => {
    assert(repeatStringNumTimes("abc", 3) === "abcabcabc", 'message: <code>repeatStringNumTimes("abc", 3)</code> should return <code>"abcabcabc"</code>.');
  });
  it('repeatStringNumTimes("abc", 4) should return "abcabcabcabc".', () => {
    assert(repeatStringNumTimes("abc", 4) === "abcabcabcabc", 'message: <code>repeatStringNumTimes("abc", 4)</code> should return <code>"abcabcabcabc"</code>.');
  });
  it('repeatStringNumTimes("abc", 1) should return "abc".', () => {
    assert(repeatStringNumTimes("abc", 1) === "abc", 'message: <code>repeatStringNumTimes("abc", 1)</code> should return <code>"abc"</code>.');
  });
  it('repeatStringNumTimes("*", 8) should return "********".', () => {
    assert(repeatStringNumTimes("*", 8) === "********", 'message: <code>repeatStringNumTimes("*", 8)</code> should return <code>"********"</code>.');
  });
  it('repeatStringNumTimes("abc", -2) should return "".', () => {
    assert(repeatStringNumTimes("abc", -2) === "", 'message: <code>repeatStringNumTimes("abc", -2)</code> should return <code>""</code>.');
  });
});
