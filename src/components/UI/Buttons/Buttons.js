import React from 'react';

export const SubmitButton = (props) => (
    <button
        type="Submit"
        disabled={props.disabled}
        className={`btn btn-primary ${props.className}`}
        onClick={props.onClick}>{props.children}</button>
);

export const CancelButton = (props) => (
    <button
        disabled={props.disabled}
        className={`btn btn-danger ${props.className}`}
        onClick={props.onClick}>{props.children}</button>
);

export const ConfirmButton = (props) => (
    <button
        disabled={props.disabled}
        className={`btn btn-success ${props.className}`}
        onClick={props.onClick}>{props.children}</button>
);

export const DeleteButton = (props) => (
    <button
        disabled={props.disabled}
        className={`btn btn-danger ${props.className}`}
        onClick={props.onClick}>{props.children}</button>
);