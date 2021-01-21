import React, {forwardRef} from "react";
import {IConfiguredInput, IConfiguredSelect, IConfiguredTextInput} from "../../../models/inputModels";
import {FormElementType} from "../../../constants/constants";

type Props = {
    formElement: IConfiguredInput
    error: string
}

const Input = forwardRef((props: Props, ref: React.Ref<any>) => {
    const {formElement, error} = props;
    let formClasses = "form-control ml-1 mr-1 ";
    let returnInput;
    let passedElement;

    switch (formElement.inputType) {
        case(FormElementType.INPUT):
            passedElement = formElement as IConfiguredTextInput

            if (error) {
                formClasses += "is-invalid";
            }

            returnInput = <input
                name={passedElement.name}
                ref={ref}
                className={formClasses}
                {...passedElement.inputConfig}/>;
            break;

        case(FormElementType.SELECT):
            passedElement = formElement as IConfiguredSelect

            returnInput = <select
                name={formElement.name}
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