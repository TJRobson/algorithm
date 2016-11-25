import { assert } from 'chai';
import frankenSplice from '../../src/basic/frankenSplice.js';

describe('Slice and Splice', () => {
  it('frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].', () => {
    assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5], 'message: <code>frankenSplice([1, 2, 3], [4, 5], 1)</code> should return <code>[4, 1, 2, 3, 5]</code>.');
  });
  it('frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].', () => {
    assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ['a', 1, 2, 'b'], 'message: <code>frankenSplice([1, 2], ["a", "b"], 1)</code> should return <code>["a", 1, 2, "b"]</code>.');
  });
  it('frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].', () => {
    assert.deepEqual(frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2), ['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes'], 'message: <code>frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)</code> should return <code>["head", "shoulders", "claw", "tentacle", "knees", "toes"]</code>.');
  });
  it('All elements from the first array should be added to the second array in their original order.', () => {
    assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4], 'message: All elements from the first array should be added to the second array in their original order.');
  });
  it('The first array should remain the same after the function runs.', () => {
    assert(testArr1[0] === 1 && testArr1[1] === 2, 'message: The first array should remain the same after the function runs.');
  });
  it('The second array should remain the same after the function runs.', () => {
    assert(testArr2[0] === 'a' && testArr2[1] === 'b', 'message: The second array should remain the same after the function runs.');
  });
});
