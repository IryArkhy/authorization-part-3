/*eslint-disable*/
import React, { Component, createContext } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import authOperations from './redux/auth/authOperations';
import Layout from './common/Layout';
import routes from './routes';
import PrivateRoute from './common/PrivatRoute';

const styles = {
  activeLink: {
    color: 'palevioletred',
  },
};

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route
                exact={routes.HOME.exact}
                path={routes.HOME.path}
                component={routes.HOME.component}
              />
              <Route
                path={routes.SIGNUP.path}
                component={routes.SIGNUP.component}
              />
              {/* <Route
                path={routes.LOGIN.path}
                component={routes.LOGIN.component}
              /> */}
              <Route
                path={routes.LOGIN.path}
                component={routes.LOGIN.component}
              />
              <PrivateRoute
                path={routes.TASKS.path}
                component={routes.TASKS.component}
              />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

//The same as above
// const mapDispatchToProps = dispatch => ({
//   onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
// });

export default connect(
  null,
  mapDispatchToProps,
)(App);
