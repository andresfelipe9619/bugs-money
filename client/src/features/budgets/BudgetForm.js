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
    handleOnCancel,
    values: { nombre, estado, fechaInicioPresupuesto, fechaFinPresupuesto }
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
                  value={nombre}
                  fluid
                  icon="money"
                  type="text"
                  name="nombre"
                  iconPosition="left"
                  placeholder="Nombre presupuesto..."
                  onChange={handleChange}
                />
                <Form.Input
                  label="Estado"
                  labelPosition="left"
                  type="text"
                  fluid
                  icon="lock"
                  iconPosition="left"
                  name="estado"
                  value={estado}
                  placeholder="Estado..."
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
                  name="fechaInicioPresupuesto"
                  value={fechaInicioPresupuesto}
                  onChange={handleChange}
                />
                <Form.Input
                  label="Fecha Final"
                  labelPosition="left"
                  type="date"
                  fluid
                  icon="calendar"
                  iconPosition="left"
                  name="fechaFinPresupuesto"
                  value={fechaFinPresupuesto}
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
    nombre: (budget && budget.nombre) || "",
    fechaInicioPresupuesto: (budget && budget.fechaInicioPresupuesto) || 0,
    fechaFinPresupuesto: (budget && budget.fechaFinPresupuesto) || 0,
    estado: (budget && budget.estado) || "",
    nature: (budget && budget.nature) || ""
  }),
  validationSchema: Yup.object().shape({
    nombre: Yup.string().required("Nombre es requerido!"),
    estado: Yup.string().required("cuenta requerida!"),
    fechaFinPresupuesto: Yup.date().required("cantidad requerida!"),
    fechaInicioPresupuesto: Yup.date().required("Fecha de inicio requerida!")
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
