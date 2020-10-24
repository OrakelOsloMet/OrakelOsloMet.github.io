import React from 'react';

export const SubmitButton = (props) => (
    <button
        type="Success"
        disabled={props.disabled}
        className={`btn btn-primary ${props.className}`}
        onClick={props.onClick}>{props.children}</button>
);

export const CancelButton = (props) => (
    <button
        type="Danger"
        disabled={props.disabled}
        className={`btn btn-danger ${props.className}`}
        onClick={props.onClick}>{props.children}</button>
);