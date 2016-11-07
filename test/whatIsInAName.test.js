import { expect } from 'chai';
import whatIsInAName from '../src/whatIsInAName';

describe('convertToRoman function', () => {
  it('is a function', () => {
    expect(whatIsInAName).to.be.a('function');
  });

  it('should return [{ first: "Tybalt", last: "Capulet" }]', () => {
    const actual = whatIsInAName([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });

    expect(actual).to.be.deep.equal([{ first: 'Tybalt', last: 'Capulet' }]);
  });

  it('should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]', () => {
    const actual = whatIsInAName([{ a: 1 }, { a: 1 }, { a: 1, b: 2 }], { a: 1 });

    expect(actual).to.be.deep.equal([{ a: 1 }, { a: 1 }, { a: 1, b: 2 }]);
  });

  it('should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]', () => {
    const actual = whatIsInAName([{ a: 1, b: 2 }, { a: 1 }, { a: 1, b: 2, c: 2 }], { a: 1, b: 2 });

    expect(actual).to.be.deep.equal([{ a: 1, b: 2 }, { a: 1, b: 2, c: 2 }]);
  });

  it('should return [{ "a": 1, "b": 2, "c": 2 }]', () => {
    const actual = whatIsInAName([{ a: 1, b: 2 }, { a: 1 }, { a: 1, b: 2, c: 2 }], { a: 1, c: 2 });

    expect(actual).to.be.deep.equal([{ a: 1, b: 2 }, { a: 1, b: 2, c: 2 }]);
  });
});
