import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import App from './App';
import authReducer from "./store/reducers/authReducer";
import {objectConditionalByEnvironment} from "./utilities/objectUtilities";
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//Logger for debugging Redux, should not be enabled in production
const logger = store => {
    return next => {
        return action => {
            console.log("[Middleware] Dispatching: ", action);
            const result = next(action);
            console.log("[Middleware] next state: ", store.getState());
            return result;
        };
    };
};

const rootReducer = combineReducers({
    auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Conditionally creates a store with or without a logger, dependent on the environment.
const store = objectConditionalByEnvironment(createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk))), createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();