import { assert } from 'chai';
import steamrollArray from '../../src/intermediate/steamrollArray.js';

describe('Steamroller', () => {
  it('steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].', () => {
    assert.deepEqual(steamrollArray([[["a"]], [["b"]]]), ["a", "b"], 'message: <code>steamrollArray([[["a"]], [["b"]]])</code> should return <code>["a", "b"]</code>.');
  });
  it('steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].', () => {
    assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4], 'message: <code>steamrollArray([1, [2], [3, [[4]]]])</code> should return <code>[1, 2, 3, 4]</code>.');
  });
  it('steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].', () => {
    assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4], 'message: <code>steamrollArray([1, [], [3, [[4]]]])</code> should return <code>[1, 3, 4]</code>.');
  });
  it('steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].', () => {
    assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4], 'message: <code>steamrollArray([1, {}, [3, [[4]]]])</code> should return <code>[1, {}, 3, 4]</code>.');
  });
});
