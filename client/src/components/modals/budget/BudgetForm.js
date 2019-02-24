import React from "react";
import { Form, Button, Message, Grid, Icon, Segment } from "semantic-ui-react";
import withSemanticUIFormik from "../../hoc/FormikSUI";
import * as Yup from "yup";

const MyInnerForm = props => {
  const {
    errors,
    submitText,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleOnCancel,
    values: { name, limit, startDate, endDate }
  } = props;
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
                  label="budget name"
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
                <Form.Input
                  label="limit"
                  labelPosition="left"
                  type="text"
                  fluid
                  icon="money"
                  iconPosition="left"
                  name="limit"
                  value={limit}
                  placeholder="limit..."
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  label="Fecha inicio"
                  labelPosition="left"
                  type="date"
                  fluid
                  icon="calendar"
                  iconPosition="left"
                  name="startDate"
                  value={startDate}
                  onChange={handleChange}
                />
                <Form.Input
                  label="Fecha Final"
                  labelPosition="left"
                  type="date"
                  fluid
                  icon="calendar"
                  iconPosition="left"
                  name="endDate"
                  value={endDate}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button type="button" color="red" onClick={handleOnCancel}>
                <Icon name="remove" /> Cancel
              </Button>

              <Button type="submit" color="green">
                <Icon name="checkmark" /> {submitText || "No hay acción"}
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const BudgetForm = withSemanticUIFormik({
  mapPropsToValues: ({ budget }) => ({
    name: (budget && budget.name) || "weed",
    startDate: (budget && budget.startDate) || "2019-01-01",
    endDate: (budget && budget.endDate) || "2020-01-01",
    limit: (budget && budget.limit) || 0
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required("name is requerid!"),
    limit: Yup.number().required("limit is required!"),
    endDate: Yup.date().required("End date is required!"),
    startDate: Yup.date().required("Start date is required!")
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    setTimeout(() => {
      console.log("values", values);
      if (!props.budget) {
        props.handleOnConfirm(values);
      } else {
        props.handleOnConfirm({ ...values, _id: props.budget._id });
      }
      props.handleOnCancel();
      setSubmitting(false);
    }, 1000);
  },
  displayName: "BudgetForm"
})(MyInnerForm);

export default BudgetForm;
