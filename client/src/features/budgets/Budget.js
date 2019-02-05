import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import DataTable from "./../dashboard/DataTable";
import { toast } from "react-semantic-toasts";
import BudgetRow from "./BudgetRow";
import { connect } from "react-redux";
import test from "./test";
class Budget extends Component {
  state = {
    budgets: [],
    currentBudget: null
  };
  componentDidMount() {
    const { alert } = this.props;
    this.setState({ budgets: test.data.budget });

    if (alert && alert.message) {
      toast({
        type: alert.type,
        icon: alert.icon,
        title: alert.type + "Toast",
        description: alert.message,
        time: 5000
      });
    }
  }

  handleOnEdit = id => {};
  handleOnview = id => {};
  handleOnDelete = id => {};
  handleOnCreate = budget => {};

  render() {
    const handlers = {
      handleOnEdit: this.handleOnEdit,
      handleOnview: this.handleOnview,
      handleOnCreate: this.handleOnCreate,
      handleOnDelete: this.handleOnDelete
    };
    const { budgets } = this.state;
    return (
      <Grid divided>
        <Grid.Row>
          <Grid.Column width={12}>
            <BudgetRow />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered style={{ marginTop: "100px" }}>
          <Grid.Column width={12}>
            {budgets && budgets.categories ? (
              <DataTable {...handlers} data={budgets.categories} />
            ) : (
              <p>No hay nada presupuestado viejo, que tal si te creas algo?</p>
            )}
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
