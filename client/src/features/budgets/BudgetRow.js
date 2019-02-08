import React, { Component } from "react";
import { Grid, Menu, Button, Icon } from "semantic-ui-react";

const MoneyPlaceholder = ({ text, money, color }) => (
  <Menu inverted color={color} vertical>
    <Menu.Item>{text}</Menu.Item>
    <Menu.Item>{money}</Menu.Item>
  </Menu>
);
export default class BudgetRow extends Component {
  state = {
    date: "",
    time: "",
    dateTime: "",
    datesRange: ""
  };

  handleOnChange = event => {
    if (this.state.hasOwnProperty(event.target.name)) {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  render() {
    const { openModal } = this.props;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            {" "}
            <Menu style={{ marginTop: "55px" }} inverted>
              <Menu.Item header>PRESUPUESTOS</Menu.Item>
              <Menu.Item>
                <label htmlFor="date">Fecha</label>
                <input
                  type="date"
                  name="date"
                  value={new Date("2015-03-25")}
                  onChange={this.handleOnChange}
                />
              </Menu.Item>
              <Menu.Item position="right">
                {" "}
                <Button onClick={openModal} icon>
                  <Icon name="plus" />
                </Button>
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}>{""}</Grid.Column>
          <Grid.Column width={5}>
            <MoneyPlaceholder text={"Ingresos"} color={"green"} money={10000} />
          </Grid.Column>
          <Grid.Column width={5}>
            <MoneyPlaceholder text={"Gastos"} color={"red"} money={10000} />{" "}
          </Grid.Column>
          <Grid.Column width={5}>
            <MoneyPlaceholder
              color={"blue"}
              text={"Presupuestado"}
              money={10000}
            />{" "}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
