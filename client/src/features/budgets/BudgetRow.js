import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class BudgetRow extends Component {
  state = {
    date: "",
    time: "",
    dateTime: "",
    datesRange: ""
  };

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  render() {
    return (
      <Menu style={{ marginTop: "55px" }} inverted>
        <Menu.Item header>
          3 BILLIONS TO BE BUDGETED
        </Menu.Item>
      </Menu>
    );
  }
}
