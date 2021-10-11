const baseConfig = require('./jest.config.base');

module.exports = {
  ...baseConfig,
  projects: ['<rootDir>/packages/*/jest.config.js'],
  coverageDirectory: '<rootDir>/__coverage__',
  collectCoverageFrom: [
    '<rootDir>/packages/**/*.{ts,tsx,js,jsx}',
    '!<rootDir>/packages/**/node_modules/**/*.{ts,tsx,js,jsx}',
    '!<rootDir>/packages/**/dist/**/*.{ts,tsx,js,jsx}',
    '!<rootDir>/packages/**/__testfixtures__/**/*',
    '!<rootDir>/packages/**/index.{ts,tsx,js,jsx}',
    '!<rootDir>/packages/**/*.stories.{ts,tsx,js,jsx}',
    '!<rootDir>/packages/**/*.docs.mdx',
  ],
};