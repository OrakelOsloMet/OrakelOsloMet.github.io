import {updateObject} from "./objectUtilities";

export const inputChangedHandler = (event, inputIdentifier, form) => {
    const updatedFormElement = updateObject(form[inputIdentifier], {
        value: event.target.value,
        valid: checkFormElementValidity(event.target.value, form[inputIdentifier].validation),
        touched: true
    });

    const updatedForm = updateObject(form, {
        [inputIdentifier]: updatedFormElement
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedForm) {
        formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    }

    return {form: updatedForm, formIsValid: formIsValid}
};

const checkFormElementValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
        return true;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    return isValid;
};