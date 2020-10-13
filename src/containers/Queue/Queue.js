import React, {Component} from "react";

import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import Table from "../../components/UI/Table/Table";
import Input from "../../components/UI/Input/Input";
import {inputChangedHandler} from "../../utilities/formUtilities";
import Button from "../../components/UI/Button/Button";
import QueueService from "../../services/queue/queue.service";

export class Queue extends Component {

    state = {
        queueData: [],
        loading: true,
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
        this.getQueueData();

        const subjectListUpdated = {...this.state.form};

        QueueService.getSubjects().then(subjects => {
            subjects.forEach(subject => {
                subjectListUpdated.subject.inputConfig.options.push({value: subject, displayValue: subject})
            })
        });

        this.setState({form: subjectListUpdated})


        //Refresh the queue data once a minute
        /* setInterval(() => {
            this.getQueueData();
        }, 60000); */
    }

    getQueueData = () => {
        QueueService.getQueueData().then(data => {
            this.setState({queueData: data, loading: false})
        });
    };

    postNewQueueEntry = (formData) => {
        const queueEntity = {
            name: formData.name,
            subject: formData.subject,
            digitalConsultation: formData.discord,
            studyYear: formData.year
        };

        QueueService.postQueueEntry(queueEntity).then(() => {
            this.getQueueData();
        })
    };

    deleteQueueEntry = (queueEntity) => {
        QueueService.deleteQueueEntryById(queueEntity.id).then(() => {
            this.getQueueData();
        })
    };

    confirmDoneQueueEntry = (queueEntity) => {
        QueueService.confirmDone(queueEntity.id).then(() => {
            this.getQueueData();
        });
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
    };


    render() {
        let table = this.state.loading ? <LoadingSpinner/> : <Table
            entities={this.state.queueData}
            deleteOnClick={this.deleteQueueEntry}
            confirmDoneOnClick={this.confirmDoneQueueEntry}/>;

        const formElements = [];
        for (let key in this.state.form) {
            formElements.push({
                id: key,
                config: this.state.form[key]
            });
        }

        let form = <form onSubmit={this.registrationHandler} className="form-inline mt-3">
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
            <Button btnType="Success" styling="ml-2 mr-2 mt-2 btn btn-primary" disabled={!this.state.formIsValid}>Registrer</Button>
        </form>;

        return (
            <>
                {table}
                <h1 className="text-left ml-2 mr-2 mt-5">Køregistrering: </h1>
                {form}
            </>
        );
    }

}

export default Queue; //withErrorHandler(Queue, axios);