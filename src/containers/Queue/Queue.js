import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

import * as actions from "../../store/actions/actionIndex";
import Table from "../../components/UI/Tables/QueueTable";
import Input from "../../components/UI/Input/Input";
import {SubmitButton} from "../../components/UI/Buttons/Buttons";
import {handleInputChange, clearFormInputs} from "../../utilities/formUtilities";
import {withPolling} from "../../higherOrderedComponents/withPolling/withPolling";

const Queue = (props) => {

    const [formIsValidState, setFormIsValidState] = useState(false);
    const [formState, setFormState] = useState({
            name: {
                inputType: "input",
                inputConfig: {
                    type: "text",
                    placeholder: "Fornavn"
                },
                value: "",
                label: "Navn",
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 30
                },
                valid: false,
                touched: false
            },

            subject: {
                inputType: "select",
                inputConfig: {
                    options: []
                },
                value: "Programmering",
                label: "Velg Emne",
                validation: {},
                valid: true
            },

            year: {
                inputType: "select",
                inputConfig: {
                    options: [
                        {value: 1, displayValue: "1. år"},
                        {value: 2, displayValue: "2. år"},
                        {value: 3, displayValue: "3. år"}
                    ]
                },
                value: 1,
                label: "Årstrinn",
                validation: {},
                valid: true
            },

            discord: {
                inputType: "select",
                inputConfig: {
                    options: [
                        {value: false, displayValue: "Fysisk Veiledning (Datatorget)"},
                        {value: true, displayValue: "Digital Veiledning (Discord)"},
                    ]
                },
                value: 0,
                label: "Veiledningsform",
                validation: {},
                valid: true
            },
        },
    )


    useEffect(() => {
        fillSubjectSelector();
    }, [props.subjects])

    const fillSubjectSelector = () => {
        const subjectListUpdated = {...formState};

        props.subjects.forEach(subject => {
            subjectListUpdated.subject.inputConfig.options.push({value: subject, displayValue: subject});
        });

        setFormState(subjectListUpdated);
    };

    const inputChangeHandler = (event, inputIdentifier) => {
        const {updatedForm, updatedFormIsValid} =  handleInputChange(event, inputIdentifier, formState);
        setFormState(updatedForm);
        setFormIsValidState(updatedFormIsValid);
    };

    const registrationHandler = (event) => {
        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in formState) {
            formData[formElementIdentifier] = formState[formElementIdentifier].value;
        }

        postNewQueueEntry(formData);
        const clearedForm = clearFormInputs(formState);
        setFormState(clearedForm);
        setFormIsValidState(false);
    };

    const postNewQueueEntry = (formData) => {
        const queueEntity = {
            name: formData.name,
            subject: formData.subject,
            digitalConsultation: formData.discord,
            studyYear: formData.year
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

    /* ----- Create Form ----- */

    const formElements = [];
    for (let key in formState) {
        formElements.push({
            id: key,
            config: formState[key]
        });
    }

    const form = <form onSubmit={registrationHandler} className="form-inline mt-3">
        {formElements.map(formElement => (
            <Input
                key={formElement.id}
                inputType={formElement.config.inputType}
                inputConfig={formElement.config.inputConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                label={formElement.config.label}
                changeHandler={(event) => inputChangeHandler(event, formElement.id)}
            />
        ))}
        <SubmitButton className={"ml-2 mr-2 mt-2"} disabled={!formIsValidState}>Registrer</SubmitButton>
    </form>;

    return (
        <>
            {table}
            <h1 className={"text-left ml-2 mr-2 mt-5"}>Køregistrering: </h1>
            {form}
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