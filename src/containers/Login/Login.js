import React, {Component} from "react";
import {connect} from "react-redux";

import * as actions from "../../store/actions/actionIndex";
import {clearFormInputs, inputChangedHandler} from "../../utilities/formUtilities";
import Input from "../../components/UI/Input/Input";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import FormModal from "../../components/UI/Modals/FormModal/FormModal";

class Login extends Component {
    state = {
        form: {
            username: {
                inputType: "input",
                inputConfig: {
                    type: "text",
                    placeholder: "Brukernavn"
                },
                value: "",
                label: "Brukernavn",
                validation: {
                    required: true,
                    maxLength: 30
                },
                valid: false,
                touched: false
            },
            password: {
                inputType: "input",
                inputConfig: {
                    type: "password",
                    placeholder: "Passord"
                },
                value: "",
                label: "Passord",
                validation: {
                    required: true,
                    maxLength: 150
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
    };

    submitHandler = () => {
        this.props.onLoginSubmit(this.state.form.username.value, this.state.form.password.value);
        const clearedForm = clearFormInputs(this.state.form);
        this.setState({form: clearedForm});
    };

    inputChangedHandler = (event, inputIdentifier) => {
        this.setState(inputChangedHandler(event, inputIdentifier, this.state.form));
    };

    render() {
        const formElements = [];
        for (let key in this.state.form) {
            formElements.push({
                id: key,
                config: this.state.form[key]
            });
        }

        let form = this.props.loading ? <LoadingSpinner/> :
            <form className="form-inline">
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
                {this.props.error ? <p className="mt-4" style={{color: "red"}}><strong>{this.props.error}</strong></p> : null}
            </form>;

        return (
            <FormModal
                form={form}
                formIsValid={this.state.formIsValid}
                loginHandler={this.submitHandler}
                show={this.props.showModal}
                onHide={this.props.hideLoginModal}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        showModal: state.auth.showModal
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoginSubmit: (username, password) => dispatch(actions.auth(username, password)),
        hideLoginModal: () => dispatch(actions.toggleLoginModal(true))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);