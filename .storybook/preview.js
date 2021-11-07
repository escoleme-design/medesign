// import {ThemeProvider} from '@escoleme/mecomponents';
import { light, dark } from '@escoleme/medesign-tokens'
import {ThemeProvider} from 'styled-components'
import { addDecorator } from '@storybook/react'
import { withThemes } from '@react-theming/storybook-addon';
import { Suspense } from 'react'
import { withThemesProvider } from "themeprovider-storybook";
import { DEFAULT_SETTINGS } from "themeprovider-storybook"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const themes = [
  {
    name: "Light theme",
    ...light
  },
  {
    name: "Dark theme",
    ...dark
  },
]

addDecorator(
  withThemesProvider(
    themes,
    DEFAULT_SETTINGS,
    ThemeProvider
  )
)

// addDecorator((story) => (
//   <ThemeProvider theme={light}>
//     {story()}
//   </ThemeProvider>
// ));

// const providerFn = ({ theme, children }) => {
//   return <ThemeProvider theme={light}>{children}</ThemeProvider>;
// };

// const themingDecorator = withThemes(null, [light], { providerFn });
// addDecorator(themingDecorator)
// addDecorator(withThemes(ThemeProvider, [light]));
// 
addDecorator((story, context) => (
  <Suspense fallback="Loading...">{story(context)}</Suspense>
));