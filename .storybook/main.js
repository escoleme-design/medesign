const path = require('path');

module.exports = {
  stories: [
    '../packages/components/src/**/*.stories.@(js|ts|tsx|mdx)',
  ],
  "addons": [
    // {
    //   name: '@storybook/preset-typescript',
    //   options: { transpileManager: true },
    // },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // '@react-theming/storybook-addon',
    '@storybook/addon-a11y',
    "themeprovider-storybook/register",
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    "storybook-addon-pseudo-states",
    'storybook-mobile',
    'storybook-addon-performance/register'
  ],
  typescript: {
    reactDocgen: 'none',
  },
}
