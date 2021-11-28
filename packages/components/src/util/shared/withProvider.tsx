import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { light } from '@escoleme/medesign-tokens';

const WithProviders: FunctionComponent = ({ children }) => (
    <ThemeProvider theme={light}>{children}</ThemeProvider>
);

export { WithProviders };