import { assert } from 'chai';
import destroyer from '../src/destroyer.js';

describe('Seek and Destroy', () => {
  it('destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].', () => {
    assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1], 'message: <code>destroyer([1, 2, 3, 1, 2, 3], 2, 3)</code> should return <code>[1, 1]</code>.');
  });
  it('destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].', () => {
    assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1], 'message: <code>destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)</code> should return <code>[1, 5, 1]</code>.');
  });
  it('destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].', () => {
    assert.deepEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1], 'message: <code>destroyer([3, 5, 1, 2, 2], 2, 3, 5)</code> should return <code>[1]</code>.');
  });
  it('destroyer([2, 3, 2, 3], 2, 3) should return [].', () => {
    assert.deepEqual(destroyer([2, 3, 2, 3], 2, 3), [], 'message: <code>destroyer([2, 3, 2, 3], 2, 3)</code> should return <code>[]</code>.');
  });
  it('destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].', () => {
    assert.deepEqual(destroyer(["tree", "hamburger", 53], "tree", 53), ["hamburger"], 'message: <code>destroyer(["tree", "hamburger", 53], "tree", 53)</code> should return <code>["hamburger"]</code>.');
  });
  it('destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].', () => {
    assert.deepEqual(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"), [12,92,65], 'message: <code>destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")</code> should return <code>[12,92,65]</code>.');
  });
});
