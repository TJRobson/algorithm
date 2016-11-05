import { expect } from 'chai';
import diffArray from '../src/diffTwoArrays';

describe('diffTwoArrays', () => {
  it('is a function', () => {
    expect(diffArray).to.be.a('function');
  });

  it('should return an array', () => {
    expect(diffArray()).to.be.an('array');
  });

  it('return diffs from only one array : string', () => {
    const arr1 = ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'];
    const arr2 = ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'];
    const result = diffArray(arr1, arr2);
    const expected = ['pink wool'];

    expect(result).to.deep.equal(expected);
  });

  it('return diffs from both arrays : string', () => {
    const arr1 = ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'];
    const arr2 = ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'];
    const result = diffArray(arr1, arr2);
    const expected = ['diorite', 'pink wool'];

    expect(result).to.deep.equal(expected);
  });

  it('return [] when there is no diffs : string', () => {
    const arr1 = ['andesite', 'grass', 'dirt', 'dead shrub'];
    const arr2 = ['andesite', 'grass', 'dirt', 'dead shrub'];
    const result = diffArray(arr1, arr2);
    const expected = [];

    expect(result).to.deep.equal(expected);
  });

  it('return diffs from only one array : number', () => {
    const arr1 = [1, 2, 3, 5];
    const arr2 = [1, 2, 3, 4, 5];
    const result = diffArray(arr1, arr2);
    const expected = [4];

    expect(result).to.deep.equal(expected);
  });

  it('return diffs from both arrays : number&number', () => {
    const arr1 = [1, 'calf', 3, 'piglet'];
    const arr2 = [1, 'calf', 3, 4];
    const result = diffArray(arr1, arr2);
    const expected = ['piglet', 4];

    expect(result).to.deep.equal(expected);
  });

  it('return diffs: one empty array', () => {
    const arr1 = [];
    const arr2 = ['snuffleupagus', 'cookie monster', 'elmo'];
    const result = diffArray(arr1, arr2);
    const expected = ['snuffleupagus', 'cookie monster', 'elmo'];

    expect(result).to.deep.equal(expected);
  });

  it('return diffs from two totally different arrays', () => {
    const arr1 = [1, 'calf', 3, 'piglet'];
    const arr2 = [7, 'filly'];
    const result = diffArray(arr1, arr2);
    const expected = [1, 'calf', 3, 'piglet', 7, 'filly'];

    expect(result).to.deep.equal(expected);
  });
});
