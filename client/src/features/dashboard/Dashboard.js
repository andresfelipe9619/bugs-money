import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dashboardPageLoaded} from './redux/actions';
import {Route, Switch} from 'react-router-dom';
import Transactions from '../transactions/Transactions';
import Reports from '../reports/Reports';
class Dashboard extends Component {
  componentDidMount() {
    this.props.dashboardPageLoaded(true);
  }

  componentWillUnmount() {
    this.props.dashboardPageLoaded(false);
  }
  render() {
    return (
      <Switch>
        {/* <Route path={this.props.match.url} component={component}/> */}
        <Route
          path={this.props.match.url + '/transacciones'}
          component={Transactions}
        />
        <Route
          path={this.props.match.url + '/reportes'}
          component={Reports}
        />
      </Switch>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dashboardPageLoaded: (bool) => {
      dispatch(dashboardPageLoaded(bool));
    },
  };
};

export default connect(
    null,
    mapDispatchToProps
)(Dashboard);
