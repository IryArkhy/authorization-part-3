import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import withAuthRedirect from '../../common/hoc/withAuthRedirect';
import authOperations from '../../redux/auth/authOperations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    padding: 4,
  },
};

class Login extends Component {
  state = { email: '', password: '' };

  //Var 1-----------
  //Проблема использования cdm and cdu - много повторяющейся логики

  /*
  componentDidMount() {
    const { history, isAuthenticated } = this.props;

    if (isAuthenticated) {
      history.replace('/');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { history, isAuthenticated } = this.props;

    if (isAuthenticated) {
      history.replace('/');
    }
  }
  */

  //Var 2--------------Using Redirect --> check this in render()

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin({ ...this.state });

    //this.setState({name: '', email: '', password: '' }) - clean the state
  };

  render() {
    const { email, password } = this.state;
    const { isAuthenticated } = this.props;

    //Var2---
    // if (isAuthenticated) return <Redirect to="/" />;

    //Var 3: вынести всю эту логику в компонент высшего порядка (для этого мы удаляем mstp --> null)
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label style={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}
// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.token,
// });
// const mapDispatchToProps = dispatch => ({
//   onLogin: credentials => dispatch(authOperations.loginUser(credentials)),
// });

//---------- the same as above

const mapDispatchToProps = {
  onLogin: authOperations.loginUser,
};

export default compose(
  withAuthRedirect,
  connect(
    null,
    mapDispatchToProps,
  ),
)(Login);

// export default connect(
//   null,
//   mapDispatchToProps,
// )(Login);
