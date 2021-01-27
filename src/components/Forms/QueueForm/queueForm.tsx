import React, {FC, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import styles from "./queueForm.module.css"

import {FormElementType} from "../../../constants/constants";
import {SubmitButton} from "../../UI/Buttons/buttons";
import {convertObjectStringsToPrimitives} from "../../../utilities/objectUtilities";
import {ISelectConfig, ITextConfig} from "../../../models/inputModels";
import {createUseFormRef, inputHasError} from "../../../utilities/formUtilities";
import Input from "../Inputs/input";
import Select from "../Inputs/select";
import {IQueueEntity, ISubject} from "../../../models/types";

enum FormElements {
    FIRSTNAME = "firstname",
    SUBJECT = "subject",
    YEAR = "year",
    DIGITAL = "digitalConsultation",
}

type Props = {
    subjects: Array<ISubject>;
    loading: boolean;
    error: string | null;
    addQueueEntity: (queueEntity: IQueueEntity) => void;
}

const QueueForm: FC<Props> = (props) => {
    const {subjects, addQueueEntity} = props;
    const {register, handleSubmit, reset, errors, formState: {isSubmitSuccessful}} = useForm();

    const [nameInput] = useState<ITextConfig>({
        type: FormElementType.TEXT,
        name: FormElements.FIRSTNAME,
        placeholder: "Fornavn",
        validation: {
            minLength: 3,
            errorMessage: "Vennligst oppgi et fornavn på minst 3 bokstaver"
        }
    })

    const [subjectSelect, setSubjectSelect] = useState<ISelectConfig>({
        type: FormElementType.SELECT,
        name: FormElements.SUBJECT,
        options: []
    });

    const [yearSelect] = useState<ISelectConfig>({
        type: FormElementType.SELECT,
        name: FormElements.YEAR,
        options: [
            {value: 1, displayValue: "1. år"},
            {value: 2, displayValue: "2. år"},
            {value: 3, displayValue: "3. år"}
        ]
    })

    const [digitalConsultationSelect] = useState<ISelectConfig>({
        type: FormElementType.SELECT,
        name: FormElements.DIGITAL,
        options: [
            {value: false, displayValue: "Fysisk Veiledning (Datatorget)"},
            {value: true, displayValue: "Digital Veiledning (Discord)"}
        ]
    })

    //Use effect only to be triggered when the component is first rendered.
    useEffect(() => {
        if (subjects.length > 0) {
            fillSubjectSelector();
        }
    }, [subjects])

    //Use effect to run whenever the form is submitted successfully.
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset])

    const fillSubjectSelector = () => {
        const subjectListUpdated = {...subjectSelect};
        subjectListUpdated.options = [];

        subjects?.forEach(subject => {
            subjectListUpdated.options.push({value: subject.name, displayValue: subject.name});
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

        addQueueEntity(queueEntity);
    };

    const form =
        <form onSubmit={handleSubmit(registrationHandler)} className={"form-inline mt-5 mb-5 " + styles.queueForm}>
            <Input inputConfig={nameInput} error={inputHasError(errors, nameInput)} ref={createUseFormRef(nameInput, register)}/>
            <Select inputConfig={subjectSelect} ref={createUseFormRef(subjectSelect, register)}/>
            <Select inputConfig={yearSelect} ref={createUseFormRef(yearSelect, register)}/>
            <Select inputConfig={digitalConsultationSelect} ref={createUseFormRef(yearSelect, register)}/>
            <SubmitButton className={"ml-2 mr-2"}>Registrer</SubmitButton>
        </form>

    return (
        <div className={"bg-white pb-1 pt-1"}>
            {form}
        </div>
    );

}

export default QueueForm