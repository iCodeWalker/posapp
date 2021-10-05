import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { itemReducer } from "./reducers/itemReducers";

if (localStorage.getItem("listItems") == null) {
  localStorage.setItem("listItems", JSON.stringify([]));
}

if (localStorage.getItem("cartItems") == null) {
  localStorage.setItem("cartItems", JSON.stringify([]));
}

let initialState = {
  currentIndex: -1,
  list: JSON.parse(localStorage.getItem("listItems")),
  cart: JSON.parse(localStorage.getItem("cartItems")),
  currentIndexCart: -1,
};

var store = createStore(itemReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
