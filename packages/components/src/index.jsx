"use strict";

import React from 'react';
import { light } from "@escoleme/medesign-tokens";

export function Button(props) {
  const { children } = props;

  const buttonStyle = {
    color: light.colors.white,
    backgroundColor: light.colors.primary,
    padding: light.spacings.s14
  };

  return <button style={buttonStyle}>{children}</button>;
}