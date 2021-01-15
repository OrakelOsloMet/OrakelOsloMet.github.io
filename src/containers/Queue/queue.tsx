import React, {FC, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import styles from "./queue.module.css"

import * as actions from "../../store/actions/actionIndex";
import {FormElementType} from "../../constants/constants";
import Table from "../../components/UI/Tables/queueTable";
import {SubmitButton} from "../../components/UI/Buttons/buttons";
import {withPolling} from "../../higherOrderedComponents/withPolling/withPolling";
import {convertObjectStringsToPrimitives} from "../../utilities/objectUtilities";
import Input from "../../components/UI/Inputs/input"
import {IConfiguredSelect, IConfiguredTextInput} from "../../models/inputModels";
import LoadingSpinner from "../../components/UI/LoadingSpinner/loadingSpinner";

type Props = {
    isAuthenticated: boolean;
    userRoles: string[];
    queueData: IQueueEntity[];
    subjects: string[];
    loading: boolean;
    error: string;
    addQueueEntity: Function;
    deleteQueueEntity: Function;
    confirmDoneEntity: Function;
    pollingFunction: Function
}

const Queue: FC<Props> = (props) => {
    const {register, handleSubmit, reset, errors, formState: {isSubmitSuccessful}} = useForm();

    const [nameInput, setNameInput] = useState<IConfiguredTextInput>({
        name: "firstname",
        inputType: FormElementType.INPUT,
        inputConfig: {
            type: "text",
            placeholder: "Fornavn"
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
            subjectListUpdated.inputConfig.options.push({value: subject, displayValue: subject});
        });

        setSubjectSelect(subjectListUpdated);
    };

    const registrationHandler = (formData: any) => {
        const primitiveFormData = convertObjectStringsToPrimitives(formData);
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

            //TODO Find a dynamic solution for passing refs and errors in case more fields with input validation are added. Do this once this file is converted to Typescript.
            const forwardRef = formElement.name === "firstname" ? register({
                required: "Oppgi Fornavn",
                minLength: {value: 3, message: "Navn må ha minst 3 bokstaver"}
            }) : register

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

/* This component still isn't completly disconnected from Redux while making a direct call to actions.fetchQueue here.
   For some stupid reason the connect function in queueConnected does not accept this component unless it is exported with
   withPolling... but in the navbar component that works just fine. Find out what is going on here.

   TODO finish decoupling the Queue component from Redux and withPolling
*/
export default withPolling(actions.fetchQueue())(Queue)