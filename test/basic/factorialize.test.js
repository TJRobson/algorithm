import { assert } from 'chai';
import factorialize from '../../src/basic/factorialize.js';

describe('Factorialize a Number', () => {
  it('factorialize(5) should return a number.', () => {
    assert(typeof factorialize(5) === 'number', 'message: <code>factorialize(5)</code> should return a number.');
  });
  it('factorialize(5) should return 120.', () => {
    assert(factorialize(5) === 120, 'message: <code>factorialize(5)</code> should return 120.');
  });
  it('factorialize(10) should return 3628800.', () => {
    assert(factorialize(10) === 3628800, 'message: <code>factorialize(10)</code> should return 3628800.');
  });
  it('factorialize(20) should return 2432902008176640000.', () => {
    assert(factorialize(20) === 2432902008176640000, 'message: <code>factorialize(20)</code> should return 2432902008176640000.');
  });
  it('factorialize(0) should return 1.', () => {
    assert(factorialize(0) === 1, 'message: <code>factorialize(0)</code> should return 1.');
  });
});
