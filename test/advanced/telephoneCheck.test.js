import { assert } from 'chai';
import telephoneCheck from '../src/telephoneCheck.js';

describe('Validate US Telephone Numbers', () => {
  it('telephoneCheck("555-555-5555") should return a boolean.', () => {
    assert(typeof telephoneCheck("555-555-5555") === "boolean", 'message: <code>telephoneCheck("555-555-5555")</code> should return a boolean.');
  });
  it('telephoneCheck("1 555-555-5555") should return true.', () => {
    assert(telephoneCheck("1 555-555-5555") === true, 'message: <code>telephoneCheck("1 555-555-5555")</code> should return true.');
  });
  it('telephoneCheck("1 (555) 555-5555") should return true.', () => {
    assert(telephoneCheck("1 (555) 555-5555") === true, 'message: <code>telephoneCheck("1 (555) 555-5555")</code> should return true.');
  });
  it('telephoneCheck("5555555555") should return true.', () => {
    assert(telephoneCheck("5555555555") === true, 'message: <code>telephoneCheck("5555555555")</code> should return true.');
  });
  it('telephoneCheck("555-555-5555") should return true.', () => {
    assert(telephoneCheck("555-555-5555") === true, 'message: <code>telephoneCheck("555-555-5555")</code> should return true.');
  });
  it('telephoneCheck("(555)555-5555") should return true.', () => {
    assert(telephoneCheck("(555)555-5555") === true, 'message: <code>telephoneCheck("(555)555-5555")</code> should return true.');
  });
  it('telephoneCheck("1(555)555-5555") should return true.', () => {
    assert(telephoneCheck("1(555)555-5555") === true, 'message: <code>telephoneCheck("1(555)555-5555")</code> should return true.');
  });
  it('telephoneCheck("555-5555") should return false.', () => {
    assert(telephoneCheck("555-5555") === false, 'message: <code>telephoneCheck("555-5555")</code> should return false.');
  });
  it('telephoneCheck("5555555") should return false.', () => {
    assert(telephoneCheck("5555555") === false, 'message: <code>telephoneCheck("5555555")</code> should return false.');
  });
  it('telephoneCheck("1 555)555-5555") should return false.', () => {
    assert(telephoneCheck("1 555)555-5555") === false, 'message: <code>telephoneCheck("1 555)555-5555")</code> should return false.');
  });
  it('telephoneCheck("1 555 555 5555") should return true.', () => {
    assert(telephoneCheck("1 555 555 5555") === true, 'message: <code>telephoneCheck("1 555 555 5555")</code> should return true.');
  });
  it('telephoneCheck("1 456 789 4444") should return true.', () => {
    assert(telephoneCheck("1 456 789 4444") === true, 'message: <code>telephoneCheck("1 456 789 4444")</code> should return true.');
  });
  it('telephoneCheck("123**&!!asdf#") should return false.', () => {
    assert(telephoneCheck("123**&!!asdf#") === false, 'message: <code>telephoneCheck("123**&!!asdf#")</code> should return false.');
  });
  it('telephoneCheck("55555555") should return false.', () => {
    assert(telephoneCheck("55555555") === false, 'message: <code>telephoneCheck("55555555")</code> should return false.');
  });
  it('telephoneCheck("(6505552368)") should return false', () => {
    assert(telephoneCheck("(6505552368)") === false, 'message: <code>telephoneCheck("(6505552368)")</code> should return false');
  });
  it('telephoneCheck("2 (757) 622-7382") should return false.', () => {
    assert(telephoneCheck("2 (757) 622-7382") === false, 'message: <code>telephoneCheck("2 (757) 622-7382")</code> should return false.');
  });
  it('telephoneCheck("0 (757) 622-7382") should return false.', () => {
    assert(telephoneCheck("0 (757) 622-7382") === false, 'message: <code>telephoneCheck("0 (757) 622-7382")</code> should return false.');
  });
  it('telephoneCheck("-1 (757) 622-7382") should return false', () => {
    assert(telephoneCheck("-1 (757) 622-7382") === false, 'message: <code>telephoneCheck("-1 (757) 622-7382")</code> should return false');
  });
  it('telephoneCheck("2 757 622-7382") should return false.', () => {
    assert(telephoneCheck("2 757 622-7382") === false, 'message: <code>telephoneCheck("2 757 622-7382")</code> should return false.');
  });
  it('telephoneCheck("10 (757) 622-7382") should return false.', () => {
    assert(telephoneCheck("10 (757) 622-7382") === false, 'message: <code>telephoneCheck("10 (757) 622-7382")</code> should return false.');
  });
  it('telephoneCheck("27576227382") should return false.', () => {
    assert(telephoneCheck("27576227382") === false, 'message: <code>telephoneCheck("27576227382")</code> should return false.');
  });
  it('telephoneCheck("(275)76227382") should return false.', () => {
    assert(telephoneCheck("(275)76227382") === false, 'message: <code>telephoneCheck("(275)76227382")</code> should return false.');
  });
  it('telephoneCheck("2(757)6227382") should return false.', () => {
    assert(telephoneCheck("2(757)6227382") === false, 'message: <code>telephoneCheck("2(757)6227382")</code> should return false.');
  });
  it('telephoneCheck("2(757)622-7382") should return false.', () => {
    assert(telephoneCheck("2(757)622-7382") === false, 'message: <code>telephoneCheck("2(757)622-7382")</code> should return false.');
  });
  it('telephoneCheck("555)-555-5555") should return false.', () => {
    assert(telephoneCheck("555)-555-5555") === false, 'message: <code>telephoneCheck("555)-555-5555")</code> should return false.');
  });
  it('telephoneCheck("(555-555-5555") should return false.', () => {
    assert(telephoneCheck("(555-555-5555") === false, 'message: <code>telephoneCheck("(555-555-5555")</code> should return false.');
  });
  it('telephoneCheck("(555)5(55?)-5555") should return false.', () => {
    assert(telephoneCheck("(555)5(55?)-5555") === false, 'message: <code>telephoneCheck("(555)5(55?)-5555")</code> should return false.');
  });
});
