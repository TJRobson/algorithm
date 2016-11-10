const migrateUtils = require('./migrateUtils');
const seed = require('../seed/Intermediate-bonfires');
const fs = require('fs')

const getFuncName = migrateUtils.getFuncName;
const getFuncString = migrateUtils.getFuncString;
const getFuncDirectory = migrateUtils.getFuncDirectory;
const createFile = migrateUtils.createFile;
const getStringOfTest = migrateUtils.getStringOfTest;
const getDirectoryOfTest = migrateUtils.getDirectoryOfTest;

seed.challenges.forEach(function(challenge) {
  const challengeSeedFunc = challenge.challengeSeed;
  const funcName = getFuncName(challengeSeedFunc)
  const funcDirectory = getFuncDirectory(funcName);
  const funcString = getFuncString(challengeSeedFunc)

  createFile(funcDirectory, funcString);

  const stringOfTest = getStringOfTest(challenge, funcName);
  const directoryOfTest = getDirectoryOfTest(funcName);

  createFile(directoryOfTest, stringOfTest);
});
