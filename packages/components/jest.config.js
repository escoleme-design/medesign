const baseConfig = require('../../jest.config.base');

const packageJson = require('./package.json');

const packageName = packageJson.name.split('@sumup/').pop();

module.exports = {
  ...baseConfig,
  name: packageName,
  displayName: packageName,
  rootDir: '../..',
  roots: [`<rootDir>/packages/components`],
  setupFilesAfterEnv: [`<rootDir>/packages/components/jest.setup.js`],
};