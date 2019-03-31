import React from "react";
import App from "./App";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import { Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { history } from "./store/history";
import configStore from "./store/configStore";
import "./index.css";
import "normalize.css";

const store = configStore();
// const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  window.document.getElementById("root")
);
registerServiceWorker();
