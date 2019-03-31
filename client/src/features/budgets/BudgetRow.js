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
    start: new Date(),
    end: new Date()
  };

  handleOnChange = event => {
    if (this.state.hasOwnProperty(event.target.name)) {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  render() {
    const { start, end } = this.state;
    const {
      openModal,
      saved,
      income,
      expense,
      handleOnFilter,
      handleOnCancelFilter
    } = this.props;
    return (
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
              <Menu.Item header>BUDGETS</Menu.Item>
              <Menu.Item>
                <Input
                  label="Start"
                  type="date"
                  name="start"
                  iconPosition="left"
                  onChange={this.handleOnChange}
                />
                <Input
                  label="End"
                  type="date"
                  name="end"
                  iconPosition="left"
                  onChange={this.handleOnChange}
                />
                <Button
                  onClick={e => {
                    handleOnFilter(start, end);
                  }}
                  icon
                >
                  <Icon name="filter" />
                </Button>

                <Button onClick={handleOnCancelFilter} icon>
                  <Icon name="cancel" />
                </Button>
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
