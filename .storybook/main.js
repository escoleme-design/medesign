const path = require('path');

module.exports = {
  stories: [
    '../packages/components/src/**/*.stories.@(js|ts|tsx|mdx)',
  ],
  "addons": [
    {
      name: '@storybook/preset-typescript',
      options: { transpileManager: true },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // '@react-theming/storybook-addon',
    
    "themeprovider-storybook/register",
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
  ],
  typescript: {
    reactDocgen: 'none',
  },
}
