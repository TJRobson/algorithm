import { assert } from 'chai';
import sym from '../src/sym.js';

describe('Symmetric Difference', () => {
  it('sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].', () => {
    assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5], 'message: <code>sym([1, 2, 3], [5, 2, 1, 4])</code> should return <code>[3, 4, 5]</code>.');
  });
  it('sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.', () => {
    assert.equal(sym([1, 2, 3], [5, 2, 1, 4]).length, 3, 'message: <code>sym([1, 2, 3], [5, 2, 1, 4])</code> should contain only three elements.');
  });
  it('sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5].', () => {
    assert.sameMembers(sym([1, 2, 3, 3], [5, 2, 1, 4]), [3, 4, 5], 'message: <code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> should return <code>[3, 4, 5]</code>.');
  });
  it('sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements.', () => {
    assert.equal(sym([1, 2, 3, 3], [5, 2, 1, 4]).length, 3, 'message: <code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> should contain only three elements.');
  });
  it('sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5].', () => {
    assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4, 5]), [3, 4, 5], 'message: <code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> should return <code>[3, 4, 5]</code>.');
  });
  it('sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements.', () => {
    assert.equal(sym([1, 2, 3], [5, 2, 1, 4, 5]).length, 3, 'message: <code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> should contain only three elements.');
  });
  it('sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]', () => {
    assert.sameMembers(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5], 'message: <code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> should return <code>[1, 4, 5]</code>');
  });
  it('sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.', () => {
    assert.equal(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length, 3, 'message: <code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> should contain only three elements.');
  });
  it('sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].', () => {
    assert.sameMembers(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5], 'message: <code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> should return <code>[1, 4, 5]</code>.');
  });
  it('sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.', () => {
    assert.equal(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length, 3, 'message: <code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> should contain only three elements.');
  });
  it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].', () => {
    assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]), [2, 3, 4, 6, 7], 'message: <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> should return <code>[2, 3, 4, 6, 7]</code>.');
  });
  it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.', () => {
    assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length, 5, 'message: <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> should contain only five elements.');
  });
  it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].', () => {
    assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]), [1, 2, 4, 5, 6, 7, 8, 9], 'message: <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> should return <code>[1, 2, 4, 5, 6, 7, 8, 9]</code>.');
  });
  it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.', () => {
    assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).length, 8, 'message: <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> should contain only eight elements.');
  });
});
