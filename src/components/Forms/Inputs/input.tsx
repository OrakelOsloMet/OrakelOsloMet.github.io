import React, {forwardRef} from "react";
import {ITextConfig} from "../../../models/inputModels";

type Props = {
    inputConfig: ITextConfig;
    onChange?: (event: any) => void;
    error: boolean;
};

const TextInput = forwardRef((props: Props, ref: React.Ref<any>) => {
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
            <input
                ref={ref}
                className={classnames}
                onChange={handleOnchange}
                {...inputConfig}
            />
        </>
    )
})

export default TextInput;