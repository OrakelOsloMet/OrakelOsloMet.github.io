import React, {forwardRef} from "react";
import {ConfiguredInput} from "../../../models/inputModels";
import {SELECT, INPUT} from "../../../constants/constants";

type InputProps = {
    formElement: ConfiguredInput
    error: string
}

const Input = forwardRef((props: InputProps, ref: React.Ref<any>) => {
    const {formElement, error} = props;
    let formClasses = "form-control ml-2 mr-2 mt-2 ";
    let inputElement;

    switch (formElement.inputType) {
        case(INPUT):

            //TODO: Right now, error is only passed whenever there is an error in firstname, which is the only text-input field. This will break if more textinputs are added. Fix once Queue has been converted to TS.
            if (error) {
                formClasses += "is-invalid";
            }

            inputElement = <input
                name={formElement.name}
                ref={ref}
                className={formClasses}
                {...formElement.inputConfig}/>;
            break;

        case(SELECT):
            inputElement = <select
                name={formElement.name}
                ref={ref}
                className={formClasses}>
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