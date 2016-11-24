import { assert } from 'chai';
import myReplace from '../src/myReplace.js';

describe('Search and Replace', () => {
  it('myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".', () => {
    assert.deepEqual(myReplace("Let us go to the store", "store", "mall"), "Let us go to the mall", 'message: <code>myReplace("Let us go to the store", "store", "mall")</code> should return "Let us go to the mall".');
  });
  it('myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".', () => {
    assert.deepEqual(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch", 'message: <code>myReplace("He is Sleeping on the couch", "Sleeping", "sitting")</code> should return "He is Sitting on the couch".');
  });
  it('myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".', () => {
    assert.deepEqual(myReplace("This has a spellngi error", "spellngi", "spelling"), "This has a spelling error", 'message: <code>myReplace("This has a spellngi error", "spellngi", "spelling")</code> should return "This has a spelling error".');
  });
  it('myReplace("His name is Tom", "Tom", "john") should return "His name is John".', () => {
    assert.deepEqual(myReplace("His name is Tom", "Tom", "john"), "His name is John", 'message: <code>myReplace("His name is Tom", "Tom", "john")</code> should return "His name is John".');
  });
  it('myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".', () => {
    assert.deepEqual(myReplace("Let us get back to more Coding", "Coding", "algorithms"), "Let us get back to more Algorithms", 'message: <code>myReplace("Let us get back to more Coding", "Coding", "algorithms")</code> should return "Let us get back to more Algorithms".');
  });
});
