import { assert } from 'chai';
import spinalCase from '../src/spinalCase.js';

describe('Spinal Tap Case', () => {
  it('spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".', () => {
    assert.deepEqual(spinalCase("This Is Spinal Tap"), "this-is-spinal-tap", 'message: <code>spinalCase("This Is Spinal Tap")</code> should return <code>"this-is-spinal-tap"</code>.');
  });
  it('spinalCase("thisIsSpinal<wbr>Tap") should return "this-is-spinal-tap".', () => {
    assert.strictEqual(spinalCase('thisIsSpinalTap'), "this-is-spinal-tap", 'message: <code>spinalCase("thisIsSpinal<wbr>Tap")</code> should return <code>"this-is-spinal-tap"</code>.');
  });
  it('spinalCase("The_Andy_<wbr>Griffith_Show") should return "the-andy-griffith-show".', () => {
    assert.strictEqual(spinalCase("The_Andy_Griffith_Show"), "the-andy-griffith-show", 'message: <code>spinalCase("The_Andy_<wbr>Griffith_Show")</code> should return <code>"the-andy-griffith-show"</code>.');
  });
  it('spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".', () => {
    assert.strictEqual(spinalCase("Teletubbies say Eh-oh"), "teletubbies-say-eh-oh", 'message: <code>spinalCase("Teletubbies say Eh-oh")</code> should return <code>"teletubbies-say-eh-oh"</code>.');
  });
  it('spinalCase("AllThe-small Things") should return "all-the-small-things".', () => {
    assert.strictEqual(spinalCase("AllThe-small Things"), "all-the-small-things", 'message: <code>spinalCase("AllThe-small Things")</code> should return <code>"all-the-small-things"</code>.');
  });
});
