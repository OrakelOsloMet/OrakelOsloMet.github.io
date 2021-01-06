import React from "react";

const Input = React.forwardRef((props, ref) => {
    let inputElement = null;

    switch (props.inputType) {
        case("input"):
            inputElement = <input
                name={props.name}
                ref={ref({required: "Oppgi Fornavn", minLength: {value: 3, message: "Navn må ha minst 3 bokstaver"}})}
                className="form-control ml-2 mr-2 mt-2"
                value={props.value}
                {...props.inputConfig}/>;
            break;

        case("select"):
            inputElement = <select
                name={props.name}
                ref={ref}
                className="form-control ml-2 mr-2 mt-2"
                value={props.value}>
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
});

export default Input;