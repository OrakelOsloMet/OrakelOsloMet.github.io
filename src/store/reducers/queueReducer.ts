import {QueueActionTypes} from "../actions/actionTypes";
import {updateObject} from "../../utilities/objectUtilities";
import {QueueAction, QueueState} from "../types";

const initialState: QueueState = {
    queueData: [],
    subjectData:[],
    error: null,
    loading: false
};

const initAction = (state: QueueState, action: QueueAction): QueueState => {
    return updateObject(state, {error: null, loading: true});
};

const failedAction = (state: QueueState, action: QueueAction): QueueState => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
};

/* ----- Fetch Queue Data ----- */

const fetchQueueSuccess = (state: QueueState, action: QueueAction): QueueState => {
    return updateObject(state, {
        queueData: action.queueData,
        error: null,
        loading: false
    });
};


/* ----- Add, Delete and Remove in Queue ----- */

const addRemoveSuccess = (state: QueueState, action: QueueAction): QueueState => {
    return updateObject(state, {
        error: null,
        loading: false
    })
};

/* ----- Fetch Subject Data ----- */

const fetchSubjectsSuccess = (state: QueueState, action: QueueAction): QueueState => {
    return updateObject(state, {
        subjectData: action.subjectData,
        error: null,
        loading: false
    })
};

const reducer = (state: QueueState = initialState, action: QueueAction): QueueState => {
    switch (action.type) {

        //Start cases
        case QueueActionTypes.FETCH_QUEUE_START:
        case QueueActionTypes.ADD_TO_QUEUE_START:
        case QueueActionTypes.DELETE_FROM_QUEUE_START:
        case QueueActionTypes.DONE_IN_QUEUE_START:
        case QueueActionTypes.FETCH_SUBJECTS_START:
            return initAction(state, action);

        //Fail cases
        case QueueActionTypes.FETCH_QUEUE_FAIL:
        case QueueActionTypes.ADD_TO_QUEUE_FAIL:
        case QueueActionTypes.DELETE_FROM_QUEUE_FAIL:
        case QueueActionTypes.DONE_IN_QUEUE_FAIL:
        case QueueActionTypes.FETCH_SUBJECTS_FAIL:
            return failedAction(state, action);

        //Success cases
        case QueueActionTypes.FETCH_QUEUE_SUCCESS:
            return fetchQueueSuccess(state, action);

        case QueueActionTypes.ADD_TO_QUEUE_SUCCESS:
        case QueueActionTypes.DELETE_FROM_QUEUE_SUCCESS:
        case QueueActionTypes.DONE_IN_QUEUE_SUCCESS:
            return addRemoveSuccess(state, action);

        case QueueActionTypes.FETCH_SUBJECTS_SUCCESS:
            return fetchSubjectsSuccess(state, action);

        default:
            return state;
    }
};

export default reducer;
