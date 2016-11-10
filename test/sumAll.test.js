import { assert } from 'chai';
import sumAll from '../src/sumAll';
describe('Sum All Numbers in a Range', () => {
  it('sumAll([1, 4]) should return a number.', () => {
    assert(typeof sumAll([1, 4]) === 'number', 'message: <code>sumAll([1, 4])</code> should return a number.');
  });
});
