import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import DataTable from "./../dashboard/DataTable";
import BudgetRow from "./BudgetRow";

let test = [
  { _id: "27493029", name: "andres", edad: "21" },
  { _id: "2837429", name: "carlos", edad: "24" },
  { _id: "999321", name: "sebastian", edad: "21" },
  { _id: "23222", name: "carlos", edad: "24" }
];

export default class Budget extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2} syle={{ height: "40px" }}>
            <BudgetRow />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={14} style={{ marginTop: "100px" }}>
            <DataTable data={test} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
