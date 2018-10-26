import React, { Component } from "react";
import { DateInput } from "semantic-ui-calendar-react";
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
      <Menu fixed="top" style={{ marginTop: "60px" }} inverted>
        <Menu.Item header>
          3 BILLIONS TO BE BUDGETED
          {/* <DateInput
            inline
            name="date"
            value={this.state.date}
            onChange={this.handleDateChange}
          /> */}
        </Menu.Item>
      </Menu>
    );
  }
}
