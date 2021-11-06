import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#311b92',
  colorSecondary: '#1be086',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#e5e5e5',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#1e1e1e',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'rgb(153, 153, 153)',
  barSelectedColor: '#311b92',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: '#e5e5e5',
  inputTextColor: '#1e1e1e',
  inputBorderRadius: 4,

  brandTitle: 'MeDesign DS',
  brandUrl: 'storybook.escoleme.com',
  brandImage: 'https://place-hold.it/350x150',
});