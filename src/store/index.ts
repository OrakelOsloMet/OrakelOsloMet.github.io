import {combineReducers, compose, Store} from "redux";
import authReducer from "./reducers/authReducer";
import queueReducer from "./reducers/queueReducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

//TODO Add proper types here instead of any
export const storeLogger = (store: Store) => {
    return (next: any) => {
        return (action: any) => {
            //console.log("[Middleware] Dispatching: ", action);
            const result = next(action);
            //console.log("[Middleware] next state: ", store.getState());
            return result;
        };
    };
};

export const rootReducer = combineReducers({
    auth: authReducer,
    queue: queueReducer
});

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type RootState = ReturnType<typeof rootReducer>