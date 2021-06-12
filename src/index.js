import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

//Imports
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

//CREATE STORE
const store = createStore(
    combineReducers({

}), 
applyMiddleware(logger)); // end store

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
