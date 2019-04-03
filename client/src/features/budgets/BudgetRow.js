import React, { PureComponent } from "react";
import { Grid, Menu } from "semantic-ui-react";
import ActionRow from "../../components/actionRow";

const MoneyPlaceholder = ({ text, money, color }) => (
  <Menu inverted color={color} vertical>
    <Menu.Item>{text}</Menu.Item>
    <Menu.Item>{`$ ${money.toLocaleString()}`}</Menu.Item>
  </Menu>
);
export default class BudgetRow extends PureComponent {
  render() {
    const {
      openModal,
      header,
      saved,
      income,
      expense,
      handleOnFilter,
      handleOnCancelFilter
    } = this.props;
    return (
      <Grid>
        <ActionRow
          {...{
            header,
            openModal,
            handleOnFilter,
            handleOnCancelFilter,
            inverted: true
          }}
        />
        <Grid.Row>
          <Grid.Column width={1}>{""}</Grid.Column>
          <Grid.Column width={5}>
            <MoneyPlaceholder text={"Income"} color={"green"} money={income} />
          </Grid.Column>
          <Grid.Column width={5}>
            <MoneyPlaceholder text={"Expense"} color={"red"} money={expense} />{" "}
          </Grid.Column>
          <Grid.Column width={5}>
            <MoneyPlaceholder color={"blue"} text={"Saved"} money={saved} />{" "}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
