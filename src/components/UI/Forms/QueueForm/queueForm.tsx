import React, {FC, Ref, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import styles from "./queueForm.module.css"

import {FormElementType} from "../../../../constants/constants";
import {SubmitButton} from "../../Buttons/buttons";
import {convertObjectStringsToPrimitives} from "../../../../utilities/objectUtilities";
import Input from "../Inputs/input"
import {IConfiguredSelect, IConfiguredTextInput} from "../../../../models/inputModels";

type Props = {
    subjects: Array<ISubject>;
    loading: boolean;
    error: string | null;
    addQueueEntity: Function;
}

const QueueForm: FC<Props> = (props) => {
    const {register, handleSubmit, reset, errors, formState: {isSubmitSuccessful}} = useForm();

    const [nameInput, setNameInput] = useState<IConfiguredTextInput>({
        name: "firstname",
        inputType: FormElementType.INPUT,
        inputConfig: {
            type: "text",
            placeholder: "Fornavn"
        },
        validation: {
            minLength: 3,
            errorMessage: "Vennligst oppgi et fornavn på minst 3 bokstaver"
        }
    })

    const [subjectSelect, setSubjectSelect] = useState<IConfiguredSelect>({
        name: "subject",
        inputType: FormElementType.SELECT,
        inputConfig: {
            options: []
        }
    });

    const [yearSelect, setYearSelect] = useState<IConfiguredSelect>({
        name: "year",
        inputType: FormElementType.SELECT,
        inputConfig: {
            options: [
                {value: 1, displayValue: "1. år"},
                {value: 2, displayValue: "2. år"},
                {value: 3, displayValue: "3. år"}
            ]
        }
    })

    const [digitalConsultationSelect, setDigitalConsultationSelect] = useState<IConfiguredSelect>({
        name: "digitalConsultation",
        inputType: FormElementType.SELECT,
        inputConfig: {
            options: [
                {value: false, displayValue: "Fysisk Veiledning (Datatorget)"},
                {value: true, displayValue: "Digital Veiledning (Discord)"}
            ]
        }
    })

    //Use effect only to be triggered when the component is first rendered.
    useEffect(() => {
        if (props.subjects.length > 0) {
            fillSubjectSelector();
        }
    }, [props.subjects])

    //Use effect to run whenever the form is submitted successfully.
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset])

    const fillSubjectSelector = () => {
        const subjectListUpdated = {...subjectSelect};
        subjectListUpdated.inputConfig.options = [];

        props.subjects?.forEach(subject => {
            subjectListUpdated.inputConfig.options.push({value: subject.name, displayValue: subject.name});
        });

        setSubjectSelect(subjectListUpdated);
    };

    const registrationHandler = (formData: any) => {
        const primitiveFormData = convertObjectStringsToPrimitives(formData);

        const queueEntity: IQueueEntity = {
            id: 0, //Id is set in the API
            name: primitiveFormData.firstname,
            subject: primitiveFormData.subject,
            digitalConsultation: primitiveFormData.digitalConsultation,
            studyYear: primitiveFormData.year,
            confirmedDone: false,
            timeConfirmedDone: null
        };

        props.addQueueEntity(queueEntity);
    };

    const formElements = {nameInput, subjectSelect, yearSelect, digitalConsultationSelect};
    const form =
        <form onSubmit={handleSubmit(registrationHandler)} className={"form-inline mt-5 mb-5 " + styles.queueForm}>
            {Object.values(formElements).map(formElement => {

                let forwardRef: Ref<any> = register;

                if (formElement.inputType === FormElementType.INPUT) {
                    let currentElement = formElement as IConfiguredTextInput
                    forwardRef = register({
                        required: currentElement.validation.errorMessage,
                        minLength: {
                            value: currentElement.validation.minLength,
                            message: currentElement.validation.errorMessage
                        }
                    })
                }

                let errorInInput = false;
                for (const key of Object.entries(errors)) {
                    if (key[0] === formElement.name) {
                        errorInInput = true;
                    }
                }

                return (
                    <Input
                        key={formElement.name}
                        formElement={formElement}
                        ref={forwardRef}
                        error={errorInInput}
                    />
                )
            })}

            <SubmitButton className={"ml-2 mr-2"}>Registrer</SubmitButton>
        </form>

    return (
        <div className={"bg-white pb-1 pt-1"}>
            {form}
        </div>
    );

}

export default QueueForm