import React, { Component } from "react";
import { connect } from "react-redux";
import { reportsPageLoaded } from "./redux/actions";
import { Route, Switch } from "react-router-dom";
import Transactions from "../transactions/Transactions";
import Services from "../../services/api";
import { success } from "../../services/redux/alertActions";
import ReportsTab from "./ReportsTab";
import axios from "axios";
class Reports extends Component {
  componentDidMount() {
    this.props.reportsPageLoaded(true);
    axios.get("/api/user").then(data => {
      console.log(data.data);
      this.props.alertSuccess("Holy shit, you've done it right");
    });
  }

  componentWillUnmount() {
    this.props.reportsPageLoaded(false);
  }
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

const mapDispatchToProps = dispatch => {
  return {
    reportsPageLoaded: bool => {
      dispatch(reportsPageLoaded(bool));
    },
    alertSuccess: msg => {
      dispatch(success(msg));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Reports);
