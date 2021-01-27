import React, {forwardRef} from "react";
import {ISelectConfig} from "../../../models/inputModels";

type Props = {
    inputConfig: ISelectConfig;
    onChange?: (event: any) => void;
    error?: boolean;
};

const SelectInput = forwardRef((props: Props, ref: React.Ref<any>) => {
    const {inputConfig, onChange, error} = props;

    let classnames = "form-control ml-1 mr-1 mt-3 mb-3 ";

    if (error) {
        classnames += "is-invalid";
    }

    const handleOnchange = (event: any) => {
        if (onChange) {
            onChange(event);
        }
    }

    return (
        <>
            <select
                ref={ref}
                className={classnames}
                onChange={handleOnchange}
                {...inputConfig}>
                {inputConfig.options.map(option => {

                    //Enables use of serialized objects as values
                    const value = typeof option.value === "object" ? JSON.stringify(option.value) : String(option.value);

                    return (
                        <option key={option.displayValue} value={value}>
                            {option.displayValue}
                        </option>
                    )
                })}
            </select>
        </>
    )
})

export default SelectInput;