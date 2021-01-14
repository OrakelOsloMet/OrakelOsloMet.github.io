import axios from "../../AxiosAPI";
import * as actionTypes from "./ActionTypes";
import {CONFIRM_DONE_PATH, QUEUE_PATH, SUBJECTS_PATH} from "../../constants/Constants";
import authHeader from "../../headers/AuthHeader";

/* ----- Fetch Queue Data ----- */

const fetchQueueStart = () => {
    return {
        type: actionTypes.FETCH_QUEUE_START
    }
};

const fetchQueueSuccess = (queueData) => {
    return {
        type: actionTypes.FETCH_QUEUE_SUCCESS,
        queueData: queueData
    }
};

const fetchQueueFail = (error) => {
    return {
        type: actionTypes.FETCH_QUEUE_FAIL,
        error: error
    }
};

export const fetchQueue = () => {
    return dispatch => {
        dispatch(fetchQueueStart());

        axios.get(QUEUE_PATH)
            .then(response => {
                dispatch(fetchQueueSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchQueueFail(error.response))
            })
    }
};

/* ----- Add to Queue ----- */

const addToQueueStart = () => {
    return {
        type: actionTypes.ADD_TO_QUEUE_START
    }
};

const addToQueueSuccess = () => {
    return {
        type: actionTypes.ADD_TO_QUEUE_SUCCESS
    }
};

const addToQueueFail = (error) => {
    return {
        type: actionTypes.ADD_TO_QUEUE_FAIL,
        error: error
    }
};

export const addToQueue = (queueEntity) => {
    return dispatch => {
        dispatch(addToQueueStart());
        axios.post(QUEUE_PATH, queueEntity)
            .then(() => {
                dispatch(addToQueueSuccess());
                dispatch(fetchQueue());
            })
            .catch(error => {
                dispatch(addToQueueFail(error.response));
            });
    }
};

/* ----- Delete From Queue ----- */

const deleteFromQueueStart = () => {
    return {
        type: actionTypes.DELETE_FROM_QUEUE_START
    }
};

const deleteFromQueueSuccess = () => {
    return {
        type: actionTypes.DELETE_FROM_QUEUE_SUCCESS
    }
};

const deleteFromQueueFail = (error) => {
    return {
        type: actionTypes.DELETE_FROM_QUEUE_FAIL,
        error: error
    }
};

export const deleteFromQueue = (id) => {
    return dispatch => {
        dispatch(deleteFromQueueStart());

        axios.delete(QUEUE_PATH + id, {headers: authHeader()})
            .then(() => {
                dispatch(deleteFromQueueSuccess());
                dispatch(fetchQueue());
            })
            .catch(error => {
                dispatch(deleteFromQueueFail(error.response));
            });
    }
};

/* ----- Done in Queue ----- */

const doneInQueueStart = () => {
    return {
        type: actionTypes.DONE_IN_QUEUE_START
    }
};

const doneInQueueSuccess = () => {
    return {
        type: actionTypes.DONE_IN_QUEUE_SUCCESS
    }
};

const doneInQueueFail = (error) => {
    return {
        type: actionTypes.DONE_IN_QUEUE_FAIL,
        error: error
    }
};

export const doneInQueue = (id) => {
    return dispatch => {
        dispatch(doneInQueueStart());

        axios.post(CONFIRM_DONE_PATH + id, null, {headers: authHeader()})
            .then(() => {
                dispatch(doneInQueueSuccess());
                dispatch(fetchQueue());
            })
            .catch(error => {
                dispatch(doneInQueueFail(error.response));
            });
    }
};

/* ----- Fetch Subjects ----- */

const fetchSubjectsStart = () => {
    return {
        type: actionTypes.FETCH_SUBJECTS_START
    }
};

const fetchSubjectsSuccess = (subjectData) => {
    return {
        type: actionTypes.FETCH_SUBJECTS_SUCCESS,
        subjectData: subjectData
    }
};

const fetchSubjectsFail = (error) => {
    return {
        type: actionTypes.FETCH_SUBJECTS_FAIL,
        error: error
    }
};

export const fetchSubjects = () => {
    return dispatch => {
        dispatch(fetchSubjectsStart());

        axios.get(SUBJECTS_PATH)
            .then(response => {
            dispatch(fetchSubjectsSuccess(response.data));
        }).catch(error => {
            dispatch(fetchSubjectsFail(error.response));
        });
    }
};