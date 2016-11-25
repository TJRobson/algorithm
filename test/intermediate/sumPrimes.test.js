import { assert } from 'chai';
import sumPrimes from '../../src/intermediate/sumPrimes.js';

describe('Sum All Primes', () => {
  it('sumPrimes(10) should return a number.', () => {
    assert.deepEqual(typeof sumPrimes(10), 'number', 'message: <code>sumPrimes(10)</code> should return a number.');
  });
  it('sumPrimes(10) should return 17.', () => {
    assert.deepEqual(sumPrimes(10), 17, 'message: <code>sumPrimes(10)</code> should return 17.');
  });
  it('sumPrimes(977) should return 73156.', () => {
    assert.deepEqual(sumPrimes(977), 73156, 'message: <code>sumPrimes(977)</code> should return 73156.');
  });
});
