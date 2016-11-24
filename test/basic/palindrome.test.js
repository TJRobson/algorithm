import { assert } from 'chai';
import palindrome from '../src/palindrome.js';

describe('Check for Palindromes', () => {
  it('palindrome("eye") should return a boolean.', () => {
    assert(typeof palindrome("eye") === "boolean", 'message: <code>palindrome("eye")</code> should return a boolean.');
  });
  it('palindrome("eye") should return true.', () => {
    assert(palindrome("eye") === true, 'message: <code>palindrome("eye")</code> should return true.');
  });
  it('palindrome("_eye") should return true.', () => {
    assert(palindrome("_eye") === true, 'message: <code>palindrome("_eye")</code> should return true.');
  });
  it('palindrome("race car") should return true.', () => {
    assert(palindrome("race car") === true, 'message: <code>palindrome("race car")</code> should return true.');
  });
  it('palindrome("not a palindrome") should return false.', () => {
    assert(palindrome("not a palindrome") === false, 'message: <code>palindrome("not a palindrome")</code> should return false.');
  });
  it('palindrome("A man, a plan, a canal. Panama") should return true.', () => {
    assert(palindrome("A man, a plan, a canal. Panama") === true, 'message: <code>palindrome("A man, a plan, a canal. Panama")</code> should return true.');
  });
  it('palindrome("never odd or even") should return true.', () => {
    assert(palindrome("never odd or even") === true, 'message: <code>palindrome("never odd or even")</code> should return true.');
  });
  it('palindrome("nope") should return false.', () => {
    assert(palindrome("nope") === false, 'message: <code>palindrome("nope")</code> should return false.');
  });
  it('palindrome("almostomla") should return false.', () => {
    assert(palindrome("almostomla") === false, 'message: <code>palindrome("almostomla")</code> should return false.');
  });
  it('palindrome("My age is 0, 0 si ega ym.") should return true.', () => {
    assert(palindrome("My age is 0, 0 si ega ym.") === true, 'message: <code>palindrome("My age is 0, 0 si ega ym.")</code> should return true.');
  });
  it('palindrome("1 eye for of 1 eye.") should return false.', () => {
    assert(palindrome("1 eye for of 1 eye.") === false, 'message: <code>palindrome("1 eye for of 1 eye.")</code> should return false.');
  });
  it('palindrome("0_0 (: /-\ :) 0-0") should return true.', () => {
    assert(palindrome("0_0 (: /-\ :) 0-0") === true, 'message: <code>palindrome("0_0 (: /-\ :) 0-0")</code> should return true.');
  });
  it('palindrome("five|\_/|four") should return false.', () => {
    assert(palindrome("five|\_/|four") === false, 'message: <code>palindrome("five|\_/|four")</code> should return false.');
  });
});
