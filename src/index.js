import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {rootReducer, composeEnhancers, storeLogger} from "./store";

import App from './app';
import {objectConditionalByEnvironment} from "./utilities/objectUtilities";
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


//Conditionally creates a store with or without a logger, dependent on the environment.
const store = objectConditionalByEnvironment(
        createStore(rootReducer, composeEnhancers(applyMiddleware(storeLogger, thunk))),
        createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();