import { assert } from 'chai';
import addTogether from '../src/addTogether.js';

describe('Arguments Optional', () => {
  it('addTogether(2, 3) should return 5.', () => {
    assert.deepEqual(addTogether(2, 3), 5, 'message: <code>addTogether(2, 3)</code> should return 5.');
  });
  it('addTogether(2)(3) should return 5.', () => {
    assert.deepEqual(addTogether(2)(3), 5, 'message: <code>addTogether(2)(3)</code> should return 5.');
  });
  it('addTogether("http://bit.ly/IqT6zt") should return undefined.', () => {
    assert.isUndefined(addTogether("http://bit.ly/IqT6zt"), 'message: <code>addTogether("http://bit.ly/IqT6zt")</code> should return undefined.');
  });
  it('addTogether(2, "3") should return undefined.', () => {
    assert.isUndefined(addTogether(2, "3"), 'message: <code>addTogether(2, "3")</code> should return undefined.');
  });
  it('addTogether(2)([3]) should return undefined.', () => {
    assert.isUndefined(addTogether(2)([3]), 'message: <code>addTogether(2)([3])</code> should return undefined.');
  });
});
