import React, {forwardRef} from "react";
import {IConfiguredInput, IConfiguredSelect, IConfiguredTextInput} from "../../../models/inputModels";
import {FormElementType} from "../../../constants/constants";

type Props = {
    formElement: IConfiguredInput
    error: boolean;
}

const Input = forwardRef((props: Props, ref: React.Ref<any>) => {
    let formClasses = "form-control ml-1 mr-1 mt-3 mb-3 ";
    let returnInput;
    let passedElement;

    if (props.error) {
        formClasses += "is-invalid";
    }

    switch (props.formElement.inputType) {
        case(FormElementType.INPUT):
            passedElement = props.formElement as IConfiguredTextInput

            returnInput = <input
                name={passedElement.name}
                ref={ref}
                className={formClasses}
                {...passedElement.inputConfig}/>;
            break;

        case(FormElementType.SELECT):
            passedElement = props.formElement as IConfiguredSelect

            returnInput = <select
                name={props.formElement.name}
                ref={ref}
                className={formClasses}>
                {passedElement.inputConfig.options.map(option => (
                    <option key={String(option.value)} value={String(option.value)}>
                        {option.displayValue}
                    </option>
                ))}
            </select>;
            break;

        default:
            returnInput = <input
                className="form-control"/>;
    }

    return (
        <>
            {returnInput}
        </>

    )
});

export default Input;