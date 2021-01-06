import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {useForm} from "react-hook-form";

import * as actions from "../../store/actions/actionIndex";
import Table from "../../components/UI/Tables/QueueTable";
import Input from "../../components/UI/Input/Input";
import {SubmitButton} from "../../components/UI/Buttons/Buttons";
import {withPolling} from "../../higherOrderedComponents/withPolling/withPolling";
import {convertObjectStringsToPrimitives} from "../../utilities/objectUtilities";

const Queue = (props) => {
    const {register, handleSubmit, reset, errors, formState: {isSubmitSuccessful}} = useForm();

    const [subjectState, setSubjectState] = useState({
        subjects: {
            options: []
        }
    })

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }

        fillSubjectSelector();

    }, [props.subjects, isSubmitSuccessful, reset])

    const fillSubjectSelector = () => {
        const subjectListUpdated = {...subjectState};

        props.subjects.forEach(subject => {
            subjectListUpdated.subjects.options.push({value: subject, displayValue: subject});
        });

        setSubjectState(subjectListUpdated);
        console.log(subjectState);
    };

    const registrationHandler = (data) => {
        const queueEntry = convertObjectStringsToPrimitives(data);
        postNewQueueEntry(queueEntry);
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

    const form = <form onSubmit={handleSubmit(registrationHandler)} className="form-inline mt-3">
        <input className={"form-control ml-2 mr-2 mt-2"} placeholder={"Fornavn"} name={"name"} ref={register({required: "Oppgi Fornavn", minLength: {value: 3, message: "Navn må ha minst 3 bokstaver"}})}/>
        <select className={"form-control ml-2 mr-2 mt-2"} name={"subject"} ref={register}>
            <option value={"Programmering"}>Programmering</option>
            <option value={"Diskret Matte"}>Diskret Matte</option>
        </select>
        <select className={"form-control ml-2 mr-2 mt-2"} name={"year"} ref={register}>
            <option value={1}>1. år</option>
            <option value={2}>2. år</option>
        </select>
        <select className={"form-control ml-2 mr-2 mt-2"} name={"discord"} ref={register}>
            <option value={false}>Fysisk Veiledning (Datatorget)</option>
            <option value={true}>Digital Veiledning (Discord)</option>
        </select>
        {errors.name && <p>{errors.name.message}</p>}
        <SubmitButton className={"ml-2 mr-2 mt-2"}>Registrer</SubmitButton>
    </form>

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