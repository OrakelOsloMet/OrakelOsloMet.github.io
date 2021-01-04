import React, {MouseEventHandler, FunctionComponent} from 'react';

type ButtonProps = {
    disabled: boolean,
    className: string,
    onClick: MouseEventHandler
}

export const SubmitButton: FunctionComponent<ButtonProps> = (props) =>
    <button
        type="submit"
        disabled={props.disabled}
        className={`btn btn-primary ${props.className}`}
        onClick={props.onClick}>{props.children}
    </button>

export const CancelButton: FunctionComponent<ButtonProps> = (props) => (
    <button
        disabled={props.disabled}
        className={`btn btn-danger ${props.className}`}
        onClick={props.onClick}>{props.children}</button>
);

export const ConfirmButton: FunctionComponent<ButtonProps> = (props) => (
    <button
        disabled={props.disabled}
        className={`btn btn-success ${props.className}`}
        onClick={props.onClick}>{props.children}</button>
);

export const DeleteButton: FunctionComponent<ButtonProps> = (props) => (
    <button
        disabled={props.disabled}
        className={`btn btn-danger ${props.className}`}
        onClick={props.onClick}>{props.children}</button>
);