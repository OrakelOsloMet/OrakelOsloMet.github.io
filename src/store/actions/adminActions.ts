import {AdminActionTypes} from "./actionTypes";
import {AdminDispatch} from "../types";
import axios from "../../axiosAPI";
import {SUBJECTS_PATH} from "../../constants/constants";
import {fetchSubjects} from "./queueActions";


//TODO Split stores and reducers up by the type of model they are working with rather than their associated functionality
const addSubjectStart = () => {
    return {
        type: AdminActionTypes.ADD_SUBJECT_START
    }
};

const addSubjectSuccess = () => {
    return {
        type: AdminActionTypes.ADD_SUBJECT_SUCCESS,
    }
};

const addSubjectFail = (error: string) => {
    return {
        type: AdminActionTypes.ADD_SUBJECT_FAIL,
        error: error
    }
};

export const addSubject = (subject: ISubject) => {
    return (dispatch: AdminDispatch) => {
        dispatch(addSubjectStart());

        axios.post(SUBJECTS_PATH, subject)
            .then(()=> {
                dispatch(addSubjectSuccess());
                dispatch(fetchSubjects());
            })
            .catch(error => {
                dispatch(addSubjectFail(error.response.data));
            })
    }
}