import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import DataTable from "./../dashboard/DataTable";
import { toast } from "react-semantic-toasts";
import BudgetRow from "./BudgetRow";
import Calendar from "./Calendar";
import { connect } from "react-redux";
import test from "./test";
class Budget extends Component {
  componentDidMount() {
    const { alert } = this.props;
    if (alert && alert.message) {
      // setTimeout(() => this.props.clear(), 5000);
      toast({
        type: alert.type,
        icon: alert.icon,
        title: alert.type + "Toast",
        description: alert.message,
        time: 5000
      });
    }
  }
  render() {
    return (
      <Grid divided>
        <Grid.Row>
          <Grid.Column width={2} syle={{ height: "40px" }}>
            <BudgetRow />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered style={{ marginTop: "100px" }}>
          <Grid.Column width={12}>
            <DataTable data={test.data.budget.categories} />
          </Grid.Column>
          <Grid.Column width={4}>
            <Calendar />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    alert: state.alert
  };
}

export default connect(mapStateToProps)(Budget);
