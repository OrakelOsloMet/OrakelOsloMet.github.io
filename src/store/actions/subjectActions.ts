import {SubjectActionTypes} from "./actionTypes";
import {SubjectDispatch} from "../types";
import axios from "../../axiosAPI";
import {CURRENT_SUBJECTS_PATH, SUBJECTS_PATH} from "../../constants/constants";

/* ----- Fetch Subjects ----- */

const fetchSubjectsStart = () => {
    return {
        type: SubjectActionTypes.FETCH_SUBJECTS_START
    }
};

const fetchAllSubjectsSuccess = (subjectData: Array<ISubject>) => {
    return {
        type: SubjectActionTypes.FETCH_SUBJECTS_SUCCESS,
        allSubjectData: subjectData
    }
};

const fetchCurrentSubjectsSuccess = (subjectData: Array<ISubject>) => {
    return {
        type: SubjectActionTypes.FETCH_SUBJECTS_SUCCESS,
        currentSubjectData: subjectData
    }
}

const fetchSubjectsFail = (error: string) => {
    return {
        type: SubjectActionTypes.FETCH_SUBJECTS_FAIL,
        error: error
    }
};

export const fetchSubjects = (allSubjects: boolean = false) => {
    return (dispatch: SubjectDispatch) => {
        dispatch(fetchSubjectsStart());

        const path = allSubjects ? SUBJECTS_PATH : CURRENT_SUBJECTS_PATH;

        axios.get(path)
            .then(response => {
                allSubjects ? dispatch(fetchAllSubjectsSuccess(response.data)) : dispatch(fetchCurrentSubjectsSuccess(response.data));
            }).catch(error => {
            dispatch(fetchSubjectsFail(error.response));
        });
    }
};

/* ----- Add Subject ----- */

const addSubjectStart = () => {
    return {
        type: SubjectActionTypes.ADD_SUBJECT_START
    }
};

const addSubjectSuccess = () => {
    return {
        type: SubjectActionTypes.ADD_SUBJECT_SUCCESS,
    }
};

const addSubjectFail = (error: string) => {
    return {
        type: SubjectActionTypes.ADD_SUBJECT_FAIL,
        error: error
    }
};

export const addSubject = (subject: ISubject) => {
    return (dispatch: SubjectDispatch) => {
        dispatch(addSubjectStart());

        axios.post(SUBJECTS_PATH, subject)
            .then(()=> {
                dispatch(addSubjectSuccess());
                dispatch(fetchSubjects(true));
            })
            .catch(error => {
                dispatch(addSubjectFail(error.response.data));
            })
    }
}