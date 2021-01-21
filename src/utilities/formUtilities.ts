import {IConfiguredInput, IConfiguredTextInput} from "../models/inputModels";
import {FormElementType} from "../constants/constants";
import {Ref} from "react";
import {DeepMap, FieldError} from "react-hook-form";


//Add cases to this function if more input types in need of validation are added.
export const createUseFormRef = <T extends IConfiguredInput>(formElement: T, register: any) => {
    let forwardRef: Ref<any> = register;

    switch (formElement.inputType) {
        case FormElementType.INPUT:
            let element = formElement as unknown as IConfiguredTextInput;
            forwardRef = register({
                required: element.validation.errorMessage,
                minLength: {
                    value: element.validation.minLength,
                    message: element.validation.errorMessage
                }
            })
            return forwardRef;

        default:
            return register;
    }
}

export const inputHasError = <T extends IConfiguredInput>(errors: DeepMap<Record<string, any>, FieldError>, formElement: T) => {
    let errorInInput = false;
    for (const key of Object.entries(errors)) {
        if (key[0] === formElement.name) {
            errorInInput = true;
        }
    }

    return errorInInput;
}