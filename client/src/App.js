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
class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Navbar>
          <Switch>
            <Route exact path="/" component={LoadableHome} />
            <Route path="/dashboard" component={LoadableDashboard} />
            <Route exact path="/registro" component={LoadableRegister} />
            <Route exact path="/ingreso" component={LoadableLogin} />
            <PrivateRoute exact path="/perfil" component={LoadableProfile} />
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
