const fs = require('fs');

function getFuncName(challengeSeedFunc) {
  return challengeSeedFunc[0].slice(challengeSeedFunc[0].indexOf(' ') + 1, challengeSeedFunc[0].indexOf('('));
}

function getFuncString(challengeSeedFunc) {
  challengeSeedFunc[0] = `export default ${challengeSeedFunc[0]}`;

  challengeSeedFunc.splice(challengeSeedFunc.length - 1, 1);

  return challengeSeedFunc.join('\n')
}

function getFuncDirectory(funcName) {
  return `${__dirname}/../src/${funcName}.js`;
}

function createFile(directory, content) {
  fs.closeSync(fs.openSync(directory, 'w'));
  fs.writeFile(directory, content, 'utf8', (err) => {
    if (err) throw err;
    console.log(`${directory} is saved`);
  });
}

function getTestDesc(test) {
  return test.split('message: ').pop().replace(/\'\);/g, '').replace(/<[\/]?code>/g, '');
}

function getStringOfTest(challenge, funcName) {
  const arr = [];
  const tests = challenge.tests;

  const th = `import { assert } from 'chai';\nimport ${funcName} from '../src/${funcName}';\ndescribe('${challenge.title}', () => {\n`;
  arr.push(th);

  tests.forEach(function(test) {
      const testDesc = getTestDesc(test);
      arr.push(`  it('${testDesc}', () => {\n    ${test}\n  });\n`);
  });

  arr.push('});\n');

  return arr.join('');
}

function getDirectoryOfTest(funcName) {
  return `${__dirname}/../test/${funcName}.test.js`;
}
module.exports = {
  getFuncName,
  getFuncString,
  getFuncDirectory,
  createFile,
  getStringOfTest,
  getDirectoryOfTest
}
