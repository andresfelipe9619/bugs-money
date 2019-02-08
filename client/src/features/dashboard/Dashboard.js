import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Transactions from "../transactions/Transactions";
import Reports from "../reports/Reports";
import Budget from "../budgets/Budget";

class Dashboard extends Component {

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

export default Dashboard;