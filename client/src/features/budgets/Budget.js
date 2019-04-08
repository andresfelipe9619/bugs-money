import React, { Component } from "react";
import {
  Grid,
  Header,
  Container,
  Confirm,
  Accordion,
  Icon,
  Divider
} from "semantic-ui-react";
import { toast } from "react-semantic-toasts";
import BudgetRow from "./BudgetRow";
import { connect } from "react-redux";
import CreateBudgetModal from "../../components/modals/budget/CreateBudget";
import UpdateBudgetModal from "../../components/modals/budget/UpdateBudget";
import ActionsCell from "../../components/tables/ActionsCell";
import API from "../../services/api";
import Categories from "../categories/Categories";
import moment from "moment";
import Transactions from "../transactions/Transactions";
class Budget extends Component {
  state = {
    income: 0,
    expense: 0,
    budgeted: 0,
    budgets: [],
    isFiltering: false,
    filteredBudgets: [],
    isModalOpen: {
      create: false,
      update: false,
      confirm: false
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

  getBudgets = async () => {
    let res = await API.Budget.getAll();
    if (res.ok) {
      let { budgets } = res;
      this.setState({ budgets });
    }
  };

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
      this.setCurrentBudget(null);
      this.getBudgets();
    }
  };

  deleteBudget = async budget => {
    let res = await API.Budget.delete(budget._id);
    if (res.ok) {
      this.setCurrentBudget(null);
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

  handleOnFilter = (start, end) => {
    const { budgets } = this.state;
    console.log("{start, end}", { start, end });
    const filteredBudgets = budgets.filter(
      b => b.startDate >= start && b.endDate <= end
    );
    this.setState({ filteredBudgets, isFiltering: true });
  };

  handleOnCancelFilter = e => {
    this.setState({ isFiltering: false });
  };

  handleOnCreate = budget => {
    if (!budget) return;
    this.createBudget(budget);
  };

  handleOnUpdate = budget => e => {
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
    this.setCurrentBudget(budget);
    this.openModal("confirm")();
  };

  confirmDeletingBudget = () => {
    this.closeModal("confirm")();
    this.deleteBudget(this.state.currentBudget);
  };

  render() {
    const {
      budgets,
      isModalOpen,
      currentBudget,
      activeIndex,
      isFiltering,
      filteredBudgets
    } = this.state;
    if (!budgets) return null;
    const budgetsToDisplay = isFiltering ? filteredBudgets : budgets;
    const handlers = {
      handleOnView: this.handleOnView,
      handleOnCreate: this.handleOnCreate,
      handleOnUpdate: this.handleOnUpdate,
      handleOnDelete: this.handleOnDelete,
      handleOnFilter: this.handleOnFilter,
      handleOnCancelFilter: this.handleOnCancelFilter
    };

    let { income, expense } = budgetsToDisplay.reduce(
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
      <Container fluid>
        <Grid divided>
          <Grid.Row>
            <Grid.Column width={16}>
              <BudgetRow
                header="Budgets"
                saved={saved}
                income={income}
                expense={expense}
                openModal={this.openModal("create")}
                {...handlers}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid as={Container} padded="vertically">
            <Grid.Row>
              <Grid.Column width={3} style={{ paddingLeft: "3em" }}>
                <Header> {"Name"}</Header>
              </Grid.Column>
              <Grid.Column width={2} style={{ paddingLeft: "2em" }}>
                <Header> {"Limit"}</Header>
              </Grid.Column>
              <Grid.Column width={2}>
                <Header> {"Balance"}</Header>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header> {"Start Date"}</Header>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header> {"End Date"}</Header>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header> </Header>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered>
              <Grid.Column width={16}>
                <Accordion fluid styled>
                  {budgetsToDisplay.map((budget, index) => {
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
                          <Grid padded="vertically">
                            <Grid.Row>
                              <Grid.Column width={3}>
                                <Icon name="dropdown" />
                                {name}
                              </Grid.Column>
                              <Grid.Column width={2}>{limit}</Grid.Column>
                              <Grid.Column width={2}>{limit}</Grid.Column>
                              <Grid.Column width={3}>
                                {moment(startDate).format("MMMM Do YYYY")}
                              </Grid.Column>
                              <Grid.Column width={3}>
                                {moment(endDate).format("MMMM Do YYYY")}
                              </Grid.Column>
                              <Grid.Column>
                                <ActionsCell {...handlers} original={budget} />{" "}
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === index}>
                          <Categories
                            budget={_id}
                            categories={categories}
                            getBudgets={this.getBudgets}
                          />
                        </Accordion.Content>
                      </React.Fragment>
                    );
                  })}
                </Accordion>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid.Row
            centered
            style={{
              marginTop: "100px",
              marginBottom: currentBudget ? "0px" : "300px"
            }}
          >
            <Grid.Column width={16}>
              <Divider />
              <Header
                size="large"
                style={{ paddingLeft: "20px", paddingRight: "20px" }}
              >
                Transactions
              </Header>
              <Transactions budgets={budgets} />
            </Grid.Column>
          </Grid.Row>
          <Confirm
            open={isModalOpen.confirm}
            onCancel={this.closeModal("confirm")}
            onConfirm={this.confirmDeletingBudget}
            content="Are you sure you want to delete this budget?"
          />

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
