import React from "react";
import { Form, Button, Message, Grid, Icon, Segment } from "semantic-ui-react";
import withSemanticUIFormik from "../../features/login/hoc/FormikSUI";
import * as Yup from "yup";

const MyInnerForm = props => {
  const {
    errors,
    submitText,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleOnCancel
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
                  label="Nombre presupuesto"
                  labelPosition="left"
                  fluid
                  icon="money"
                  type="text"
                  name="name"
                  iconPosition="left"
                  placeholder="Nombre presupuesto..."
                  onChange={handleChange}
                />
                <Form.Input
                  label="Cuenta"
                  labelPosition="left"
                  type="text"
                  fluid
                  icon="lock"
                  iconPosition="left"
                  name="account"
                  placeholder="Cuenta..."
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
                  onChange={handleChange}
                />
                <Form.Input
                  label="Cantidad"
                  labelPosition="left"
                  type="number"
                  fluid
                  icon="dollar"
                  iconPosition="left"
                  name="limit"
                  placeholder="Cantidad..."
                  onChange={handleChange}
                />
              </Form.Group>
              {/* <Form.Group widths="equal">
                <Form.Input
                  label="Categoria"
                  placeholder="Categoria"
                  labelPosition="left"
                  type="text"
                  fluid
                  icon="cube"
                  iconPosition="left"
                  name="category"
                  onChange={handleChange}
                />
                <Form.Input
                  label="Periodo"
                  labelPosition="left"
                  type="text"
                  fluid
                  icon="clock"
                  iconPosition="left"
                  name="period"
                  placeholder="Periodo"
                  onChange={handleChange}
                />
              </Form.Group> */}
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
  mapPropsToValues: () => ({
    name: "",
    category: "",
    limit: 0,
    account: "",
    startDate: "",
    period: ""
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Nombre es requerido!"),
    account: Yup.string().required("cuenta requerida!"),
    limit: Yup.number().required("cantidad requerida!"),
    // period: Yup.string().required("Periodo requerida!"),
    // category: Yup.string().required("categoria requerida!"),
    startDate: Yup.date().required("Fecha de inicio requerida!")
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    setTimeout(() => {
      props.handleOnConfirm(values);
      props.handleOnCancel();
      setSubmitting(false);
    }, 1000);
  },
  displayName: "BudgetForm"
})(MyInnerForm);

export default BudgetForm;
