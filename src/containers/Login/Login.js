import React, {Component} from "react";
import {inputChangedHandler} from "../../utilities/formUtilities";
import Input from "../../components/UI/Input/Input";
import FormModal from "../../components/UI/Modals/FormModal/FormModal";
import AuthService from "../../services/auth/auth.service";

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
        loginFailed: false,
        loginErrorMessage: "",
    };

    loginHandler = (event) => {
        const formData = {};
        for(let formElementIdentifier in this.state.form) {
            formData[formElementIdentifier] = this.state.form[formElementIdentifier].value;
        }

        this.postLoginData(formData);
    };

    postLoginData = (formData) => {
        AuthService.login(formData.username, formData.password).then(() => {
            this.props.onHide();
            let clearedLoginForm = {...this.state.form};
            clearedLoginForm.username.value = "";
            clearedLoginForm.password.value = "";

            this.setState({loginForm: clearedLoginForm});
            this.props.loginHandler();
        }, error => {
            console.log(error);
        })
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

        let form =
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
                {this.state.loginFailed ? <p className="mt-4" style={{color: "red"}}><strong>{this.state.loginErrorMessage}</strong></p> : null}
            </form>;

        return (
            <FormModal
                form={form}
                formIsValid={this.state.formIsValid}
                loginHandler={this.loginHandler}
                show={this.props.show}
                onHide={this.props.onHide}/>
        );
    }
}

export default Login;