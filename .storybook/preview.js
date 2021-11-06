import {ThemeProvider} from '@escoleme/mecomponents';
// import { light, dark } from '@escoleme/medesign-tokens'
import { addDecorator } from '@storybook/react'
import { withThemes } from '@react-theming/storybook-addon';
import { Suspense } from 'react'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// addDecorator(withThemes(ThemeProvider, [light, dark]));
// 
addDecorator((story, context) => (
  <Suspense fallback="Loading...">{story(context)}</Suspense>
));