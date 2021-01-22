import {FormElementType} from "../constants/constants";

export interface IConfiguredInput {
    name: string;
    inputType: FormElementType;
    inputConfig: IInputConfig;
}

export interface IInputConfig {

}

export interface IConfiguredTextInput extends IConfiguredInput {
    inputConfig: ITextConfig
    validation: IInputValidation
}

export interface IConfiguredSelect extends IConfiguredInput {
    inputConfig: ISelectConfig
}

interface ISelectConfig extends IInputConfig {
    options: Array<ISelectOptions>;
}

interface ITextConfig extends IInputConfig {
    type: string;
    placeholder: string;
    defaultValue?: string;
}

interface ISelectOptions {
    value: number | string | boolean;
    displayValue: string;
}

interface IInputValidation {
    minLength: number;
    errorMessage: string;
}


