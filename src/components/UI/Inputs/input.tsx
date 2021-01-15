import React, {forwardRef} from "react";
import {IConfiguredInput, IConfiguredSelect, IConfiguredTextInput} from "../../../models/inputModels";
import {FormElementType} from "../../../constants/constants";

type Props = {
    formElement: IConfiguredInput
    error: string
}

const Input = forwardRef((props: Props, ref: React.Ref<any>) => {
    const {formElement, error} = props;
    let formClasses = "form-control ml-2 mr-2 mt-2 ";
    let returnInput;
    let passedElement;

    switch (formElement.inputType) {
        case(FormElementType.INPUT):
            passedElement = formElement as IConfiguredTextInput
            //TODO: Right now, error is only passed whenever there is an error in firstname, which is the only text-input field. This will break if more textinputs are added. Fix once Queue has been converted to TS.
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