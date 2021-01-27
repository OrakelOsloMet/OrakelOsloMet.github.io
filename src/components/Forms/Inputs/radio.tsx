import React, {forwardRef} from "react";
import {IRadioConfig} from "../../../models/inputModels";

type Props = {
    inputConfig: IRadioConfig;
    onChange?: (event: any) => void;
    error?: boolean;
};

const RadioInput = forwardRef((props: Props, ref: React.Ref<any>) => {
    const {inputConfig, onChange, error} = props;

    let classnames = "form-check form-check-inline ml-1 mr-1 mt-3 mb-3 ";

    if (error) {
        classnames += "is-invalid";
    }

    const handleOnchange = (event: any) => {
        if (onChange) {
            onChange(event);
        }
    }

    const radioDivs: Array<JSX.Element> = [];
    {
        inputConfig.buttons.forEach(button => {
            radioDivs.push(
                <div key={button.label} className={classnames}>
                    <input
                        key={button.label + "radio"}
                        value={button.value}
                        className={"form-check-input "}
                        ref={ref}
                        defaultChecked={button.defaultChecked}
                        onChange={handleOnchange}
                        {...inputConfig}/>
                    <label className={"form-check-label"}>{button.label}</label>
                </div>);
        })
    }

    return (
        <>
            {radioDivs}
        </>
    )
})

export default RadioInput;

