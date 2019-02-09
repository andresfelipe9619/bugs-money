import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import DataTable from "./../dashboard/DataTable";
import { toast } from "react-semantic-toasts";
import BudgetRow from "./BudgetRow";
import { connect } from "react-redux";
import test from "./test";
import AddBudgetModal from "./modals/AddBudget";
class Budget extends Component {
  state = {
    income: 0,
    expense: 0,
    budgeted: 0,
    budgets: [],
    isModalOpen: false,
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

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleOnCreate = budget => {
    if (!budget) return;
    let mBudget = {
      ...budget,
      spent: 0,
      nature: "expense",
      categoryId: `10634${Math.floor(Math.random() * 100)}`
    };
    let budgets = [...this.state.budgets, mBudget];
    this.setState({ budgets });
  };

  setCurrentBudget = budget => {
    if (!budget) return;
    this.setState({ currentBudget: budget });
  };

  handleOnEdit = budget => e => {};

  handleOnView = budget => e => {
    this.setCurrentBudget(budget);
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  handleOnDelete = budget => e => {
    let budgets = this.state.budgets.filter(b => b["name"] !== budget["name"]);
    this.setState({ budgets });
  };

  render() {
    const { budgets, isModalOpen, currentBudget } = this.state;
    if (!budgets) return null;
    const handlers = {
      openModal: this.openModal,
      closeModal: this.closeModal,
      handleOnEdit: this.handleOnEdit,
      handleOnView: this.handleOnView,
      handleOnCreate: this.handleOnCreate,
      handleOnDelete: this.handleOnDelete
    };

    let { income, expense } = budgets.reduce(
      (prev, b) =>
        b.nature === "income"
          ? { ...prev, income: prev.income + parseInt(b.limit, 10) }
          : b.nature === "expense"
          ? { ...prev, expense: prev.expense + parseInt(b.limit, 10) }
          : prev,
      { income: 0, expense: 0 }
    );

    let saved = income - expense;

    return (
      <Grid divided>
        <Grid.Row>
          <Grid.Column width={16}>
            <BudgetRow
              saved={saved}
              income={income}
              expense={expense}
              {...handlers}
            />
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
        <Grid.Row
          centered
          style={{
            marginTop: "100px",
            marginBottom: currentBudget ? "0px" : "300px"
          }}
        >
          <Grid.Column width={16}>
            <Header>
              {currentBudget && currentBudget.name
                ? `Transacciones en ${currentBudget.name}`
                : `Selecciona un presupuesto`}
            </Header>
            {currentBudget && budgets.length > 0 ? (
              <DataTable actions handlers={handlers} data={budgets} />
            ) : (
              <p>
                No hay nada de transacciones viejo, que tal si te mueves un
                poco?
              </p>
            )}
          </Grid.Column>
        </Grid.Row>

        <AddBudgetModal
          open={isModalOpen}
          closeModal={this.closeModal}
          handleOnCreate={handlers.handleOnCreate}
        />
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
