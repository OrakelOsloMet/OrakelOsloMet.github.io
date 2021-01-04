import React from "react";

//TODO Refactor this by using a library or a standard design pattern for creating forms before converting to TypeScript.

const input = (props) => {
    let inputElement = null;

    switch (props.inputType) {
        case("input"):
            inputElement = <input
                className="form-control ml-2 mr-2 mt-2"
                value={props.value}
                onChange={props.changeHandler}
                {...props.inputConfig}/>;
            break;

        case("select"):
            inputElement = <select
                className="form-control ml-2 mr-2 mt-2"
                value={props.value}
                onChange={props.changeHandler}>
                {props.inputConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>;
            break;

        default:
            inputElement = <input
                className="form-control"/>;
    }

    return (
        <>
            {inputElement}
        </>

    )
};

export default input;