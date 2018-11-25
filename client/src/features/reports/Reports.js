import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Transactions from "../transactions/Transactions";
import ReportsTab from "./ReportsTab";
class Reports extends Component {
  render() {
    return (
      <div>
        <ReportsTab />
        <Switch>
          {/* <Route path={this.props.match.url} component={component}/> */}
          <Route
            path={this.props.match.url + "/transacciones"}
            component={Transactions}
          />
        </Switch>
      </div>
    );
  }
}
export default Reports;