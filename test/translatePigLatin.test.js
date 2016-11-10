import { assert } from 'chai';
import translatePigLatin from '../src/translatePigLatin';
describe('Pig Latin', () => {
  it('translatePigLatin("california") should return "aliforniacay".', () => {
    assert.deepEqual(translatePigLatin("california"), "aliforniacay", 'message: <code>translatePigLatin("california")</code> should return "aliforniacay".');
  });
  it('translatePigLatin("paragraphs") should return "aragraphspay".', () => {
    assert.deepEqual(translatePigLatin("paragraphs"), "aragraphspay", 'message: <code>translatePigLatin("paragraphs")</code> should return "aragraphspay".');
  });
  it('translatePigLatin("glove") should return "oveglay".', () => {
    assert.deepEqual(translatePigLatin("glove"), "oveglay", 'message: <code>translatePigLatin("glove")</code> should return "oveglay".');
  });
  it('translatePigLatin("algorithm") should return "algorithmway".', () => {
    assert.deepEqual(translatePigLatin("algorithm"), "algorithmway", 'message: <code>translatePigLatin("algorithm")</code> should return "algorithmway".');
  });
  it('translatePigLatin("eight") should return "eightway".', () => {
    assert.deepEqual(translatePigLatin("eight"), "eightway", 'message: <code>translatePigLatin("eight")</code> should return "eightway".');
  });
});
