import React, { Component } from "react";
import { Grid, Menu } from "semantic-ui-react";

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
      <React.Fragment>
        <Grid.Row>
          <Grid.Column width={16}>
            {" "}
            <Menu style={{ marginTop: "55px" }} inverted>
              <Menu.Item header>PRESUPUESTOS</Menu.Item>
              <Menu.Item>PRESUPUESTOS</Menu.Item>
              <Menu.Item position="right">+</Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>ss</Grid.Column>
          <Grid.Column width={4}>ss</Grid.Column>
          <Grid.Column width={4}>ss</Grid.Column>
        </Grid.Row>
      </React.Fragment>
    );
  }
}
