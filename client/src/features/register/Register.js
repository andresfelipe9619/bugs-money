import React from "react";
import {
  Form,
  Button,
  Message,
  Grid,
  Header,
  Segment,
  Image,
  Checkbox
} from "semantic-ui-react";
import withSemanticUIFormik from "../login/hoc/FormikSUI";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";

// Our inner form component. Will be wrapped with Formik({..})
const MyInnerForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
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
        <Grid.Column width={6} style={{ paddingTop: "2em", maxWidth: 450 }}>
          <Header as="h2" color="black" textAlign="center">
            Crea tu cuenta
          </Header>
          <Segment stacked>
            {Object.keys(errors).length > 0 ? (
              <Message
                error
                header="Hay porblemas el ingreso"
                list={Object.keys(errors).map(key => errors[key])}
              />
            ) : null}
            <Form size="large" onSubmit={handleSubmit}>
              <Form.Input
                label="Nombre completo"
                labelPosition="left"
                fluid
                icon="user"
                type="text"
                name="name"
                iconPosition="left"
                placeholder="Correo electrónico..."
                onChange={handleChange}
              />
              <Form.Input
                label="Correo electrónico"
                labelPosition="left"
                fluid
                icon="mail"
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
              <Form.Input
                label="Confirma tu contraseña"
                labelPosition="left"
                type="password"
                fluid
                icon="lock"
                iconPosition="left"
                name="passwordConfirm"
                placeholder="Contraseña..."
                onChange={handleChange}
              />
              <Button
                id="submit-login"
                type="submit"
                style={{ width: "100%", height: "auto" }}
              >
                Registrarse
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const Register = withSemanticUIFormik({
  mapPropsToValues: () => ({ email: "", name: "", password: "" }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Correo invalido")
      .required("Correo es requerido!"),
    password: Yup.string()
      .min(6)
      .required("Contraseña es requerido!"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password"), null])
      .required("Confirmacion de contaseña es requerido!")
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: "BasicForm" // helps with React DevTools
})(MyInnerForm);

export default Register;
