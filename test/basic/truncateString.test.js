import { assert } from 'chai';
import truncateString from '../../src/basic/truncateString.js';

describe('Truncate a string', () => {
  it('truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".', () => {
    assert(truncateString("A-tisket a-tasket A green and yellow basket", 11) === "A-tisket...", 'message: <code>truncateString("A-tisket a-tasket A green and yellow basket", 11)</code> should return "A-tisket...".');
  });
  it('truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".', () => {
    assert(truncateString("Peter Piper picked a peck of pickled peppers", 14) === "Peter Piper...", 'message: <code>truncateString("Peter Piper picked a peck of pickled peppers", 14)</code> should return "Peter Piper...".');
  });
  it('truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".', () => {
    assert(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) === "A-tisket a-tasket A green and yellow basket", 'message: <code>truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)</code> should return "A-tisket a-tasket A green and yellow basket".');
  });
  it('truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".', () => {
    assert(truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2) === 'A-tisket a-tasket A green and yellow basket', 'message: <code>truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)</code> should return "A-tisket a-tasket A green and yellow basket".');
  });
  it('truncateString("A-", 1) should return "A...".', () => {
    assert(truncateString("A-", 1) === "A...", 'message: <code>truncateString("A-", 1)</code> should return "A...".');
  });
  it('truncateString("Absolutely Longer", 2) should return "Ab...".', () => {
    assert(truncateString("Absolutely Longer", 2) === "Ab...", 'message: <code>truncateString("Absolutely Longer", 2)</code> should return "Ab...".');
  });
});
