import React, { Component } from "react";
import { connect } from "react-redux";
import { dashboardPageLoaded } from "./redux/actions";
import { Route, Switch } from "react-router-dom";
import Transactions from "../transactions/Transactions";
import Reports from "../reports/Reports";
import Budget from "../budgets/Budget";
import { success } from "../../services/redux/actions/alertActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.dashboardPageLoaded(true);
    if ('state' in this.props.location) {
      this.props.alertSuccess("Que hay de nuevo viejo?");
    }
  }

  componentWillUnmount() {
    this.props.dashboardPageLoaded(false);
  }
  render() {
    return (
      <Switch>
        <Route
          path={this.props.match.url + "/presupuesto"}
          component={Budget}
        />
        <Route
          path={this.props.match.url + "/transacciones"}
          component={Transactions}
        />
        <Route path={this.props.match.url + "/reportes"} component={Reports} />
      </Switch>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dashboardPageLoaded: bool => {
      dispatch(dashboardPageLoaded(bool));
    },
    alertSuccess: msg => {
      dispatch(success(msg));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Dashboard);
