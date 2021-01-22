import React, {FC, useEffect, useState} from "react";
import {DeleteButton, SubmitButton} from "../../UI/Buttons/buttons";
import {useForm} from "react-hook-form";
import {IConfiguredSelect, IConfiguredTextInput} from "../../../models/inputModels";
import {FormElementType, NEW_SUBJECT} from "../../../constants/constants";
import {convertObjectStringsToPrimitives} from "../../../utilities/objectUtilities";
import Input from "../Inputs/input";
import {createUseFormRef, inputHasError} from "../../../utilities/formUtilities";
import {SubjectDispatch} from "../../../store/types";

type Props = {
    subjects: Array<ISubject>;
    loading: boolean;
    error: string | null;
    fetchSubjects: (allSubjects?: boolean) => (dispatch: SubjectDispatch) => void;
    addEditSubject: (subject: ISubject, edit: boolean) => void;
    deleteSubject?: Function; //TODO improve typing when implemented
}

const SubjectForm: FC<Props> = (props) => {
    const {subjects, loading, error, fetchSubjects, addEditSubject, deleteSubject} = props;
    const {register, handleSubmit, reset, errors, formState: {isSubmitSuccessful}} = useForm();

    const [editState, setEditState] = useState<boolean>(false);
    const [subjectSelect, setSubjectSelect] = useState<IConfiguredSelect>({
        name: "subject",
        inputType: FormElementType.SELECT,
        inputConfig: {
            options: []
        }
    });

    const [nameInput, setNameInput] = useState<IConfiguredTextInput>({
        name: "newSubjectName",
        inputType: FormElementType.INPUT,
        inputConfig: {
            type: "text",
            placeholder: "Emnenavn",
        },
        validation: {
            minLength: 3,
            errorMessage: "Vennligst oppgi et emnenavn på minst 3 bokstaver"
        },
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
        if (subjects.length > 0) {
            fillSubjectSelector();
        } else {
            fetchSubjects(true);
        }
    }, [subjects])

    const fillSubjectSelector = () => {
        const subjectListUpdated = {...subjectSelect};
        subjectListUpdated.inputConfig.options = [];

        subjectListUpdated.inputConfig.options.push({value: NEW_SUBJECT, displayValue: NEW_SUBJECT})
        subjects?.forEach(subject => {
            subjectListUpdated.inputConfig.options.push({value: subject.name, displayValue: subject.name});
        });

        setSubjectSelect(subjectListUpdated);
    };

    const registrationHandler = (formData: any) => {
        const primitiveData = convertObjectStringsToPrimitives(formData);

        if (editState) {
            subjects.forEach(subject => {
                if (primitiveData.subject === subject.name) {
                   const editedSubject = {
                       id: subject.id,
                       name: primitiveData.newSubjectName,
                       semester: primitiveData.semester
                   }

                   console.log("POSTING EDITED ENTITY: ", editedSubject);
                   addEditSubject(editedSubject, true);
                }
            })
        } else {
            const newSubject = {
                id: 0, //Id is set in the API
                name: primitiveData.newSubjectName,
                semester: primitiveData.semester
            }

            console.log("POSTING NEW ENTITY: ", newSubject);
            addEditSubject(newSubject, false);
        }
    }

    const subjectSelectHandler = (event: any) => {
        const nameInputFilled = {...nameInput};

        if (event.target.value !== NEW_SUBJECT) {
            setEditState(true);
            nameInputFilled.inputConfig.defaultValue = event.target.value;
        } else {
            setEditState(false);
            nameInputFilled.inputConfig.defaultValue = "";
        }

        setNameInput(nameInputFilled);
    }

    const formElements = {subjectSelect, nameInput, semesterSelect};
    const form =
        <form className={"mt-2 mb-2"} style={{width: "80%", margin: "auto"}}>
            {Object.values(formElements).map(formElement => {

                return (
                    <Input
                        key={formElement.name}
                        formElement={formElement}
                        ref={createUseFormRef(formElement, register)}
                        error={inputHasError(errors, formElement)}
                        onChange={formElement.name === "subject" ? (event: any) => subjectSelectHandler(event): undefined}
                    />
                )
            })}

            <div className={"form-group"}>
                <SubmitButton onClick={handleSubmit(registrationHandler)}>Lagre</SubmitButton>
                {editState ? <DeleteButton className={"ml-2"} onClick={(event) => {event.preventDefault(); console.log("DELETED");}}>Slett Emne</DeleteButton> : null}
            </div>
        </form>

    return (
        <>
            {form}
        </>
    )
}

export default SubjectForm;