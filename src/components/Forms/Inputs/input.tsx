import React, {forwardRef} from "react";
import {IConfiguredInput, IConfiguredSelect, IConfiguredTextInput} from "../../../models/inputModels";
import {FormElementType} from "../../../constants/constants";

type Props = {
    formElement: IConfiguredInput
    onChange?: (event: any) => void
    error: boolean;
}

const Input = forwardRef((props: Props, ref: React.Ref<any>) => {
    const {formElement, onChange, error} = props;
    let formClasses = "form-control ml-1 mr-1 mt-3 mb-3 ";
    let returnInput;
    let passedElement;

    if (error) {
        formClasses += "is-invalid";
    }

    const handleOnchange = (event: any) => {
        if (onChange) {
            onChange(event);
        }
    }

    switch (formElement.inputType) {
        case(FormElementType.INPUT):
            passedElement = formElement as IConfiguredTextInput


            returnInput = <input
                name={passedElement.name}
                ref={ref}
                className={formClasses}
                onChange={handleOnchange}
                defaultValue={passedElement.inputConfig.defaultValue}
                {...passedElement.inputConfig}/>;
            break;

        case(FormElementType.SELECT):
            passedElement = formElement as IConfiguredSelect

            returnInput = <select
                name={formElement.name}
                ref={ref}
                className={formClasses}
                onChange={handleOnchange}>
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