import React from "react";

const input = (props) => {
    let inputElement = null;

    switch (props.inputType) {
        case("input"):
            inputElement = <input
                className="form-control ml-2 mr-2 mt-2"
                value={props.value}
                onChange={props.changed}
                {...props.inputConfig}/>;
            break;

        case("select"):
            inputElement = <select
                className="form-control ml-2 mr-2 mt-2"
                value={props.value}
                onChange={props.changed}>
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