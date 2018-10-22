import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {SemanticToastContainer, toast} from 'react-semantic-toasts';
import Navbar from './features/home/Navbar.js';
import {connect} from 'react-redux';
import {history} from './store/history';
import {clear} from './services/redux/alertActions';
import {
  PageNotFound,
  // PrivateRoute,
  ErrorBoundary,
} from './features/common';
import {
  LoadableDashboard,
  LoadableHome,
  LoadableLogin,
  LoadableRegister,
  LoadableBudget,
  LoadableProfile,
} from './features';
class App extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clear();
    });
  }

  render() {
    const {alert} = this.props;
    if (alert && alert.message) {
      // setTimeout(() => this.props.clear(), 5000);
      toast({
        type: alert.type,
        // icon: alert.type,
        title: alert.type + 'Toast',
        description: alert.message,
        time: 5000,
      });
    }
    return (
      <ErrorBoundary>
        <Navbar>
          <Container>
            <Switch>
              <Route exact path="/" component={LoadableHome} />
              {/* <Route exact path="/contacto" component={Contact} /> */}
              <Route path="/dashboard" component={LoadableDashboard} />
              <Route exact path="/registro" component={LoadableRegister} />
              <Route exact path="/ingreso" component={LoadableLogin} />
              <Route exact path="/presupuesto" component={LoadableBudget} />
              <Route exact path="/perfil" component={LoadableProfile} />
              <Route component={PageNotFound} />
            </Switch>
          </Container>
          <SemanticToastContainer position="top-right" />
        </Navbar>
      </ErrorBoundary>
    );
  }
}
function mapStateToProps(state) {
  return {
    alert: state.alert,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clear: () => {
      dispatch(clear());
    },
  };
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
