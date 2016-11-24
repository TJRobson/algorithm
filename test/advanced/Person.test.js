import { assert } from 'chai';
import Person from '../../src/advanced/Person.js';

describe('Make a Person', () => {
  it('Object.keys(bob).length should return 6.', () => {
    assert.deepEqual(Object.keys(bob).length, 6, 'message: <code>Object.keys(bob).length</code> should return 6.');
  });
  it('bob instanceof Person should return true.', () => {
    assert.deepEqual(bob instanceof Person, true, 'message: <code>bob instanceof Person</code> should return true.');
  });
  it('bob.firstName should return undefined.', () => {
    assert.deepEqual(bob.firstName, undefined, 'message: <code>bob.firstName</code> should return undefined.');
  });
  it('bob.lastName should return undefined.', () => {
    assert.deepEqual(bob.lastName, undefined, 'message: <code>bob.lastName</code> should return undefined.');
  });
  it('bob.getFirstName() should return "Bob".', () => {
    assert.deepEqual(bob.getFirstName(), 'Bob', 'message: <code>bob.getFirstName()</code> should return "Bob".');
  });
  it('bob.getLastName() should return "Ross".', () => {
    assert.deepEqual(bob.getLastName(), 'Ross', 'message: <code>bob.getLastName()</code> should return "Ross".');
  });
  it('bob.getFullName() should return "Bob Ross".', () => {
    assert.deepEqual(bob.getFullName(), 'Bob Ross', 'message: <code>bob.getFullName()</code> should return "Bob Ross".');
  });
  it('bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").', () => {
    assert.strictEqual((function () { bob.setFirstName("Haskell"); return bob.getFullName(); })(), 'Haskell Ross', 'message: <code>bob.getFullName()</code> should return "Haskell Ross" after <code>bob.setFirstName("Haskell")</code>.');
  });
  it('bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").', () => {
    assert.strictEqual((function () { var _bob=new Person('Haskell Ross'); _bob.setLastName("Curry"); return _bob.getFullName(); })(), 'Haskell Curry', 'message: <code>bob.getFullName()</code> should return "Haskell Curry" after <code>bob.setLastName("Curry")</code>.');
  });
  it('bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").', () => {
    assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getFullName(); })(), 'Haskell Curry', 'message: <code>bob.getFullName()</code> should return "Haskell Curry" after <code>bob.setFullName("Haskell Curry")</code>.');
  });
  it('bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").', () => {
    assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getFirstName(); })(), 'Haskell', 'message: <code>bob.getFirstName()</code> should return "Haskell" after <code>bob.setFullName("Haskell Curry")</code>.');
  });
  it('bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").', () => {
    assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getLastName(); })(), 'Curry', 'message: <code>bob.getLastName()</code> should return "Curry" after <code>bob.setFullName("Haskell Curry")</code>.');
  });
});
