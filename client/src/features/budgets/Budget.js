import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import DataTable from "./../dashboard/DataTable";
import BudgetRow from "./BudgetRow";
import Calendar from "./Calendar";
import test from "./test";
export default class Budget extends Component {
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
