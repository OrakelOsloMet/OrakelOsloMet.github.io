import React, {FC, Ref, useEffect, useState, useRef} from "react";
import {useForm} from "react-hook-form";
import styles from "./queue.module.css"

import {FormElementType} from "../../constants/constants";
import Table from "../../components/UI/Tables/queueTable";
import {SubmitButton} from "../../components/UI/Buttons/buttons";
import {convertObjectStringsToPrimitives} from "../../utilities/objectUtilities";
import {jsonArrayEqual} from "../../utilities/arrayUtilities";
import Input from "../../components/UI/Inputs/input"
import {IConfiguredSelect, IConfiguredTextInput} from "../../models/inputModels";
import LoadingSpinner from "../../components/UI/LoadingSpinner/loadingSpinner";
import useInterval from "../../hooks/useInterval";
import usePreviousState from "../../hooks/usePreviousState";
import useSound from "use-sound";

const helloThere = require("../../assets/sounds/hellothere.mp3");

type Props = {
    isAuthenticated: boolean;
    userRoles: Array<string>;
    queueData: Array<IQueueEntity>;
    subjects: Array<ISubject>;
    loading: boolean;
    error: string | null;
    addQueueEntity: Function;
    deleteQueueEntity: Function;
    confirmDoneEntity: Function;
    pollingFunction: Function
}

const Queue: FC<Props> = (props) => {
    const {register, handleSubmit, reset, errors, formState: {isSubmitSuccessful}} = useForm();
    const [play] = useSound(helloThere)
    const previousQueue = usePreviousState(props.queueData) as unknown as Array<IQueueEntity>

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
            options: [
                {value: "Loading", displayValue: "Loading"}
            ]
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
        props.pollingFunction();
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

    //Make the Queue update a 5 second interval
    useInterval(() => {
        props.pollingFunction()
    }, 5000);

    //Play a notification sound if a new person has been added to the queue
    useEffect(() => {

        //Due to the API taking a few ms to respond, previousQueue will be undefined in the first render cycle.
        if (previousQueue) {
            if (props.queueData.length >= previousQueue.length) {
                if (!jsonArrayEqual(props.queueData, previousQueue)) {
                    play();
                }
            }
        }
    }, [props.queueData])

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

        //This is a quick fix to a current production problem.
        //TODO Implement new logic to make sure complete IQueueEntity objects without null values are passed to the API
        if (primitiveFormData.subject === null) {
            primitiveFormData.subject = "Annet"
        }

        const queueEntity = {
            name: primitiveFormData.firstname,
            subject: primitiveFormData.subject,
            digitalConsultation: primitiveFormData.digitalConsultation,
            studyYear: primitiveFormData.year
        };

        props.addQueueEntity(queueEntity);
    };

    /* ----- Create Table ----- */
    let table = props.queueData === undefined ? <LoadingSpinner/> : <Table
        defaultColumns={["Plassering", "Navn", "Emne", "Arena"]}
        loggedInColumns={["Handlinger"]}
        queueData={props.queueData}
        isAuthenticated={props.isAuthenticated}
        userRoles={props.userRoles}
        confirmDoneEntity={props.confirmDoneEntity}
        deleteQueueEntity={props.deleteQueueEntity}
    />;

    const formElements = {nameInput, subjectSelect, yearSelect, digitalConsultationSelect}
    const form = <form onSubmit={handleSubmit(registrationHandler)}
                       className={"form-inline mt-5 mb-5 " + styles.queueForm} style={{margin: "auto", width: "50%"}}>
        {Object.values(formElements).map(formElement => {

            let forwardRef: Ref<any> = register
            if (formElement.inputType === FormElementType.INPUT) {
                let currentElement = formElement as IConfiguredTextInput
                forwardRef = register({
                    required: currentElement.validation.errorMessage,
                    minLength: {value: currentElement.validation.minLength, message: currentElement.validation.errorMessage}
                })
            }

            return (
                <Input
                    key={formElement.name}
                    formElement={formElement}
                    ref={forwardRef}
                    error={errors.firstname}
                />
            )
        })}

        <SubmitButton className={"ml-2 mr-2 mt-2"}>Registrer</SubmitButton>
    </form>

    return (
        <>
            {form}
            {table}
        </>
    );

}

export default Queue