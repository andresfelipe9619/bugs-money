import React, { Component } from "react";
import { Grid, Header, Container } from "semantic-ui-react";
import DataTable from "../../components/tables/DataTable";
import { toast } from "react-semantic-toasts";
import BudgetRow from "./BudgetRow";
import { connect } from "react-redux";
import CreateBudgetModal from "../../components/modals/budget/CreateBudget";
import UpdateBudgetModal from "../../components/modals/budget/UpdateBudget";
import API from "../../services/api";
import { Accordion, Icon } from "semantic-ui-react";
import moment from "moment";
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
    currentBudget: null,
    activeIndex: 0
  };

  async componentDidMount() {
    const { alert } = this.props;
    this.getBudgets();
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

  async getBudgets() {
    let res = await API.Budget.getAll();
    if (res.ok) {
      let { budgets } = res;
      this.setState({ budgets });
    }
  }

  createBudget = async budget => {
    let res = await API.Budget.create(budget);
    if (res.ok) {
      this.getBudgets();
    }
  };

  viewBudget = budget => {
    this.setCurrentBudget(budget);
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  updateBudget = async budget => {
    let res = await API.Budget.update(budget);
    if (res.ok) {
      this.getBudgets();
    }
  };

  deleteBudget = async budget => {
    let res = await API.Budget.delete(budget._id);
    if (res.ok) {
      this.getBudgets();
    }
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

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  handleOnCreate = budget => {
    console.log("budget", budget);
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
    console.log("budget", budget);
    if (!budget) return;
    this.viewBudget(budget);
  };

  handleOnDelete = budget => e => {
    console.log("budget", budget);
    if (!budget) return;
    this.deleteBudget(budget);
  };

  render() {
    const { budgets, isModalOpen, currentBudget, activeIndex } = this.state;
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
          <Grid.Row style={{ marginTop: "100px" }}>
            <Grid.Column width={4}>
              <Header> {"Name"}</Header>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header> {"Limit"}</Header>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header> {"Balance"}</Header>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header> {"Start Date"}</Header>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header> {"End Date"}</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={16}>
              <Accordion fluid styled>
                {budgets.map((budget, index) => {
                  let {
                    _id,
                    name,
                    limit,
                    startDate,
                    endDate,
                    categories
                  } = budget;
                  return (
                    <React.Fragment key={_id}>
                      <Accordion.Title
                        active={activeIndex === index}
                        index={index}
                        onClick={this.handleClick}
                      >
                        <Grid>
                          <Grid.Row>
                            <Grid.Column width={4}>
                              <Icon name="dropdown" />
                              {name}
                            </Grid.Column>
                            <Grid.Column width={3}>{limit}</Grid.Column>
                            <Grid.Column width={3}>{limit}</Grid.Column>
                            <Grid.Column width={3}>
                              {moment(startDate).format("MMMM Do YYYY")}
                            </Grid.Column>
                            <Grid.Column width={3}>
                              {moment(endDate).format("MMMM Do YYYY")}
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </Accordion.Title>
                      <Accordion.Content active={activeIndex === index}>
                        <Header as="h3">Categories</Header>
                        {categories && categories.length > 0 ? (
                          <DataTable
                            actions
                            handlers={handlers}
                            data={categories}
                          />
                        ) : (
                          <p>
                            There's nothing budgted yet, try to create
                            something?
                          </p>
                        )}
                      </Accordion.Content>
                    </React.Fragment>
                  );
                })}
              </Accordion>
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
                <p>There are no transactions</p>
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
