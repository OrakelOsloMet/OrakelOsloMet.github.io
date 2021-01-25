import React, {FC, useEffect, useState} from "react";
import {DeleteButton, SubmitButton} from "../../UI/Buttons/buttons";
import {useForm} from "react-hook-form";
import TextInput from "../Inputs/textInput";
import SelectInput from "../Inputs/selectInput";
import {FormElementType, NEW_SUBJECT} from "../../../constants/constants";
import {convertObjectStringsToPrimitives} from "../../../utilities/objectUtilities";
import {createUseFormRef, inputHasError} from "../../../utilities/formUtilities";
import {SubjectDispatch} from "../../../store/types";
import {IRadioConfig, ISelectConfig, ITextConfig} from "../../../models/inputModels";
import RadioInput from "../Inputs/radioInput";

enum FormElements {
    SELECTED_SUBJECT = "selectedSubject",
    NEW_SUBJECT_NAME = "newSubjectName",
    CHECKED_SEMESTER = "checkedSemester",
}

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
    const {NEW_SUBJECT_NAME, SELECTED_SUBJECT, CHECKED_SEMESTER} = FormElements;

    const [editState, setEditState] = useState<boolean>(false);
    const [subjectSelect, setSubjectSelect] = useState<ISelectConfig>({
        type: FormElementType.SELECT,
        name: SELECTED_SUBJECT,
        options: []
    });

    const [nameInput, setNameInput] = useState<ITextConfig>({
        type: FormElementType.TEXT,
        name: NEW_SUBJECT_NAME,
        placeholder: "Emnenavn",
        validation: {
            minLength: 3,
            errorMessage: "Vennligst oppgi et emnenavn på minst 3 bokstaver"
        },
    });

    const [checkedSemester, setCheckedSemester] = useState<IRadioConfig>({
        type: FormElementType.RADIO,
        name: CHECKED_SEMESTER,
        buttons: [
            {label: "Vår", value: 0, defaultChecked: true},
            {label: "Høst", value: 1, defaultChecked: false}
        ]
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
        subjectListUpdated.options = [];

        subjectListUpdated.options.push({value: {name: NEW_SUBJECT}, displayValue: NEW_SUBJECT})
        subjects?.forEach(subject => {
            subjectListUpdated.options.push({value: subject, displayValue: subject.name});
        });

        setSubjectSelect(subjectListUpdated);
    };

    const registrationHandler = (formData: any) => {

        const primitiveData = convertObjectStringsToPrimitives({
            selectedSubject: JSON.parse(formData.selectedSubject),
            newSubjectName: formData.newSubjectName,
            selectedSemester: formData.checkedSemester === "0" ? "Spring" : "Autumn",
        });

        if (editState) {
            subjects.forEach(subject => {
                if (primitiveData.selectedSubject.name === subject.name) {
                    const editedSubject = {
                        id: subject.id,
                        name: primitiveData.newSubjectName,
                        semester: primitiveData.selectedSemester
                    }

                    addEditSubject(editedSubject, true);
                }
            })
        } else {
            const newSubject = {
                id: 0, //Id is set in the API
                name: primitiveData.newSubjectName,
                semester: primitiveData.selectedSemester
            }

            addEditSubject(newSubject, false);
        }
    }

    const subjectSelectHandler = (event: any) => {
        const nameInputFilled = {...nameInput};
        const selectedSubject: ISubject = JSON.parse(event.target.value);

        if (selectedSubject.name !== NEW_SUBJECT) {
            setEditState(true);
            nameInputFilled.placeholder = "Nytt Emnenavn";

        } else {
            setEditState(false);
            nameInputFilled.placeholder = "Emnenavn";
        }

        setNameInput(nameInputFilled);
    }

    const form = <form className={"mt-2 mb-2"} style={{width: "80%", margin: "auto"}}>
        <SelectInput
            ref={createUseFormRef(subjectSelect, register)}
            inputConfig={subjectSelect}
            onChange={(event: any) => subjectSelectHandler(event)}
        />

        <TextInput
            ref={createUseFormRef(nameInput, register)}
            inputConfig={nameInput}
            error={inputHasError(errors, nameInput)}
        />

        <RadioInput ref={register} inputConfig={checkedSemester}/>

        <div className={"form-group"}>
            <SubmitButton onClick={handleSubmit(registrationHandler)}>{editState ? "Endre" : "Lagre"}</SubmitButton>
            {editState ? <DeleteButton className={"ml-2"} onClick={(event) => {event.preventDefault();console.log("DELETED");}}>Slett Emne</DeleteButton> : null}
        </div>
    </form>

    return (
        <>
            {form}
        </>
    )
}

export default SubjectForm;