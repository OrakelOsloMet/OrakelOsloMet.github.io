import {combineReducers, compose} from "redux";
import authReducer from "./reducers/authReducer";
import queueReducer from "./reducers/queueReducer";
import subjectReducer from "./reducers/subjectReducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export const rootReducer = combineReducers({
    auth: authReducer,
    queue: queueReducer,
    subjects: subjectReducer,
});

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type RootState = ReturnType<typeof rootReducer>