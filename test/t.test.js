import { assert } from 'chai';
// const assert = require('chai').assert;
describe('timing test', () => {
  it('<code>sumAll([1, 4])</code> should return a number.'.replace(/<[\/]?code>/g, ''), () => {
    assert(typeof Date.now === 'function', '<code>sumAll([1, 4])</code> should return a number.');
  });
});
