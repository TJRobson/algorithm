const seed = require('../seed/Intermediate-bonfires');

const challenge = seed.challenges[0];

challenge.challengeSeed[0] = `export default ${challenge.challengeSeed[0]}`;

challenge.challengeSeed.splice(challenge.challengeSeed.length - 1, 1);

console.log(challenge.challengeSeed.join('\n'));

const th = `import { assert } from 'chai';\ndescribe('${challenge.title}', () => {`;

const tests = challenge.tests;
const testDesc = tests[0].split('message: ').pop().replace(/\'\);/g, '').replace(/<[\/]?code>/g, '');
const ts = `  it('${testDesc}', () => {`;
console.log([th, ts].join('\n'));
