import React from 'react';
// import { Theme } from '@escoleme/medesign-tokens';
import { ThemeProvider } from 'styled-components';

interface IThemeProps {
    children: React.ReactChild;
    theme: any;
}

export default (props: IThemeProps) => {
  return (
    <ThemeProvider theme={props.theme}>
      {props.children}
    </ThemeProvider>
  );
};