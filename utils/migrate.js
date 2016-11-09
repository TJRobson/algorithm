const seed = require('../seed/Intermediate-bonfires');

const challenge = seed.challenges[0].challengeSeed;

challenge[0] = `export default ${challenge[0]}`;

challenge.splice(challenge.length - 1, 1);

console.log(challenge.join('\n'));

console.log("assert.match(convertHTML(\"Dolce & Gabbana\"), /Dolce &amp; Gabbana/, 'message: <code>convertHTML(\"Dolce & Gabbana\")</code> should return <code>Dolce &&#8203;amp; Gabbana</code>.');");
