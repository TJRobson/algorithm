import { assert } from 'chai';
import convertToRoman from '../src/convertToRoman.js';

describe('Roman Numeral Converter', () => {
  it('convertToRoman(2) should return "II".', () => {
    assert.deepEqual(convertToRoman(2), "II", 'message: <code>convertToRoman(2)</code> should return "II".');
  });
  it('convertToRoman(3) should return "III".', () => {
    assert.deepEqual(convertToRoman(3), "III", 'message: <code>convertToRoman(3)</code> should return "III".');
  });
  it('convertToRoman(4) should return "IV".', () => {
    assert.deepEqual(convertToRoman(4), "IV", 'message: <code>convertToRoman(4)</code> should return "IV".');
  });
  it('convertToRoman(5) should return "V".', () => {
    assert.deepEqual(convertToRoman(5), "V", 'message: <code>convertToRoman(5)</code> should return "V".');
  });
  it('convertToRoman(9) should return "IX".', () => {
    assert.deepEqual(convertToRoman(9), "IX", 'message: <code>convertToRoman(9)</code> should return "IX".');
  });
  it('convertToRoman(12) should return "XII".', () => {
    assert.deepEqual(convertToRoman(12), "XII", 'message: <code>convertToRoman(12)</code> should return "XII".');
  });
  it('convertToRoman(16) should return "XVI".', () => {
    assert.deepEqual(convertToRoman(16), "XVI", 'message: <code>convertToRoman(16)</code> should return "XVI".');
  });
  it('convertToRoman(29) should return "XXIX".', () => {
    assert.deepEqual(convertToRoman(29), "XXIX", 'message: <code>convertToRoman(29)</code> should return "XXIX".');
  });
  it('convertToRoman(44) should return "XLIV".', () => {
    assert.deepEqual(convertToRoman(44), "XLIV", 'message: <code>convertToRoman(44)</code> should return "XLIV".');
  });
  it('convertToRoman(45) should return "XLV"', () => {
    assert.deepEqual(convertToRoman(45), "XLV", 'message: <code>convertToRoman(45)</code> should return "XLV"');
  });
  it('convertToRoman(68) should return "LXVIII"', () => {
    assert.deepEqual(convertToRoman(68), "LXVIII", 'message: <code>convertToRoman(68)</code> should return "LXVIII"');
  });
  it('convertToRoman(83) should return "LXXXIII"', () => {
    assert.deepEqual(convertToRoman(83), "LXXXIII", 'message: <code>convertToRoman(83)</code> should return "LXXXIII"');
  });
  it('convertToRoman(97) should return "XCVII"', () => {
    assert.deepEqual(convertToRoman(97), "XCVII", 'message: <code>convertToRoman(97)</code> should return "XCVII"');
  });
  it('convertToRoman(99) should return "XCIX"', () => {
    assert.deepEqual(convertToRoman(99), "XCIX", 'message: <code>convertToRoman(99)</code> should return "XCIX"');
  });
  it('convertToRoman(400) should return "CD"', () => {
    assert.deepEqual(convertToRoman(400), "CD", 'message: <code>convertToRoman(400)</code> should return "CD"');
  });
  it('convertToRoman(500) should return "D"', () => {
    assert.deepEqual(convertToRoman(500), "D", 'message: <code>convertToRoman(500)</code> should return "D"');
  });
  it('convertToRoman(501) should return "DI"', () => {
    assert.deepEqual(convertToRoman(501), "DI", 'message: <code>convertToRoman(501)</code> should return "DI"');
  });
  it('convertToRoman(649) should return "DCXLIX"', () => {
    assert.deepEqual(convertToRoman(649), "DCXLIX", 'message: <code>convertToRoman(649)</code> should return "DCXLIX"');
  });
  it('convertToRoman(798) should return "DCCXCVIII"', () => {
    assert.deepEqual(convertToRoman(798), "DCCXCVIII", 'message: <code>convertToRoman(798)</code> should return "DCCXCVIII"');
  });
  it('convertToRoman(891) should return "DCCCXCI"', () => {
    assert.deepEqual(convertToRoman(891), "DCCCXCI", 'message: <code>convertToRoman(891)</code> should return "DCCCXCI"');
  });
  it('convertToRoman(1000) should return "M"', () => {
    assert.deepEqual(convertToRoman(1000), "M", 'message: <code>convertToRoman(1000)</code> should return "M"');
  });
  it('convertToRoman(1004) should return "MIV"', () => {
    assert.deepEqual(convertToRoman(1004), "MIV", 'message: <code>convertToRoman(1004)</code> should return "MIV"');
  });
  it('convertToRoman(1006) should return "MVI"', () => {
    assert.deepEqual(convertToRoman(1006), "MVI", 'message: <code>convertToRoman(1006)</code> should return "MVI"');
  });
  it('convertToRoman(1023) should return "MXXIII"', () => {
    assert.deepEqual(convertToRoman(1023), "MXXIII", 'message: <code>convertToRoman(1023)</code> should return "MXXIII"');
  });
  it('convertToRoman(2014) should return "MMXIV"', () => {
    assert.deepEqual(convertToRoman(2014), "MMXIV", 'message: <code>convertToRoman(2014)</code> should return "MMXIV"');
  });
  it('convertToRoman(3999) should return "MMMCMXCIX"', () => {
    assert.deepEqual(convertToRoman(3999), "MMMCMXCIX", 'message: <code>convertToRoman(3999)</code> should return "MMMCMXCIX"');
  });
});
