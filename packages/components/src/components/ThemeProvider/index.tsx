import React from 'react';
import { light, Theme } from '@escoleme/medesign-tokens';
import { ThemeProvider } from 'styled-components';

interface IThemeProps {
    children: React.ReactChild;
    theme: any;
}

export default (props: IThemeProps) => {
  // const theme = {
  //   ...light,
  //   ...props
  // };

  // const theme: any = {
  //   // @ts-ignore
  //   myComponentLib: Object.assign({}, defaultTheme, props.theme),
  //   // 👆 Merge the default theme with the user-provided theme
  // };

  return (
    <ThemeProvider theme={props.theme || light}>
      {props.children}
    </ThemeProvider>
  );
};