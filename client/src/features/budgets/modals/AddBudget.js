import React from "react";
import {
  Button,
  Header,
  Icon,
  Modal,
  Form,
  Segment,
  Grid,
  Message
} from "semantic-ui-react";
import withSemanticUIFormik from "../../../features/login/hoc/FormikSUI";
import * as Yup from "yup";

const AddBudgetModal = ({ open, closeModal }) => (
  <Modal dimmer={"blurring"} open={open} closeIcon onClose={closeModal}>
    <Header icon="archive" content="Archive Old Messages" />
    <Modal.Content>
      <AddBudgetForm />
    </Modal.Content>
    <Modal.Actions>
      <Button color="red">
        <Icon name="remove" /> No
      </Button>
      <Button color="green">
        <Icon name="checkmark" /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
);
const MyInnerForm = props => {
  const { errors, isSubmitting, handleChange, handleSubmit } = props;

  return (
    <Grid
      style={{
        height: "100%"
      }}
      verticalAlign="middle"
      centered
    >
      <Grid.Row centered>
        <Grid.Column width={6} style={{ paddingTop: "2em", maxWidth: 450 }}>
          <Header as="h2" color="black" textAlign="center">
            Ingresa con tu cuenta
          </Header>
          <Segment stacked>
            {Object.keys(errors).length > 0 ? (
              <Message
                error
                header="Campos invalidos"
                list={Object.keys(errors).map(key => errors[key])}
              />
            ) : null}
            <Form size="large" onSubmit={handleSubmit} loading={isSubmitting}>
              <Form.Input
                label="Correo electrónico"
                labelPosition="left"
                fluid
                icon="user"
                type="email"
                name="email"
                iconPosition="left"
                placeholder="Correo electrónico..."
                onChange={handleChange}
              />
              <Form.Input
                label="Contraseña"
                labelPosition="left"
                type="password"
                fluid
                icon="lock"
                iconPosition="left"
                name="password"
                placeholder="Contraseña..."
                onChange={handleChange}
              />
              <Button
                id="submit-login"
                type="submit"
                style={{ width: "100%", height: "auto" }}
              >
                Iniciar Sesión
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const AddBudgetForm = withSemanticUIFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Correo invalido")
      .required("Correo es requerido!"),
    password: Yup.string().required("Constraseña requerida!")
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    setTimeout(() => {
      props.loginRequest(values);
      setSubmitting(false);
    }, 1000);
  },
  displayName: "LoginForm"
})(MyInnerForm);

export default AddBudgetModal;
