import { light, Theme } from '@escoleme/medesign-tokens';
import { merge } from 'lodash';
import React, { useState, useEffect } from 'react';

export const useLightTheme = (theme: Theme) => {
    let styles = merge(light, theme);

    light.comp = styles.comp;
    light.ref = styles.ref;
    light.sys = styles.sys;

    merge(light, {
        comp: {
            button: {
                filled: {
                    color: {
                        labelText: 'red'
                    }
                }
            }
        }
    })
}