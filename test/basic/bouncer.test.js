import { assert } from 'chai';
import bouncer from '../src/bouncer.js';

describe('Falsy Bouncer', () => {
  it('bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].', () => {
    assert.deepEqual(bouncer([7, "ate", "", false, 9]), [7, "ate", 9], 'message: <code>bouncer([7, "ate", "", false, 9])</code> should return <code>[7, "ate", 9]</code>.');
  });
  it('bouncer(["a", "b", "c"]) should return ["a", "b", "c"].', () => {
    assert.deepEqual(bouncer(["a", "b", "c"]), ["a", "b", "c"], 'message: <code>bouncer(["a", "b", "c"])</code> should return <code>["a", "b", "c"]</code>.');
  });
  it('bouncer([false, null, 0, NaN, undefined, ""]) should return [].', () => {
    assert.deepEqual(bouncer([false, null, 0, NaN, undefined, ""]), [], 'message: <code>bouncer([false, null, 0, NaN, undefined, ""])</code> should return <code>[]</code>.');
  });
  it('bouncer([1, null, NaN, 2, undefined]) should return [1, 2].', () => {
    assert.deepEqual(bouncer([1, null, NaN, 2, undefined]), [1, 2], 'message: <code>bouncer([1, null, NaN, 2, undefined])</code> should return <code>[1, 2]</code>.');
  });
});
