import { assert } from 'chai';
import mutation from '../src/mutation.js';

describe('Mutations', () => {
  it('mutation(["hello", "hey"]) should return false.', () => {
    assert(mutation(["hello", "hey"]) === false, 'message: <code>mutation(["hello", "hey"])</code> should return false.');
  });
  it('mutation(["hello", "Hello"]) should return true.', () => {
    assert(mutation(["hello", "Hello"]) === true, 'message: <code>mutation(["hello", "Hello"])</code> should return true.');
  });
  it('mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.', () => {
    assert(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) === true, 'message: <code>mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])</code> should return true.');
  });
  it('mutation(["Mary", "Army"]) should return true.', () => {
    assert(mutation(["Mary", "Army"]) === true, 'message: <code>mutation(["Mary", "Army"])</code> should return true.');
  });
  it('mutation(["Mary", "Aarmy"]) should return true.', () => {
    assert(mutation(["Mary", "Aarmy"]) === true, 'message: <code>mutation(["Mary", "Aarmy"])</code> should return true.');
  });
  it('mutation(["Alien", "line"]) should return true.', () => {
    assert(mutation(["Alien", "line"]) === true, 'message: <code>mutation(["Alien", "line"])</code> should return true.');
  });
  it('mutation(["floor", "for"]) should return true.', () => {
    assert(mutation(["floor", "for"]) === true, 'message: <code>mutation(["floor", "for"])</code> should return true.');
  });
  it('mutation(["hello", "neo"]) should return false.', () => {
    assert(mutation(["hello", "neo"]) === false, 'message: <code>mutation(["hello", "neo"])</code> should return false.');
  });
  it('mutation(["voodoo", "no"]) should return false.', () => {
    assert(mutation(["voodoo", "no"]) === false, 'message: <code>mutation(["voodoo", "no"])</code> should return false.');
  });
});
