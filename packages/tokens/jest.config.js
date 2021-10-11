const baseConfig = require('../../jest.config.base');

const packageJson = require('./package.json');

const packageName = packageJson.name.split('@escoleme/').pop();

module.exports = {
  ...baseConfig,
  name: packageName,
  displayName: packageName,
  rootDir: '../..',
  roots: [`<rootDir>/packages/tokens`],
  clearMocks: true,
  testEnvironment: 'node',
  setupFilesAfterEnv: ['jest-extended'],
};