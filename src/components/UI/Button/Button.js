import React from 'react';

const button = (props) => (
    <button
        disabled={props.disabled}
        className={props.styling}
        onClick={props.clicked}>{props.children}</button>
);

export default button;