import React, { PureComponent } from "react";
import { Grid, Menu, Button, Icon, Input } from "semantic-ui-react";

const MoneyPlaceholder = ({ text, money, color }) => (
  <Menu inverted color={color} vertical>
    <Menu.Item>{text}</Menu.Item>
    <Menu.Item>{`$ ${money.toLocaleString()}`}</Menu.Item>
  </Menu>
);
export default class BudgetRow extends PureComponent {
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
    const { openModal, saved, income, expense } = this.props;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            {" "}
            <Menu style={{ marginTop: "55px" }} inverted>
              <Menu.Item header>PRESUPUESTOS</Menu.Item>
              <Menu.Item>
                <Input
                  icon="calendar"
                  type="date"
                  name="name"
                  iconPosition="left"
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
            <MoneyPlaceholder
              text={"Ingresos"}
              color={"green"}
              money={income}
            />
          </Grid.Column>
          <Grid.Column width={5}>
            <MoneyPlaceholder text={"Gastos"} color={"red"} money={expense} />{" "}
          </Grid.Column>
          <Grid.Column width={5}>
            <MoneyPlaceholder color={"blue"} text={"Guardado"} money={saved} />{" "}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
