import { assert } from 'chai';
import reverseString from '../../src/basic/reverseString.js';

describe('Reverse a String', () => {
  it('reverseString("hello") should return a string.', () => {
    assert(typeof reverseString("hello") === "string", 'message: <code>reverseString("hello")</code> should return a string.');
  });
  it('reverseString("hello") should become "olleh".', () => {
    assert(reverseString("hello") === "olleh", 'message: <code>reverseString("hello")</code> should become <code>"olleh"</code>.');
  });
  it('reverseString("Howdy") should become "ydwoH".', () => {
    assert(reverseString("Howdy") === "ydwoH", 'message: <code>reverseString("Howdy")</code> should become <code>"ydwoH"</code>.');
  });
  it('reverseString("Greetings from Earth") should return "htraE morf sgniteerG".', () => {
    assert(reverseString("Greetings from Earth") === "htraE morf sgniteerG", 'message: <code>reverseString("Greetings from Earth")</code> should return <code>"htraE morf sgniteerG"</code>.');
  });
});
