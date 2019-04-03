import React from "react";
import { Form, Button, Message, Grid, Icon, Segment } from "semantic-ui-react";
import withSemanticUIFormik from "../../hoc/FormikSUI";
import * as Yup from "yup";

const MyInnerForm = props => {
  const {
    errors,
    accounts,
    budgets,
    submitText,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleOnCancel,
    values: { name, type, value, account, date, budget }
  } = props;
  const typeOptions = [
    { value: "EXPENSE", text: "Expense" },
    { value: "INCOME", text: "Income" },
    { value: "TRANSFER", text: "Transfer" },
    { value: "INVEST", text: "Invest" }
  ];
  return (
    <Grid
      style={{
        height: "100%"
      }}
      verticalAlign="middle"
      centered
    >
      <Grid.Row centered>
        <Grid.Column width={16}>
          <Segment>
            {Object.keys(errors).length > 0 ? (
              <Message
                error
                header="Campos invalidos"
                list={Object.keys(errors).map(key => errors[key])}
              />
            ) : null}
            <Form size="large" onSubmit={handleSubmit} loading={isSubmitting}>
              <Form.Group widths="equal">
                <Form.Input
                  label="transaction name"
                  labelPosition="left"
                  value={name}
                  fluid
                  icon="money"
                  type="text"
                  name="name"
                  iconPosition="left"
                  placeholder="name presupuesto..."
                  onChange={handleChange}
                />
                <Form.Select
                  label="type"
                  labelPosition="left"
                  type="text"
                  fluid
                  iconPosition="left"
                  name="type"
                  placeholder="type..."
                  value={type}
                  options={typeOptions}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Select
                  label="Account"
                  labelPosition="left"
                  type="text"
                  fluid
                  iconPosition="left"
                  name="account"
                  value={account}
                  options={accounts}
                  onChange={handleChange}
                />{" "}
                <Form.Select
                  label="Budget"
                  labelPosition="left"
                  type="text"
                  fluid
                  iconPosition="left"
                  name="budget"
                  value={budget}
                  options={budgets}
                  onChange={handleChange}
                />{" "}
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  label="Value"
                  labelPosition="left"
                  type="number"
                  fluid
                  icon="calendar"
                  iconPosition="left"
                  name="value"
                  value={value}
                  onChange={handleChange}
                />
                <Form.Input
                  label="Date"
                  labelPosition="left"
                  type="date"
                  fluid
                  icon="calendar"
                  iconPosition="left"
                  name="date"
                  value={date}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button type="button" color="red" onClick={handleOnCancel}>
                <Icon name="remove" /> Cancel
              </Button>

              <Button type="submit" color="green">
                <Icon name="checkmark" /> {submitText || "There are no actions"}
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const TransactionForm = withSemanticUIFormik({
  mapPropsToValues: ({ transaction }) => ({
    name: (transaction && transaction.name) || "weed",
    value: (transaction && transaction.value) || "10000",
    account: (transaction && transaction.account) || "BANCOLOMBIA",
    budget: (transaction && transaction.budget) || "weed",
    type: (transaction && transaction.type) || "credito",
    date: (transaction && transaction.date) || "01/01/2020"
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required("name is requerid!"),
    type: Yup.string().required("type is required!"),
    account: Yup.string().required("Account is required!"),
    budget: Yup.string().required("Budget is required!"),
    value: Yup.number().required("Value is required!"),
    date: Yup.date().required("Value is required!")
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    setTimeout(() => {
      console.log("values", values);
      if (!props.transaction) {
        props.handleOnConfirm(values);
      } else {
        props.handleOnConfirm({ ...values, _id: props.transaction._id });
      }
      props.handleOnCancel();
      setSubmitting(false);
    }, 1000);
  },
  displayName: "TransactionForm"
})(MyInnerForm);

export default TransactionForm;
