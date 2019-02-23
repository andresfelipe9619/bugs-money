import React, { Component } from "react";
import { Grid, Header, Container } from "semantic-ui-react";
import DataTable from "./../dashboard/DataTable";
import { toast } from "react-semantic-toasts";
import BudgetRow from "./BudgetRow";
import { connect } from "react-redux";
import CreateBudgetModal from "./modals/CreateBudget";
import UpdateBudgetModal from "./modals/UpdateBudget";
import API from "../../services/api";
class Budget extends Component {
  state = {
    income: 0,
    expense: 0,
    budgeted: 0,
    budgets: [],
    isModalOpen: {
      create: false,
      update: false
    },
    currentBudget: null
  };

  async componentDidMount() {
    const { alert } = this.props;
    let res = await API.Budget.getAll();
    console.log("did", res);
    if (res.ok) {
      this.setState({ budgets: res.presupuestos });
    }
    // this.setState({ budgets: test.budgets });
    if (alert && alert.message) {
      toast({
        type: alert.typresolve,
        icon: alert.icon,
        title: alert.type + "Toast",
        description: alert.message,
        time: 5000
      });
    }
  }

  createBudget = async budget => {
    console.log("screating budget", budget);
    let mBudget = { ...budget };
    console.log("screating mmbudget", mBudget);

    let res = await API.Budget.create(mBudget);
    console.log("create", res);
    let budgets = [...this.state.budgets, res.presupuesto];
    this.setState({ budgets });
  };

  viewBudget = budget => {
    this.setCurrentBudget(budget);
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  updateBudget = budget => {
    console.log("budget", budget);
    let budgets = [...this.state.budgets];
    let i = budgets.findIndex(b => b.categoryId === budget.categoryId);
    if (i === -1) return;
    budgets[i] = budget;
    this.setState({ budgets });
  };

  deleteBudget = budget => {
    let budgets = this.state.budgets.filter(b => b["name"] !== budget["name"]);
    this.setState({ budgets });
  };

  setCurrentBudget = budget => {
    if (!budget) return;
    this.setState({ currentBudget: budget });
  };

  openModal = modal => () => {
    this.setState({ isModalOpen: { [modal]: true } });
  };

  closeModal = modal => () => {
    this.setState({ isModalOpen: { [modal]: false } });
  };

  handleOnCreate = budget => {
    if (!budget) return;
    this.createBudget(budget);
  };

  handleOnUpdate = budget => e => {
    console.log("budget", budget);
    if (!budget) return;
    this.setCurrentBudget(budget);
    this.openModal("update")();
  };

  handleOnView = budget => e => {
    if (!budget) return;
    this.viewBudget(budget);
  };

  handleOnDelete = budget => e => {
    if (!budget) return;
    this.deleteBudget(budget);
  };

  render() {
    const { budgets, isModalOpen, currentBudget } = this.state;
    console.log("props", this.props);
    if (!budgets) return null;
    const handlers = {
      handleOnView: this.handleOnView,
      handleOnCreate: this.handleOnCreate,
      handleOnUpdate: this.handleOnUpdate,
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
      <Container>
        <Grid divided>
          <Grid.Row>
            <Grid.Column width={16}>
              <BudgetRow
                saved={saved}
                income={income}
                expense={expense}
                openModal={this.openModal("create")}
                {...handlers}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered style={{ marginTop: "100px" }}>
            <Grid.Column width={16}>
              {budgets && budgets.length > 0 ? (
                <DataTable actions handlers={handlers} data={budgets} />
              ) : (
                <p>
                  No hay nada presupuestado viejo, que tal si te creas algo?
                </p>
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
          <CreateBudgetModal
            open={isModalOpen.create}
            closeModal={this.closeModal("create")}
            handleOnConfirm={handlers.handleOnCreate}
          />
          <UpdateBudgetModal
            budget={currentBudget || null}
            open={isModalOpen.update}
            closeModal={this.closeModal("update")}
            handleOnConfirm={this.updateBudget}
          />
        </Grid>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    alert: state.alert,
    user: state.authService.loginSuccess
  };
}

export default connect(mapStateToProps)(Budget);
