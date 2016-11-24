import { assert } from 'chai';
import titleCase from '../../src/basic/titleCase.js';

describe('Title Case a Sentence', () => {
  it('titleCase("I&#39;m a little tea pot") should return a string.', () => {
    assert(typeof titleCase("I'm a little tea pot") === "string", 'message: <code>titleCase("I&#39;m a little tea pot")</code> should return a string.');
  });
  it('titleCase("I&#39;m a little tea pot") should return "I&#39;m A Little Tea Pot".', () => {
    assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot", 'message: <code>titleCase("I&#39;m a little tea pot")</code> should return "I&#39;m A Little Tea Pot".');
  });
  it('titleCase("sHoRt AnD sToUt") should return "Short And Stout".', () => {
    assert(titleCase("sHoRt AnD sToUt") === "Short And Stout", 'message: <code>titleCase("sHoRt AnD sToUt")</code> should return "Short And Stout".');
  });
  it('titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".', () => {
    assert(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") === "Here Is My Handle Here Is My Spout", 'message: <code>titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")</code> should return "Here Is My Handle Here Is My Spout".');
  });
});
