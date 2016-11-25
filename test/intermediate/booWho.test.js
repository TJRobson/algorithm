import { assert } from 'chai';
import booWho from '../../src/intermediate/booWho.js';

describe('Boo who', () => {
  it('booWho(true) should return true.', () => {
    assert.strictEqual(booWho(true), true, 'message: <code>booWho(true)</code> should return true.');
  });
  it('booWho(false) should return true.', () => {
    assert.strictEqual(booWho(false), true, 'message: <code>booWho(false)</code> should return true.');
  });
  it('booWho([1, 2, 3]) should return false.', () => {
    assert.strictEqual(booWho([1, 2, 3]), false, 'message: <code>booWho([1, 2, 3])</code> should return false.');
  });
  it('booWho([].slice) should return false.', () => {
    assert.strictEqual(booWho([].slice), false, 'message: <code>booWho([].slice)</code> should return false.');
  });
  it('booWho({ "a": 1 }) should return false.', () => {
    assert.strictEqual(booWho({ "a": 1 }), false, 'message: <code>booWho({ "a": 1 })</code> should return false.');
  });
  it('booWho(1) should return false.', () => {
    assert.strictEqual(booWho(1), false, 'message: <code>booWho(1)</code> should return false.');
  });
  it('booWho(NaN) should return false.', () => {
    assert.strictEqual(booWho(NaN), false, 'message: <code>booWho(NaN)</code> should return false.');
  });
  it('booWho("a") should return false.', () => {
    assert.strictEqual(booWho("a"), false, 'message: <code>booWho("a")</code> should return false.');
  });
  it('booWho("true") should return false.', () => {
    assert.strictEqual(booWho("true"), false, 'message: <code>booWho("true")</code> should return false.');
  });
  it('booWho("false") should return false.', () => {
    assert.strictEqual(booWho("false"), false, 'message: <code>booWho("false")</code> should return false.');
  });
});
