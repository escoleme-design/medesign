import React from "react";

import { RenderFn } from "./render";
import { WithProviders } from "./withProvider";
import { renderToStaticMarkup } from 'react-dom/server';

const renderToHtml: RenderFn<string> = (component) =>
  renderToStaticMarkup(<WithProviders>{component}</WithProviders>);

export { renderToHtml };