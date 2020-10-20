import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSageMiddleware from "redux-saga";
import {createLogger} from 'redux-logger';

import App from "./App";
import "./index.css";
import rootReducer, {rootSaga} from "./modules";
import * as serviceWorker from "./serviceWorker";

const logger = createLogger();
const sagaMiddleware = createSageMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(/*logger,*/ sagaMiddleware)));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
