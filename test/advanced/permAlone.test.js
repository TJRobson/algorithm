import { assert } from 'chai';
import permAlone from '../../src/advanced/permAlone.js';

describe('No repeats please', () => {
  it('permAlone("aab") should return a number.', () => {
    assert.isNumber(permAlone('aab'), 'message: <code>permAlone("aab")</code> should return a number.');
  });
  it('permAlone("aab") should return 2.', () => {
    assert.strictEqual(permAlone('aab'), 2, 'message: <code>permAlone("aab")</code> should return 2.');
  });
  it('permAlone("aaa") should return 0.', () => {
    assert.strictEqual(permAlone('aaa'), 0, 'message: <code>permAlone("aaa")</code> should return 0.');
  });
  it('permAlone("aabb") should return 8.', () => {
    assert.strictEqual(permAlone('aabb'), 8, 'message: <code>permAlone("aabb")</code> should return 8.');
  });
  it('permAlone("abcdefa") should return 3600.', () => {
    assert.strictEqual(permAlone('abcdefa'), 3600, 'message: <code>permAlone("abcdefa")</code> should return 3600.');
  });
  it('permAlone("abfdefa") should return 2640.', () => {
    assert.strictEqual(permAlone('abfdefa'), 2640, 'message: <code>permAlone("abfdefa")</code> should return 2640.');
  });
  it('permAlone("zzzzzzzz") should return 0.', () => {
    assert.strictEqual(permAlone('zzzzzzzz'), 0, 'message: <code>permAlone("zzzzzzzz")</code> should return 0.');
  });
  it('permAlone("a") should return 1.', () => {
    assert.strictEqual(permAlone('a'), 1, 'message: <code>permAlone("a")</code> should return 1.');
  });
  it('permAlone("aaab") should return 0.', () => {
    assert.strictEqual(permAlone('aaab'), 0, 'message: <code>permAlone("aaab")</code> should return 0.');
  });
  it('permAlone("aaabb") should return 12.', () => {
    assert.strictEqual(permAlone('aaabb'), 12, 'message: <code>permAlone("aaabb")</code> should return 12.');
  });
});
