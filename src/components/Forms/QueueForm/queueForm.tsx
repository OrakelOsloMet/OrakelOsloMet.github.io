import React, {FC, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import styles from "./queueForm.module.css"

import {FormElementType, PLACEMENTS_PATH} from "../../../constants/constants";
import {SubmitButton} from "../../UI/Buttons/buttons";
import {convertObjectStringsToPrimitives} from "../../../utilities/objectUtilities";
import {ISelectConfig, ITextConfig, IValidatedTextConfig} from "../../../models/inputModels";
import {createUseFormRef, inputHasError} from "../../../utilities/formUtilities";
import Input from "../Inputs/input";
import Select from "../Inputs/select";
import {IPlacement, IQueueEntity, ISubject} from "../../../models/types";
import {REST_INSTANCE as axios} from "../../../axiosAPI"

enum FormElements {
    FIRSTNAME = "firstname",
    SUBJECT = "subject",
    PLACEMENT = "placement",
    YEAR = "year",
    DIGITAL = "digitalConsultation",
    COMMENT = "comment",
}

type FormValues = {
    firstname: string,
    placement: number,
    subject: string,
    year: string,
    digital: string
}

type Props = {
    subjects: Array<ISubject>;
    loading: boolean;
    error: string | null;
    addQueueEntity: (queueEntity: IQueueEntity) => void;
}

const QueueForm: FC<Props> = (props) => {

    /* ----- Initialize State, Subcomponents and get Props ----- */

    const {subjects, addQueueEntity} = props;
    const {register, handleSubmit, reset, errors, formState: {isSubmitSuccessful}} = useForm();

    const [placements, setPlacements] = useState<IPlacement[]>([]);

    const [nameInput] = useState<IValidatedTextConfig>({
        type: FormElementType.VALIDATED_TEXT,
        name: FormElements.FIRSTNAME,
        placeholder: "Fornavn",
        validation: {
            minLength: 3,
            errorMessage: "Vennligst oppgi et fornavn på minst 3 bokstaver"
        }
    });

    const [subjectSelect, setSubjectSelect] = useState<ISelectConfig>({
        type: FormElementType.SELECT,
        name: FormElements.SUBJECT,
        options: []
    });

    const [digitalConsultationSelect] = useState<ISelectConfig>({
        type: FormElementType.SELECT,
        name: FormElements.DIGITAL,
        options: [
            {value: false, displayValue: "Fysisk Veiledning (Pilestredet)"},
            {value: true, displayValue: "Digital Veiledning (Discord)"}
        ]
    });

    const [placementSelect, setPlacementSelect] = useState<ISelectConfig>({
        type: FormElementType.SELECT,
        name: FormElements.PLACEMENT,
        options: []
    });

    const [yearSelect] = useState<ISelectConfig>({
        type: FormElementType.SELECT,
        name: FormElements.YEAR,
        options: [
            {value: 1, displayValue: "1. år"},
            {value: 2, displayValue: "2. år"},
            {value: 3, displayValue: "3. år"}
        ]
    });

    const [commentInput] = useState<ITextConfig>({
        type: FormElementType.TEXT,
        name: FormElements.COMMENT,
        placeholder: "Kommentar, eks: \"Har på rød lue\"",
    });

    //Use effect only to be triggered when the component is first rendered.
    useEffect(() => {
        if (typeof subjects !== 'undefined' && subjects.length > 0) {
            fillSubjectSelector();
        }

        getPlacementData().then((placementData) => {
            setPlacements(placementData);
            fillPlacementsSelector(placements);
        });

    }, [subjects])

    /* ----- Helper Functions ----- */

    //Use effect to run whenever the form is submitted successfully.
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset])

    const fillSubjectSelector = () => {
        const subjectListUpdated = {...subjectSelect};
        subjectListUpdated.options = [];

        subjects?.forEach(subject => {
            subjectListUpdated.options.push({value: subject.name, displayValue: subject.name});
        });

        setSubjectSelect(subjectListUpdated);
    };

    const getPlacementData = (): Promise<IPlacement[]> => {
        return axios.get(PLACEMENTS_PATH)
            .then(response => {
                return response.data;
            });
    }

    const fillPlacementsSelector = (placements: IPlacement[]) => {
        const placementListUpdated = {...placementSelect};
        placementListUpdated.options = [];

        placements.forEach(placement => {
            placementListUpdated.options.push({
                value: placement.id,
                displayValue: placement.name + " " + placement.number
            })
        });

        setPlacementSelect(placementListUpdated);
    }

    const registrationHandler = (formData: FormValues) => {
        const primitiveFormData = convertObjectStringsToPrimitives(formData);
        const foundPlacement = placements.find(placement => placement.id === primitiveFormData.placement);

        if (typeof foundPlacement !== 'undefined') {
            const queueEntity: IQueueEntity = {
                id: 0, //Set in the API
                name: primitiveFormData.firstname,
                subject: primitiveFormData.subject,
                digitalConsultation: primitiveFormData.digitalConsultation,
                placement: foundPlacement,
                comment: primitiveFormData.comment,
                studyYear: primitiveFormData.year
            };

            addQueueEntity(queueEntity);
        }
    };

    /* ----- JSX Layout ----- */

    const form =
        <form onSubmit={handleSubmit(registrationHandler)} className={"form-inline mt-5 mb-5 " + styles.queueForm}>
            <Input inputConfig={nameInput} error={inputHasError(errors, nameInput)}
                   ref={createUseFormRef(nameInput, register)}/>
            <Select inputConfig={subjectSelect} ref={createUseFormRef(subjectSelect, register)}/>
            <Select inputConfig={digitalConsultationSelect} ref={createUseFormRef(yearSelect, register)}/>
            <Select inputConfig={placementSelect} ref={createUseFormRef(placementSelect, register)}/>
            <Select inputConfig={yearSelect} ref={createUseFormRef(yearSelect, register)}/>
            <Input inputConfig={commentInput} error={inputHasError(errors, commentInput)}
                   ref={createUseFormRef(commentInput, register)}/>
            <SubmitButton className={"ml-2 mr-2"}>Registrer</SubmitButton>
        </form>

    return (
        <div className={"bg-white pb-1 pt-1"}>
            {form}
        </div>
    );

}

export default QueueForm