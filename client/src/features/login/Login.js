import Yup from "yup";
import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import {
  loginRequest,
  loginGoogleRequest
} from "../../services/redux/actions/authActions";
const imaginaryThings = [
  { label: "Thing 1", value: 1 },
  { label: "Thing 2", value: 2 },
  { label: "Thing 3", value: 3 },
  { label: "Thing 4", value: 4 },
  { label: "Thing 5", value: 5 }
];

const UserForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;

  return (
    <form className="p-5" onSubmit={handleSubmit}>
      <h1>Hello this is form!</h1>
      <div className="form-group">
        <label>Imaginary Email</label>
        <input
          name="email"
          type="text"
          className={`form-control ${errors.email &&
            touched.email &&
            "is-invalid"}`}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email &&
          touched.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
      </div>
      <div className="form-group">
        <label>Imaginary Username</label>
        <input
          name="username"
          type="text"
          className={`form-control ${errors.username &&
            touched.username &&
            "is-invalid"}`}
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username &&
          touched.username && (
            <div className="invalid-feedback">{errors.username}</div>
          )}
      </div>

      <button
        type="submit"
        className="btn btn-outline-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? "WAIT PLIZ" : "CLICK ME"}
      </button>
    </form>
  );
};

const LoginFormiked = Formik({
  mapPropsToValues: props => ({
    email: props.user.email,
    username: props.user.username,
    imaginaryThingId: props.user.imaginaryThingId
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
    username: Yup.string().required("This man needs a username")
  }),

  handleSubmit: (values, { setSubmitting }) => {
    this.props.loginRequest();
    setTimeout(() => {
      // submit them do the server. do whatever you like!
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
})(UserForm);

const mapState = state => {
  return {
    //   message: state.registerReducer.registerLoaded,
    //   isLoading: state.registerReducer.registerLoading,
    //   hasErrored: state.registerReducer.registerErrored,
    //   alertError: state.alertReducer.alertError,
    //   registerSuccess: state.registerReducer.registerSuccess,
  };
};

const mapDispatch = dispatch => {
  return {
    loginRequest: user => {
      dispatch(loginRequest(user));
    }
    //   requestRegister: (user) => {
    //     dispatch(register(user));
    //   },
    //   showErrorMessage: (msg) => {
    //     dispatch(alertError(msg));
    //   },
    //   showSuccessMessage: (msg) => {
    //     dispatch(alertSuccess(msg));
    //   },
  };
};

export default connect(
  mapState,
  mapDispatch
)(LoginFormiked);
