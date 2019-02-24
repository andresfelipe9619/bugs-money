import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRouteComponent = ({ component: Compo, isLoggedin, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedin ? (
        <Compo {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              from: props.location
            }
          }}
        />
      )
    }
  />
);

const mapEstateToProps = (state, ownProps) => {
  return { isLoggedin: state.authService.loginSuccess };
};
const PrivateRoute = connect(mapEstateToProps)(PrivateRouteComponent);
export default PrivateRoute;
