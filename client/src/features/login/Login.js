import React from "react";
import { connect } from "react-redux";
import {
  Form,
  Button,
  Message,
  Grid,
  Header,
  Segment,
  Image
} from "semantic-ui-react";
import {
  loginRequest,
  loginFacebookRequest,
  loginGoogleRequest
} from "../../services/redux/actions/authActions";
import withSemanticUIFormik from "./hoc/FormikSUI";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";
import Facebook from "./social/Facebook";
import Google from "./social/Google";

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
    handleReset,
    loginSuccess,
    loginFailure
  } = props;
  console.log(JSON.stringify(props, null, 2))
  if (loginSuccess) {
    return <Redirect to="/" />;
  } else {
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
              ) : loginFailure ? (
                <Message
                  error
                  header="Hay problemas con el inicio de sesion"
                  content={loginFailure.err.message}
                />
              ) : null}
              <Form size="large" onSubmit={handleSubmit}>
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
              <Header as="h2" color="black" textAlign="center">
                O{" "}
              </Header>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Facebook />
                </Grid.Column>

                <Grid.Column width={3}>
                  <Google />
                </Grid.Column>
              </Grid.Row>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
};

const mapState = state => {
  return {
    user: state.authService.loginSuccess
  };
};

const mapDispatch = dispatch => {
  return {
    loginRequest: user => {
      dispatch(loginRequest(user));
    }
  };
};

const Login = withSemanticUIFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Correo invalido")
      .required("Correo es requerido!"),
    password: Yup.string().required("Constrasea requerida!")
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.loginRequest(values);
    setSubmitting(false);
  },
  displayName: "BasicForm" // helps with React DevTools
})(MyInnerForm);

export default connect(
  mapState,
  mapDispatch
)(Login);
