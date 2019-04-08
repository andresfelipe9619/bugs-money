import React, { Component } from "react";
import { Grid, Container, Confirm } from "semantic-ui-react";
import { toast } from "react-semantic-toasts";
import TransactionRow from "./transactionRow";
import { connect } from "react-redux";
import CreateTransactionModal from "../../components/modals/transaction/CreateTransaction";
import UpdateTransactionModal from "../../components/modals/transaction/UpdateTransaction";
import API from "../../services/api";
import DataTable from "../../components/tables/DataTable";
class Transaction extends Component {
  state = {
    transactions: [],
    accounts: [],
    isFiltering: false,
    filteredTransactions: [],
    isModalOpen: {
      create: false,
      update: false,
      confirm: false
    },
    currentTransaction: null,
    activeIndex: 0
  };

  async componentDidMount() {
    const { alert } = this.props;
    this.getTransactions();
    this.getAccounts();
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

  getAccounts = async () => {
    let res = await API.Account.getAll();
    if (res.ok) {
      let { accounts } = res;
      this.setState({ accounts });
    }
  };

  getTransactions = async () => {
    let res = await API.Transaction.getAll();
    if (res.ok) {
      let { transactions } = res;
      this.setState({ transactions });
    }
  };

  createTransaction = async transaction => {
    let res = await API.Transaction.create(transaction);
    if (res.ok) {
      this.getTransactions();
    }
  };

  viewTransaction = transaction => {
    this.setCurrentTransaction(transaction);
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  updateTransaction = async transaction => {
    let res = await API.Transaction.update(transaction);
    if (res.ok) {
      this.setCurrentTransaction(null);
      this.getTransactions();
    }
  };

  deleteTransaction = async transaction => {
    let res = await API.Transaction.delete(transaction._id);
    if (res.ok) {
      this.setCurrentTransaction(null);
      this.getTransactions();
    }
  };

  setCurrentTransaction = transaction => {
    if (!transaction) return;
    this.setState({ currentTransaction: transaction });
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
    const { transactions } = this.state;
    console.log("{start, end}", { start, end });
    const filteredTransactions = transactions.filter(
      b => b.startDate >= start && b.endDate <= end
    );
    this.setState({ filteredTransactions, isFiltering: true });
  };

  handleOnCancelFilter = e => {
    this.setState({ isFiltering: false });
  };

  handleOnCreate = transaction => {
    if (!transaction) return;
    this.createTransaction(transaction);
  };

  handleOnUpdate = transaction => e => {
    if (!transaction) return;
    this.setCurrentTransaction(transaction);
    this.openModal("update")();
  };

  handleOnView = transaction => e => {
    if (!transaction) return;
    this.viewTransaction(transaction);
  };

  handleOnDelete = transaction => e => {
    if (!transaction) return;
    this.setCurrentTransaction(transaction);
    this.openModal("confirm")();
  };

  confirmDeletingTransaction = () => {
    this.closeModal("confirm")();
    this.deleteTransaction(this.state.currentTransaction);
  };

  render() {
    const {
      transactions,
      accounts,
      isModalOpen,
      currentTransaction,
      isFiltering,
      filteredTransactions
    } = this.state;
    const { budgets } = this.props;
    if (!transactions) return null;
    const transactionsToDisplay = isFiltering
      ? filteredTransactions
      : transactions;
    const handlers = {
      handleOnView: this.handleOnView,
      handleOnCreate: this.handleOnCreate,
      handleOnUpdate: this.handleOnUpdate,
      handleOnDelete: this.handleOnDelete,
      handleOnFilter: this.handleOnFilter,
      handleOnCancelFilter: this.handleOnCancelFilter
    };
    const accountsOptions = accounts.map(a => ({ value: a._id, text: a.name }));
    const budgetsOptions = budgets.map(b => ({ value: b._id, text: b.name }));
    return (
      <Container fluid>
        <Grid divided>
          <Grid.Row>
            <Grid.Column width={16}>
              <TransactionRow
                header={"Transactions"}
                openModal={this.openModal("create")}
                {...handlers}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid
            as={Container}
            padded="vertically"
            style={{ paddingBottom: "3em" }}
          >
            <Grid.Row centered>
              <Grid.Column className="transactions-datatable" width={16}>
                {transactionsToDisplay && transactionsToDisplay.length > 0 ? (
                  <DataTable
                    data={transactionsToDisplay}
                    handlers={handlers}
                    actions
                  />
                ) : (
                  <p>No data to display</p>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Confirm
            open={isModalOpen.confirm}
            onCancel={this.closeModal("confirm")}
            onConfirm={this.confirmDeletingTransaction}
            content="Are you sure you want to delete this transaction?"
          />

          <CreateTransactionModal
            budgets={budgetsOptions}
            accounts={accountsOptions}
            open={isModalOpen.create}
            closeModal={this.closeModal("create")}
            handleOnConfirm={handlers.handleOnCreate}
          />
          <UpdateTransactionModal
            budgets={budgetsOptions}
            accounts={accountsOptions}
            transaction={currentTransaction || null}
            open={isModalOpen.update}
            closeModal={this.closeModal("update")}
            handleOnConfirm={this.updateTransaction}
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

export default connect(mapStateToProps)(Transaction);
