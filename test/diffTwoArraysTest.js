var assert = require('chai').assert;
var diffArray = require('../src/diffTwoArrays')

describe('diffTwoArrays', function() {

  it('is a function', function() {
    assert.typeOf(diffArray, 'function');
  });

  it('should return an array', function() {
    assert.isTrue(Array.isArray(diffArray()))
  });

  it('should return diffs', function() {

    var arr1 = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
      arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"],
      result = diffArray(arr1, arr2),
      expected = ["pink wool"];

    assert.equal(expected, result);  

  })

});
