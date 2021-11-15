module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    // HACK: See https://github.com/storybookjs/storybook/pull/9292
    moduleNameMapper: {
      'react-syntax-highlighter/dist/esm/(.*)':
        'react-syntax-highlighter/dist/cjs/$1',
    },
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
      '^.+\\.(md|mdx)$': '<rootDir>/jest.mdxTransformer.js',
    },
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    testURL: 'http://localhost',
  };