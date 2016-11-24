import { assert } from 'chai';
import dropElements from '../src/dropElements.js';

describe('Drop it', () => {
  it('dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].', () => {
    assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}), [3, 4], 'message: <code>dropElements([1, 2, 3, 4], function(n) {return n >= 3;})</code> should return <code>[3, 4]</code>.');
  });
  it('dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].', () => {
    assert.deepEqual(dropElements([0, 1, 0, 1], function(n) {return n === 1;}), [1, 0, 1], 'message: <code>dropElements([0, 1, 0, 1], function(n) {return n === 1;})</code> should return <code>[1, 0, 1]</code>.');
  });
  it('dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].', () => {
    assert.deepEqual(dropElements([1, 2, 3], function(n) {return n > 0;}), [1, 2, 3], 'message: <code>dropElements([1, 2, 3], function(n) {return n > 0;})</code> should return <code>[1, 2, 3]</code>.');
  });
  it('dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].', () => {
    assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n > 5;}), [], 'message: <code>dropElements([1, 2, 3, 4], function(n) {return n > 5;})</code> should return <code>[]</code>.');
  });
  it('dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].', () => {
    assert.deepEqual(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}), [7, 4], 'message: <code>dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})</code> should return <code>[7, 4]</code>.');
  });
  it('dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].', () => {
    assert.deepEqual(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}), [3, 9, 2], 'message: <code>dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})</code> should return <code>[3, 9, 2]</code>.');
  });
});
