import * as actionTypes from "../actions/actionTypes";
import {updateObject} from "../../utilities/objectUtilities";

const initialState = {
    queueData: [],
    subjectData: [],
    error: null,
    loading: false
};


const initAction = (state, action) => {
    return updateObject(state, {error: null, loading: true});
};

const failedAction = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
};

/* ----- Fetch Queue Data ----- */

const fetchQueueSuccess = (state, action) => {
    return updateObject(state, {
        queueData: action.queueData,
        error: null,
        loading: false
    });
};


/* ----- Add, Delete and Remove in Queue ----- */

const addRemoveSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false
    })
};

/* ----- Fetch Subject Data ----- */

const fetchSubjectsSuccess = (state, action) => {
    return updateObject(state, {
        subjectData: action.subjectData,
        error: null,
        loading: false
    })
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        //Start cases
        case actionTypes.FETCH_QUEUE_START:
        case actionTypes.ADD_TO_QUEUE_START:
        case actionTypes.DELETE_FROM_QUEUE_START:
        case actionTypes.DONE_IN_QUEUE_START:
        case actionTypes.FETCH_SUBJECTS_START:
            return initAction(state, action);

        //Fail cases
        case actionTypes.FETCH_QUEUE_FAIL:
        case actionTypes.ADD_TO_QUEUE_FAIL:
        case actionTypes.DELETE_FROM_QUEUE_FAIL:
        case actionTypes.DONE_IN_QUEUE_FAIL:
        case actionTypes.FETCH_SUBJECTS_FAIL:
            return failedAction(state, action);

        //Success cases
        case actionTypes.FETCH_QUEUE_SUCCESS:
            return fetchQueueSuccess(state, action);
        case actionTypes.ADD_TO_QUEUE_SUCCESS:
        case actionTypes.DELETE_FROM_QUEUE_SUCCESS:
        case actionTypes.DONE_IN_QUEUE_SUCCESS:
            return addRemoveSuccess(state, action);
        case actionTypes.FETCH_SUBJECTS_SUCCESS:
            return fetchSubjectsSuccess(state, action);

        default:
            return state;
    }
};

export default reducer;
