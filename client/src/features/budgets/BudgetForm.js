import React from "react";
import { Form, Button, Message, Grid, Icon, Segment } from "semantic-ui-react";
import withSemanticUIFormik from "../../components/hoc/FormikSUI";
import * as Yup from "yup";

const MyInnerForm = props => {
  const {
    errors,
    submitText,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleOnCancel,
    values: { name, state, startDate, endDate }
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
                  label="name presupuesto"
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
                  label="state"
                  labelPosition="left"
                  type="text"
                  fluid
                  icon="lock"
                  iconPosition="left"
                  name="state"
                  value={state}
                  placeholder="state..."
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
                <Icon name="remove" /> Cancelar
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
    name: (budget && budget.name) || "",
    startDate: (budget && budget.startDate) || 0,
    endDate: (budget && budget.endDate) || 0,
    state: (budget && budget.state) || ""
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required("name es requerido!"),
    state: Yup.string().required("cuenta requerida!"),
    endDate: Yup.date().required("cantidad requerida!"),
    startDate: Yup.date().required("Fecha de inicio requerida!")
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    setTimeout(() => {
      console.log("values", values);
      props.handleOnConfirm(values);
      props.handleOnCancel();
      setSubmitting(false);
    }, 1000);
  },
  displayName: "BudgetForm"
})(MyInnerForm);

export default BudgetForm;
