import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Transactions from "../transactions/Transactions";
import Reports from "../reports/Reports";
import Budget from "../budgets/Budget";
import Accounts from "../accounts/Accounts";

class Dashboard extends Component {
  render() {
    return (
      <Switch>
        <Route path={this.props.match.url + "/budgets"} component={Budget} />
        <Route path={this.props.match.url + "/accounts"} component={Accounts} />
        <Route
          path={this.props.match.url + "/transactions"}
          component={Transactions}
        />
        <Route path={this.props.match.url + "/reports"} component={Reports} />
      </Switch>
    );
  }
}

export default Dashboard;
