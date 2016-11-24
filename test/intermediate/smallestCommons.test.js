import { assert } from 'chai';
import smallestCommons from '../src/smallestCommons.js';

describe('Smallest Common Multiple', () => {
  it('smallestCommons([1, 5]) should return a number.', () => {
    assert.deepEqual(typeof smallestCommons([1, 5]), 'number', 'message: <code>smallestCommons([1, 5])</code> should return a number.');
  });
  it('smallestCommons([1, 5]) should return 60.', () => {
    assert.deepEqual(smallestCommons([1, 5]), 60, 'message: <code>smallestCommons([1, 5])</code> should return 60.');
  });
  it('smallestCommons([5, 1]) should return 60.', () => {
    assert.deepEqual(smallestCommons([5, 1]), 60, 'message: <code>smallestCommons([5, 1])</code> should return 60.');
  });
  it('smallestCommons([2, 10]) should return 2520.', () => {
    assert.deepEqual(smallestCommons([2, 10]), 2520, 'message: <code>smallestCommons([2, 10])</code> should return 2520.');
  });
  it('smallestCommons([1, 13]) should return 360360.', () => {
    assert.deepEqual(smallestCommons([1, 13]), 360360, 'message: <code>smallestCommons([1, 13])</code> should return 360360.');
  });
  it('smallestCommons([23, 18]) should return 6056820.', () => {
    assert.deepEqual(smallestCommons([23, 18]), 6056820, 'message: <code>smallestCommons([23, 18])</code> should return 6056820.');
  });
});
