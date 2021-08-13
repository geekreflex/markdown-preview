import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import * as themes from "./theme/schema.json";
import { setToLS } from "./utils/storage";
import { getMarkdownFromStorage } from "./redux/markSlice";

store.dispatch(getMarkdownFromStorage());

const Index = () => {
  setToLS("all-themes", themes.default);
  return <App />;
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Index />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
