import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import authSelectors from '../redux/auth/authSelectors';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...restProps
}) => (
  <Route
    {...restProps}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

//--------
// const PrivateRoute = ({
//   component: Component,
//   isAuthenticated,
//   ...restProps
// }) => {
//   return (
//     <Route
//       {...restProps}
//       render={props => {
//         return isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" />
//         );
//       }}
//     />
//   );
// };

const mstp = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mstp)(PrivateRoute);
