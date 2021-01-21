import React, {FC, Ref, useState} from "react";
import {DeleteButton, SubmitButton} from "../../Buttons/buttons";
import {useForm} from "react-hook-form";
import {IConfiguredSelect, IConfiguredTextInput} from "../../../../models/inputModels";
import {FormElementType} from "../../../../constants/constants";
import {convertObjectStringsToPrimitives} from "../../../../utilities/objectUtilities";
import Input from "../Inputs/input";

type Props = {
    subjects?: Array<ISubject>;
    loading?: boolean;
    error?: string | null;
    addSubject?: Function;
    editSubject?: Function;
    deleteSubject?: Function;
}

const SubjectForm: FC<Props> = (props) => {
    const {register, handleSubmit, reset, errors, formState: {isSubmitSuccessful}} = useForm();


    const [subjectSelect, setSubjectSelect] = useState<IConfiguredSelect>({
        name: "subject",
        inputType: FormElementType.SELECT,
        inputConfig: {
            options: [
                {value: "Programmering", displayValue: "Programmering"},
                {value: "Matte1000", displayValue: "Matte1000"},
                {value: "Apputvikling", displayValue: "Apputvikling"}
            ]
        }
    });

    const [nameInput, setNameInput] = useState<IConfiguredTextInput>({
        name: "subjectName",
        inputType: FormElementType.INPUT,
        inputConfig: {
            type: "text",
            placeholder: "Emnenavn"
        },
        validation: {
            minLength: 3,
            errorMessage: "Vennligst oppgi et emnenavn på minst 3 bokstaver"
        }
    })
    const [semesterSelect, setSemesterSelect] = useState<IConfiguredSelect>({
        name: "semester",
        inputType: FormElementType.SELECT,
        inputConfig: {
            options: [
                {value: "SPRING", displayValue: "Vår"},
                {value: "AUTUMN", displayValue: "Høst"}
            ]
        }
    });

    const registrationHandler = (formData: any) => {
        const primitiveData = convertObjectStringsToPrimitives(formData);
        console.log(primitiveData);
    }

    const formElements = {subjectSelect, nameInput, semesterSelect};
    const form =
        <form className={"mt-2 mb-2"}
              style={{width: "80%", margin: "auto"}}>
            {Object.values(formElements).map(formElement => {

                let forwardRef: Ref<any> = register;

                if (formElement.inputType === FormElementType.INPUT) {
                    let currentElement = formElement as IConfiguredTextInput
                    forwardRef = register({
                        required: currentElement.validation.errorMessage,
                        minLength: {
                            value: currentElement.validation.minLength,
                            message: currentElement.validation.errorMessage
                        }
                    })
                }

                let errorInInput = false;
                for (const key of Object.entries(errors)) {
                    if (key[0] === formElement.name) {
                        errorInInput = true;
                    }
                }

                return (
                    <Input
                        key={formElement.name}
                        formElement={formElement}
                        ref={forwardRef}
                        error={errorInInput}
                    />
                )
            })}

            <div className={"form-group"}>
                <SubmitButton onClick={handleSubmit(registrationHandler)}>Lagre</SubmitButton>
                <DeleteButton className={"ml-2"} onClick={(event) => {event.preventDefault(); console.log("DELETED");}}>Slett Emne</DeleteButton>
            </div>
        </form>

    return (
        <>
            {form}
        </>
    )
}

export default SubjectForm;