import React from "react";

import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { ApplyMiddleware, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducer from "./reducers/index";

const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
