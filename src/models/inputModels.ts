export type ConfiguredInput = {
    name: string,
    inputType: string,
    inputConfig: InputConfig
}

type InputConfig = {
    options?: Array<SelectOptions>;
    type?: string;
    placeholder?: string;
}

type SelectOptions = {
    value: number | string | boolean;
    displayValue: string;
}


