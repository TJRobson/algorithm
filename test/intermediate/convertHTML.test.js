import { assert } from 'chai';
import convertHTML from '../src/convertHTML.js';

describe('Convert HTML Entities', () => {
  it('convertHTML("Dolce & Gabbana") should return Dolce &&#8203;amp; Gabbana.', () => {
    assert.match(convertHTML("Dolce & Gabbana"), /Dolce &amp; Gabbana/, 'message: <code>convertHTML("Dolce & Gabbana")</code> should return <code>Dolce &&#8203;amp; Gabbana</code>.');
  });
  it('convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &&#8203;lt; Pizza &&#8203;lt; Tacos.', () => {
    assert.match(convertHTML("Hamburgers < Pizza < Tacos"), /Hamburgers &lt; Pizza &lt; Tacos/, 'message: <code>convertHTML("Hamburgers < Pizza < Tacos")</code> should return <code>Hamburgers &&#8203;lt; Pizza &&#8203;lt; Tacos</code>.');
  });
  it('convertHTML("Sixty > twelve") should return Sixty &&#8203;gt; twelve.', () => {
    assert.match(convertHTML("Sixty > twelve"), /Sixty &gt; twelve/, 'message: <code>convertHTML("Sixty > twelve")</code> should return <code>Sixty &&#8203;gt; twelve</code>.');
  });
  it('convertHTML(&apos;Stuff in "quotation marks"&apos;) should return Stuff in &&#8203;quot;quotation marks&&#8203;quot;.', () => {
    assert.match(convertHTML('Stuff in "quotation marks"'), /Stuff in &quot;quotation marks&quot;/, 'message: <code>convertHTML(&apos;Stuff in "quotation marks"&apos;)</code> should return <code>Stuff in &&#8203;quot;quotation marks&&#8203;quot;</code>.');
  });
  it('convertHTML("Shindler&apos;s List") should return Shindler&&#8203;apos;s List.', () => {
    assert.match(convertHTML("Shindler's List"), /Shindler&apos;s List/, 'message: <code>convertHTML("Shindler&apos;s List")</code> should return <code>Shindler&&#8203;apos;s List</code>.');
  });
  it('convertHTML("<>") should return &&#8203;lt;&&#8203;gt;.', () => {
    assert.match(convertHTML('<>'), /&lt;&gt;/, 'message: <code>convertHTML("<>")</code> should return <code>&&#8203;lt;&&#8203;gt;</code>.');
  });
  it('convertHTML("abc") should return abc.', () => {
    assert.strictEqual(convertHTML('abc'), 'abc', 'message: <code>convertHTML("abc")</code> should return <code>abc</code>.');
  });
});
