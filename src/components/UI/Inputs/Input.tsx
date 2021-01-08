import React, {forwardRef} from "react";
import {ConfiguredInput} from "../../../models/InputModels";
import {SELECT, INPUT} from "../../../constants/constants";

type InputProps = {
    formElement: ConfiguredInput
    error: string
}

const Input = forwardRef((props: InputProps, ref: React.Ref<any>) => {
    const {formElement, error} = props;
    let inputElement;

    switch (formElement.inputType) {
        case(INPUT):
            inputElement = <input
                name={formElement.name}
                ref={ref}
                className={"form-control ml-2 mr-2 mt-2"}
                style={error ? {border: "1px solid red"} : {}}
                {...formElement.inputConfig}/>;
            break;

        case(SELECT):
            inputElement = <select
                name={formElement.name}
                ref={ref}
                className="form-control ml-2 mr-2 mt-2">
                {formElement.inputConfig.options!.map(option => (
                    <option key={option.value.toString()} value={option.value.toString()}>
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