var assert = require('chai').assert;
var diffArray = require('../src/diffTwoArrays')

describe('diffTwoArrays', function() {

  it('is a function', function() {
    assert.typeOf(diffArray, 'function');
  });

  it('should return an array', function() {
    assert.isTrue(Array.isArray(diffArray()))
  });


});
