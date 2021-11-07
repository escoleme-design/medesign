import { Theme } from "@escoleme/medesign-tokens";
import React, { useContext } from "react";
import styled, {ThemeContext} from "styled-components";

export default (props) => {
    
    const { sys } = useContext<Theme>(ThemeContext);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            padding: '80px 0px',
            background: sys.color.background
        }}>
            {props.children}
        </div>
    );
}