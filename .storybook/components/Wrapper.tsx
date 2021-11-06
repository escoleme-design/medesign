import React from "react"

export default (props) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
        }}>
            {props.children}
        </div>
    );
}