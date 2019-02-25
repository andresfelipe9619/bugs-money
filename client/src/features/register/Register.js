import React from "react";
import {
  Form,
  Button,
  Message,
  Grid,
  Header,
  Segment
} from "semantic-ui-react";
import { connect } from "react-redux";
import withSemanticUIFormik from "../../components/hoc/FormikSUI";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";
// import { success } from "../../services/redux/actions/alertActions";
import {
  register
  // loginFacebookRequest,
  // loginGoogleRequest
} from "../../services/redux/actions/authActions";

// Our inner form component. Will be wrapped with Formik({..})
const MyInnerForm = props => {
  const {
    errors,
    handleChange,
    handleSubmit,
    registerHasFailed,
    userHasRegistered
  } = props;

  if (userHasRegistered) {
    return (
      <Redirect
        to={{
          pathname: "/ingreso ",
          state: {
            from: props.location
          }
        }}
      />
    );
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
              Start creating your budgets now!
            </Header>
            <Segment stacked>
              {Object.keys(errors).length > 0 ? (
                <Message
                  error
                  header="There'are some problems"
                  list={Object.keys(errors).map(key => errors[key])}
                />
              ) : registerHasFailed ? (
                <Message
                  error
                  header="Hay problemas con el inicio de sesion"
                  content={
                    "err" in registerHasFailed
                      ? registerHasFailed.err.message
                      : registerHasFailed
                  }
                />
              ) : null}
              <Form size="large" onSubmit={handleSubmit}>
                <Form.Input
                  label="Full name"
                  labelPosition="left"
                  fluid
                  icon="user"
                  type="text"
                  name="name"
                  iconPosition="left"
                  placeholder="bugs bunny"
                  onChange={handleChange}
                />
                <Form.Input
                  label="Email address"
                  labelPosition="left"
                  fluid
                  icon="mail"
                  type="email"
                  name="email"
                  iconPosition="left"
                  placeholder="bugsbunny@money.com"
                  onChange={handleChange}
                />
                <Form.Input
                  label="password"
                  labelPosition="left"
                  type="password"
                  fluid
                  icon="lock"
                  iconPosition="left"
                  name="password"
                  placeholder="password..."
                  onChange={handleChange}
                />
                <Form.Input
                  label="Confirm your password"
                  labelPosition="left"
                  type="password"
                  fluid
                  icon="lock"
                  iconPosition="left"
                  name="passwordConfirm"
                  placeholder="password..."
                  onChange={handleChange}
                />
                <Button
                  id="submit-login"
                  type="submit"
                  style={{ width: "100%", height: "auto" }}
                >
                  Sign up
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
};

const mapState = state => {
  return {
    userHasRegistered: state.authService.registerSuccess,
    registerHasFailed: state.authService.registerFailure
  };
};

const mapDispatch = dispatch => {
  return {
    registerRequest: user => {
      dispatch(register(user));
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(
  withSemanticUIFormik({
    mapPropsToValues: () => ({ email: "", name: "", password: "" }),
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Correo invalido")
        .required("Correo es requerido!"),
      password: Yup.string()
        .min(6)
        .required("password es requerido!"),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password"), null])
        .required("Confirmacion de contaseña es requerido!")
    }),
    handleSubmit: (values, { setSubmitting, props }) => {
      let { name, email, password } = values;
      setTimeout(() => {
        props.registerRequest({
          email,
          password,
          name,
          estado: true,
          google: false
        });
        setSubmitting(false);
      }, 1000);
    },
    displayName: "RegisterForm"
  })(MyInnerForm)
);
