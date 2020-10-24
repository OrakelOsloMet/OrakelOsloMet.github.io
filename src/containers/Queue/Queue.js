import React, {Component} from "react";
import {connect} from "react-redux";

import * as actions from "../../store/actions/actionIndex";
import Table from "../../components/UI/Tables/QueueTable";
import Input from "../../components/UI/Input/Input";
import {SubmitButton} from "../../components/UI/Buttons/Buttons";
import {inputChangedHandler, clearFormInputs} from "../../utilities/formUtilities";
import {withPolling} from "../../higherOrderedComponents/withPolling/withPolling";

export class Queue extends Component {

    state = {
        form: {
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

            //Indicates if the student wants digital consultation or not. In the database 1 is true and 0 is false.
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
        formIsValid: false
    };

    componentDidMount() {
        //TODO This is NOT a good way to make sure data is being filled into the selector. Look into Redux-forms.
        setTimeout(() => {
            this.fillSubjectSelector();
        }, 1000);
    }

    fillSubjectSelector = () => {
        const subjectListUpdated = {...this.state.form};

        this.props.subjects.forEach(subject => {
            subjectListUpdated.subject.inputConfig.options.push({value: subject, displayValue: subject})
        });

        this.setState({form: subjectListUpdated});
    };

    inputChangedHandler = (event, inputIdentifier) => {
        this.setState(inputChangedHandler(event, inputIdentifier, this.state.form));
    };

    registrationHandler = (event) => {
        event.preventDefault();

        const formData = {};
        for(let formElementIdentifier in this.state.form) {
            formData[formElementIdentifier] = this.state.form[formElementIdentifier].value;
        }

        this.postNewQueueEntry(formData);
        const clearedForm = clearFormInputs(this.state.form);
        this.setState({form: clearedForm, formIsValid: false});
    };

    postNewQueueEntry = (formData) => {
        const queueEntity = {
            name: formData.name,
            subject: formData.subject,
            digitalConsultation: formData.discord,
            studyYear: formData.year
        };

        this.props.addQueueEntity(queueEntity);
    };


    render() {

        /* ----- Create Table ----- */
        const defaultColumns = ["Plassering", "Navn", "Emne", "Arena"];
        const adminColumns = ["Handlinger"];

        const table = <Table
            defaultColumns={defaultColumns}
            loggedInColumns={adminColumns}
            queueData={this.props.queueData}
            isAuthenticated={this.props.isAuthenticated}
            userRoles={this.props.userRoles}
            confirmDoneEntity={this.props.confirmDoneEntity}
            deleteQueueEntity={this.props.deleteQueueEntity}

        />;

        /* ----- Create Form ----- */

        const formElements = [];
        for (let key in this.state.form) {
            formElements.push({
                id: key,
                config: this.state.form[key]
            });
        }

        const form = <form onSubmit={this.registrationHandler} className="form-inline mt-3">
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
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
            ))}
            <SubmitButton className={"ml-2 mr-2 mt-2"} disabled={!this.state.formIsValid}>Registrer</SubmitButton>
        </form>;

        return (
            <>
                {table}
                <h1 className={"text-left ml-2 mr-2 mt-5"}>Køregistrering: </h1>
                {form}
            </>
        );
    }

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