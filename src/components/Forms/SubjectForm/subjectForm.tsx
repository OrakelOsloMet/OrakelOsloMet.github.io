import React, {FC, useEffect, useState} from "react";
import {DeleteButton, SubmitButton} from "../../UI/Buttons/buttons";
import {useForm} from "react-hook-form";
import {IConfiguredSelect, IConfiguredTextInput} from "../../../models/inputModels";
import {FormElementType} from "../../../constants/constants";
import {convertObjectStringsToPrimitives} from "../../../utilities/objectUtilities";
import Input from "../Inputs/input";
import {createUseFormRef, inputHasError} from "../../../utilities/formUtilities";

type Props = {
    subjects: Array<ISubject>;
    loading: boolean;
    error: string | null;
    fetchSubjects: Function;
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
            options: []
        }
    });

    const [nameInput] = useState<IConfiguredTextInput>({
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
    const [semesterSelect] = useState<IConfiguredSelect>({
        name: "semester",
        inputType: FormElementType.SELECT,
        inputConfig: {
            options: [
                {value: "SPRING", displayValue: "Vår"},
                {value: "AUTUMN", displayValue: "Høst"}
            ]
        }
    });

    useEffect(() => {
        if (props.subjects.length > 0) {
            fillSubjectSelector();
        } else {
            props.fetchSubjects(true);
        }
    }, [props.subjects])

    const fillSubjectSelector = () => {
        const subjectListUpdated = {...subjectSelect};
        subjectListUpdated.inputConfig.options = [];

        props.subjects?.forEach(subject => {
            subjectListUpdated.inputConfig.options.push({value: subject.name, displayValue: subject.name});
        });

        setSubjectSelect(subjectListUpdated);
    };

    const registrationHandler = (formData: any) => {
        const primitiveData = convertObjectStringsToPrimitives(formData);
        console.log(primitiveData);
    }

    const formElements = {subjectSelect, nameInput, semesterSelect};
    const form =
        <form className={"mt-2 mb-2"}
              style={{width: "80%", margin: "auto"}}>
            {Object.values(formElements).map(formElement => {

                return (
                    <Input
                        key={formElement.name}
                        formElement={formElement}
                        ref={createUseFormRef(formElement, register)}
                        error={inputHasError(errors, formElement)}
                        onChange={(event: any) => console.log(event.target.value)}
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