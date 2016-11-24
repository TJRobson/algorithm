import { assert } from 'chai';
import pairwise from '../../src/advanced/pairwise.js';

describe('Pairwise', () => {
  it('pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.', () => {
    assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11, 'message: <code>pairwise([1, 4, 2, 3, 0, 5], 7)</code> should return 11.');
  });
  it('pairwise([1, 3, 2, 4], 4) should return 1.', () => {
    assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1, 'message: <code>pairwise([1, 3, 2, 4], 4)</code> should return 1.');
  });
  it('pairwise([1, 1, 1], 2) should return 1.', () => {
    assert.deepEqual(pairwise([1, 1, 1], 2), 1, 'message: <code>pairwise([1, 1, 1], 2)</code> should return 1.');
  });
  it('pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.', () => {
    assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10, 'message: <code>pairwise([0, 0, 0, 0, 1, 1], 1)</code> should return 10.');
  });
  it('pairwise([], 100) should return 0.', () => {
    assert.deepEqual(pairwise([], 100), 0, 'message: <code>pairwise([], 100)</code> should return 0.');
  });
});
