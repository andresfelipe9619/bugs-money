import React, { Component } from "react";
import API from "../../services/api";
import CreateAccountModal from "../../components/modals/account/CreateAccount";
import "./styles/index.css";
import { Menu, Icon, Button, Grid, Container } from "semantic-ui-react";
import DataTable from "../../components/tables/DataTable";
import UpdateAccountModal from "../../components/modals/account/UpdateAccount";
import Transactions from "../transactions/Transactions";

class Accounts extends Component {
  state = {
    accounts: [],
    budgets: [],
    isModalOpen: {
      create: false,
      update: false,
      delete: false
    },
    currentAccount: null
  };

  async componentDidMount() {
    this.getAccounts();
  }

  openModal = modal => () => {
    this.setState({ isModalOpen: { [modal]: true } });
  };

  closeModal = modal => () => {
    this.setState({ isModalOpen: { [modal]: false } });
  };

  async getAccounts() {
    let res = await API.Account.getAll();
    if (res.ok) {
      let { accounts } = res;
      this.setState({ accounts });
    }
  }

  createAccount = async account => {
    let res = await API.Account.create(account);
    if (res.ok) {
      this.getAccounts();
    }
  };

  updateAccount = async account => {
    let res = await API.Account.update(account);
    if (res.ok) {
      this.setCurrentAccount(null);
      this.getAccounts();
    } else console.log("Error updating Account :", res);
  };

  deleteAccount = async account => {
    let res = await API.Account.delete(account._id);
    if (res.ok) {
      this.getAccounts();
    }
  };

  setCurrentAccount = account => {
    if (!account) return;
    this.setState({ currentAccount: account });
  };

  handleOnCreate = account => {
    console.log("account", account);
    if (!account) return;
    this.createAccount(account);
  };

  handleOnUpdate = account => e => {
    console.log("account", account);
    if (!account) return;
    this.setCurrentAccount(account);
    this.openModal("update")();
  };

  handleOnView = account => e => {
    console.log("account", account);
    if (!account) return;
    this.viewAccount(account);
  };

  handleOnDelete = account => e => {
    console.log("account", account);
    if (!account) return;
    this.deleteAccount(account);
  };

  render() {
    const { accounts, isModalOpen, currentAccount } = this.state;
    if (!accounts) return null;
    const handlers = {
      handleOnView: this.handleOnView,
      handleOnCreate: this.handleOnCreate,
      handleOnUpdate: this.handleOnUpdate,
      handleOnDelete: this.handleOnDelete
    };
    console.log("this.state", this.state);
    return (
      <Container fluid>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              {" "}
              <Menu
                style={{
                  marginTop: "15px",
                  paddingLeft: "10px",
                  paddingRight: "10px"
                }}
                inverted
              >
                <Menu.Item header>Accounts</Menu.Item>
                <Menu.Item position="right">
                  {" "}
                  <Button onClick={this.openModal("create")} icon>
                    <Icon name="plus" />
                  </Button>
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row>
          <Grid as={Container} padded="vertically">
            <Grid.Row centered style={{ marginTop: "25px" }}>
              <Grid.Column className="accounts-datatable">
                {accounts && accounts.length > 0 ? (
                  <DataTable actions data={accounts} handlers={handlers} />
                ) : (
                  <p style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                    There are no accounts yet
                  </p>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid>
        <Transactions style={{ marginTop: "10px" }} />
        <CreateAccountModal
          open={isModalOpen.create}
          closeModal={this.closeModal("create")}
          handleOnConfirm={handlers.handleOnCreate}
        />
        <UpdateAccountModal
          account={currentAccount || null}
          open={isModalOpen.update}
          closeModal={this.closeModal("update")}
          handleOnConfirm={this.updateAccount}
        />
      </Container>
    );
  }
}

export default Accounts;
