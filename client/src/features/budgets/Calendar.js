import React, { Component } from "react";
// import { Rail, Sticky, Image, Header } from "semantic-ui-react";
import { MonthInput, YearInput } from "semantic-ui-calendar-react";

export default class Calendar extends Component {
  state = { month: "", year: "" };
  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };
  render() {
    return (
      <div>
        <YearInput
          inline
          name="year"
          value={this.state.year}
          onChange={this.handleDateChange}
        />
        <MonthInput
          inline
          name="month"
          value={this.state.month}
          onChange={this.handleDateChange}
        />
      </div>
    );
  }
}
