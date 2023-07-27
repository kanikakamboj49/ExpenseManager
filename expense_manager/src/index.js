import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

store.subscribe((state) => console.log("Logged from index.js:", state));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
