import { assert } from 'chai';
import pairElement from '../src/pairElement';
describe('DNA Pairing', () => {
  it('pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].', () => {
    assert.deepEqual(pairElement("ATCGA"),[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]], 'message: <code>pairElement("ATCGA")</code> should return <code>[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]</code>.');
  });
  it('pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].', () => {
    assert.deepEqual(pairElement("TTGAG"),[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]], 'message: <code>pairElement("TTGAG")</code> should return <code>[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]</code>.');
  });
  it('pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].', () => {
    assert.deepEqual(pairElement("CTCTA"),[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]], 'message: <code>pairElement("CTCTA")</code> should return <code>[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]</code>.');
  });
});
