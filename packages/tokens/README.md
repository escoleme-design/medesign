<div align="center">

# @escoleme/medesign-tokens

Visual primitives such as typography, color, and spacing that are shared between MeDesign ecosystem.


[![Stars](https://img.shields.io/github/stars/Cairo-design-system/medesign?style=social)](https://github.com/Cairo-design-system/medesign/)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/@escoleme/medesign-tokens)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@escoleme/medesign-tokens)
[![Download](https://img.shields.io/npm/dw/@escoleme/medesign-tokens)](https://www.npmjs.com/package/@escoleme/medesign-tokens)
[![Version](https://img.shields.io/npm/v/@escoleme/medesign-tokens)](https://www.npmjs.com/package/@escoleme/medesign-tokens)
</div>

## Installation

Install the npm package with yarn or npm.

```sh
# With Yarn
yarn add @escoleme/medesign-tokens

# With npm
npm install @escoleme/medesign-tokens
```

## Usage

The package exports a light and dark theme that is meant to be used with EscoleMe's React component library, MeDesign. Pass the theme to Emotion's ThemeProvider:

```jsx
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { light } from '@escoleme/medesign-tokens';

const Container = styled.div`
  color: ${props => props.theme.colors.blue500};
  font-family: ${props => props.theme.typeface.primary};
`;

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <Container>
        <h1>Hello world!</h1>
        <h2>By the power of styled-components!</h2>
      </Container>
    </ThemeProvider>
  );
};

export default App;
```

The theme is a plain JavaScript object, so you can use it in other ways, too.

  