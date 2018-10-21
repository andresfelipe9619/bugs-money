import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRouteComponent = ({component: Compo, isAdmin, ...rest}) => (
  <Route
    {...rest}
    render={(props) =>
      isAdmin ? (
        <Compo {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/ingreso',
            state: {
              from: props.location,
            },
          }}
        />
      )
    }
  />
);

const mapEstateToProps = (state, ownProps) => {
  const cached = localStorage.getItem('user');
  return {isAdmin: state.authReducer.loginSuccess.admin || cached.admin};
};
const PrivateRoute = connect(
    mapEstateToProps,
    null
)(PrivateRouteComponent);
export default PrivateRoute;
