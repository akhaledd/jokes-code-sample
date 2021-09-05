import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import JokesPage from "./pages/JokesPage";
import store from "./store";

import "./assets/styles/_index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <JokesPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
