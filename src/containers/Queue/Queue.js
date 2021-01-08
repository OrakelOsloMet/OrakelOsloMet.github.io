import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {useForm} from "react-hook-form";
import styles from "./Queue.module.css"

import * as actions from "../../store/actions/actionIndex";
import {INPUT, SELECT} from "../../constants/constants";
import Table from "../../components/UI/Tables/QueueTable";
import {SubmitButton} from "../../components/UI/Buttons/Buttons";
import {withPolling} from "../../higherOrderedComponents/withPolling/withPolling";
import {convertObjectStringsToPrimitives} from "../../utilities/objectUtilities";
import Input from "../../components/UI/Inputs/Input"

const Queue = (props) => {
    const {register, handleSubmit, reset, errors, formState: {isSubmitSuccessful}} = useForm();

    const [formElements, setFormElements] = useState({
        firstname: {
            name: "firstname",
            inputType: INPUT,
            inputConfig: {
                type: "text",
                placeholder: "Fornavn"
            }
        },

        subject: {
            name: "subject",
            inputType: SELECT,
            inputConfig: {
                options: []
            }
        },

        year: {
            name: "year",
            inputType: SELECT,
            inputConfig: {
                options: [
                    {value: 1, displayValue: "1. år"},
                    {value: 2, displayValue: "2. år"},
                    {value: 3, displayValue: "3. år"}
                ]
            }
        },

        digitalConsultation: {
            name: "digitalConsultation",
            inputType: SELECT,
            inputConfig: {
                options: [
                    {value: false, displayValue: "Fysisk Veiledning (Datatorget)"},
                    {value: true, displayValue: "Digital Veiledning (Discord)"}
                ]
            }
        }
    })

    //Use effect only to be triggered when the component is first rendered.
    useEffect(() => {
        fillSubjectSelector();
    }, [props.subjects])

    //Use effect to run whenever the form is submited successfully.
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset])

    const fillSubjectSelector = () => {
        const subjectListUpdated = {...formElements};

        props.subjects.forEach(subject => {
            subjectListUpdated.subject.inputConfig.options.push({value: subject, displayValue: subject});
        });

        setFormElements(subjectListUpdated);
    };

    const registrationHandler = (formData) => {
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
    const table = <Table
        defaultColumns={["Plassering", "Navn", "Emne", "Arena"]}
        loggedInColumns={["Handlinger"]}
        queueData={props.queueData}
        isAuthenticated={props.isAuthenticated}
        userRoles={props.userRoles}
        confirmDoneEntity={props.confirmDoneEntity}
        deleteQueueEntity={props.deleteQueueEntity}
    />;

    const form = <form onSubmit={handleSubmit(registrationHandler)} className={"form-inline mt-5 mb-5 " + styles.queueForm} style={{margin: "auto", width: "50%"}}>
        {Object.values(formElements).map(formElement => {
            //TODO Find a dynamic solution for passing refs and errors in case more fields with input validation are added. Do this once this file is converted to Typescript.
            const forwardRef = formElement.name === "firstname" ? register({required: "Oppgi Fornavn", minLength: {value: 3, message: "Navn må ha minst 3 bokstaver"}}) : register

            return (
                <Input
                    key={formElement.name}
                    formElement={formElement}
                    ref={forwardRef}
                    error={errors.firtname}
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

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token != null,
        userRoles: state.auth.userRoles,
        queueData: state.queue.queueData,
        subjects: state.queue.subjectData,
        loading: state.queue.loading,
        error: state.queue.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addQueueEntity: (queueEntity) => dispatch(actions.addToQueue(queueEntity)),
        deleteQueueEntity: (id) => dispatch(actions.deleteFromQueue(id)),
        confirmDoneEntity: (id) => dispatch(actions.doneInQueue(id))
    }
};

export default withPolling(actions.fetchQueue())(connect(mapStateToProps, mapDispatchToProps)(Queue));