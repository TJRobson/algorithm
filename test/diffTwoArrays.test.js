import { expect } from 'chai';
import diffArray from '../src/diffTwoArrays';

describe('diffTwoArrays', () => {
  it('is a function', () => {
    expect(diffArray).to.be.a('function');
  });

  it('should return an array', () => {
    expect(diffArray()).to.be.an('array');
  });

  it('return diffs from only one array', () => {
    const arr1 = ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'];
    const arr2 = ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'];
    const result = diffArray(arr1, arr2);
    const expected = ['pink wool'];

    expect(result).to.equal(expected);
  });
});
