const migrate = require('./migrateUtils');
const basicChallenges = require('../seed/basic-bonfires').challenges;
const intermediateChallenges = require('../seed/intermediate-bonfires').challenges;
const advancedChallenges = require('../seed/advanced-bonfires').challenges;

basicChallenges.shift();

migrate(basicChallenges, 'basic');
migrate(intermediateChallenges, 'intermediate');
migrate(advancedChallenges, 'advanced');
