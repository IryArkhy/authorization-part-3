import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import { compose } from 'redux';
import withAuthRedirect from '../../common/hoc/withAuthRedirect';

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

class SignUpPage extends Component {
  state = { name: '', email: '', password: '' };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister({ ...this.state });

    //this.setState({name: '', email: '', password: '' }) - clean the state
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Register Page</h1>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: credentials => dispatch(authOperations.registerUser(credentials)),
});

export default compose(
  withAuthRedirect,
  connect(
    null,
    mapDispatchToProps,
  ),
)(SignUpPage);

// export default connect(
//   null,
//   mapDispatchToProps,
// )(SignUpPage);
