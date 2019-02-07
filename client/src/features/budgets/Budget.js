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
    this.setState({ budgets: test.budgets });
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
  handleOnCreate = budget => e => {};
  handleOnEdit = budget => e => {};
  handleOnView = budget => e => {};
  handleOnDelete = budget => e => {
    console.log("budget", budget);
    console.log("budgesssst", this.state.budgets);
    let budgets = this.state.budgets.filter(b => b["name"] !== budget["name"]);
    this.setState({ budgets });
  };
  handleOnCreate = budget => e => {};

  render() {
    const handlers = {
      handleOnEdit: this.handleOnEdit,
      handleOnView: this.handleOnView,
      handleOnCreate: this.handleOnCreate,
      handleOnDelete: this.handleOnDelete
    };
    const { budgets } = this.state;
    console.log("budgets", budgets);
    return (
      <Grid divided>
        <Grid.Row>
          <Grid.Column width={16}>
            <BudgetRow />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered style={{ marginTop: "100px" }}>
          <Grid.Column width={16}>
            {budgets && budgets.length > 0 ? (
              <DataTable actions handlers={handlers} data={budgets} />
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
