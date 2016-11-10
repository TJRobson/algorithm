const seed = require('../seed/Intermediate-bonfires');
const fs = require('fs')
const challenge = seed.challenges[0];
const fileName = challenge.challengeSeed[0].slice(challenge.challengeSeed[0].indexOf(' ') + 1, challenge.challengeSeed[0].indexOf('('));
challenge.challengeSeed[0] = `export default ${challenge.challengeSeed[0]}`;

challenge.challengeSeed.splice(challenge.challengeSeed.length - 1, 1);

console.log(challenge.challengeSeed.join('\n'));
fs.closeSync(fs.openSync(`${__dirname}/../src/${fileName}.js`, 'w'));

fs.writeFile(`${__dirname}/../src/${fileName}.js`, challenge.challengeSeed.join('\n'), 'utf8', (err) => {
if (err) throw err;
console.log(`../src/${fileName}.js is saved`);
});

const th = `import { assert } from 'chai';\nimport ${fileName} from '../src/${fileName}';\ndescribe('${challenge.title}', () => {`;

const tests = challenge.tests;
const testDesc = tests[0].split('message: ').pop().replace(/\'\);/g, '').replace(/<[\/]?code>/g, '');
const ts = `  it('${testDesc}', () => {`;
const t = `    ${tests[0]}`
const tsc = `  });`
const thc = '});\n';
console.log([th, ts, t, tsc, thc].join('\n'));
fs.closeSync(fs.openSync(`${__dirname}/../test/${fileName}.test.js`, 'w'));
fs.writeFile(`${__dirname}/../test/${fileName}.test.js`, [th, ts, t, tsc, thc].join('\n'), 'utf8', (err) => {
if (err) throw err;
console.log(`../test/${fileName}.test.js is saved`);
});
