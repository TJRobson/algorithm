import { assert } from 'chai';
import findElement from '../src/findElement.js';

describe('Finders Keepers', () => {
  it('findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.', () => {
    assert.strictEqual(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }), 8, 'message: <code>findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })</code> should return 8.');
  });
  it('findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.', () => {
    assert.strictEqual(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }), undefined, 'message: <code>findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })</code> should return undefined.');
  });
});
