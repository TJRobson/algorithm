import { expect } from 'chai';
import convertToRoman from '../src/convertToRoman';

describe('convertToRoman function', () => {
  it('is a function', () => {
    expect(convertToRoman).to.be.a('function');
  });

  it('should return a string', () => {
    expect(convertToRoman(3)).to.be.an('string');
  });

  it('convertToRoman(2) should return "II".', () => {
    expect(convertToRoman(2)).to.equal('II');
  });

  it('convertToRoman(3) should return "III".', () => {
    expect(convertToRoman(3)).to.equal('III');
  });

  it('convertToRoman(16) should return "XVI".', () => {
    expect(convertToRoman(16)).to.equal('XVI');
  });

  it('convertToRoman(649) should return "DCXLIX"', () => {
    expect(convertToRoman(649)).to.equal('DCXLIX');
  });

  it('convertToRoman(3999) should return "MMMCMXCIX"', () => {
    expect(convertToRoman(3999)).to.equal('MMMCMXCIX');
  });
});
