import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {useForm} from "react-hook-form";

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
           inputType: INPUT,
           inputConfig: {
               type: "text",
               placeholder: "Fornavn"
           }
        },

        subject: {
            inputType: SELECT,
            inputConfig: {
                options: []
            }
        },

        year: {
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
    },[props.subjects])

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

    const registrationHandler = (data) => {
        const queueEntry = convertObjectStringsToPrimitives(data);
        postNewQueueEntry(queueEntry);
    };

    const postNewQueueEntry = (formData) => {
        const queueEntity = {
            name: formData.firstname,
            subject: formData.subject,
            digitalConsultation: formData.digitalConsultation,
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

    const form = <form onSubmit={handleSubmit(registrationHandler)} className="form-inline mt-2 mb-3">
        {Object.entries(formElements).map(formElement => (
            <Input
                key={formElement[0]}
                name={formElement[0]}
                ref={register}
                inputType={formElement[1].inputType}
                inputConfig={formElement[1].inputConfig}
            />
        ))}
        <SubmitButton className={"ml-2 mr-2 mt-2"}>Registrer</SubmitButton>
    </form>

    //TODO: Move styles to CSS module
    return (
        <>
            <div className={"row mt-3 mb-2 ml-2"}>
                <h1>Køregistrering: </h1>
                {errors.firstname && <h4 style={{color: "red", fontWeight: "bold"}} className={"mt-3 col-md-2"}>{errors.firstname.message}</h4>}
            </div>
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