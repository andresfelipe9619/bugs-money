import React, { Component } from "react";
// import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";
import { SemanticToastContainer } from "react-semantic-toasts";
import Navbar from "./features/home/Navbar.js";
import { connect } from "react-redux";
import { PageNotFound, PrivateRoute, ErrorBoundary } from "./features/common";
import {
  LoadableDashboard,
  LoadableHome,
  LoadableLogin,
  LoadableRegister,
  LoadableProfile
} from "./features";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";

library.add(faPiggyBank);
class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Navbar>
          <Switch>
            <Route exact path="/" component={LoadableHome} />
            <PrivateRoute path="/dashboard" component={LoadableDashboard} />
            <Route exact path="/register" component={LoadableRegister} />
            <Route exact path="/login" component={LoadableLogin} />
            <PrivateRoute exact path="/profile" component={LoadableProfile} />
            <Route component={PageNotFound} />
          </Switch>
          <SemanticToastContainer position="bottom-right" />
        </Navbar>
      </ErrorBoundary>
    );
  }
}
function mapStateToProps(state) {
  return {
    alert: state.alert
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
