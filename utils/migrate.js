const migrateUtils = require('./migrateUtils');
const basicChallenges = require('../seed/basic-bonfires').challenges;
const intermediateChallenges = require('../seed/intermediate-bonfires').challenges;
const advancedChallenges = require('../seed/advanced-bonfires').challenges;

const getFuncName = migrateUtils.getFuncName;
const getFuncString = migrateUtils.getFuncString;
const getFuncDirectory = migrateUtils.getFuncDirectory;
const createFile = migrateUtils.createFile;
const getStringOfTest = migrateUtils.getStringOfTest;
const getDirectoryOfTest = migrateUtils.getDirectoryOfTest;

basicChallenges.shift();
function migrate(challenges, level) {
  challenges.forEach(function(challenge) {
    const challengeSeedFunc = challenge.challengeSeed;
    const funcName = getFuncName(challengeSeedFunc)
    const funcDirectory = getFuncDirectory(funcName, level);
    const funcString = getFuncString(challengeSeedFunc)

    createFile(funcDirectory, funcString);

    const stringOfTest = getStringOfTest(challenge, funcName);
    const directoryOfTest = getDirectoryOfTest(funcName, level);

    createFile(directoryOfTest, stringOfTest);
  });
}
migrate(basicChallenges, 'basic');
