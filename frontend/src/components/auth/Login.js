import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '../../styles/common/button';
import { StyledError } from '../../styles/common/error';
import Input from '../Form/Input';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  };

  handleInput = e => {
    const { value } = e.target;
    const { name } = e.target;
    this.setState(prevState => ({
      ...prevState.newUser,
      [name]: value,
    }));
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = this.state;

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <>
        <form className="container" onSubmit={this.handleFormSubmit}>
          <Input
            type="text"
            title="Email"
            name="email"
            value={this.state.email}
            placeholder="Enter your email here"
            handleChange={this.handleInput}
          />
          {errors.email && <StyledError>{errors.email}</StyledError>}
          <Input
            type="password"
            title="Password"
            name="password"
            value={this.state.password}
            placeholder="Your Password"
            handleChange={this.handleInput}
          />
          {errors.password && <StyledError>{errors.password}</StyledError>}
          <Button register border onClick={this.onSubmit}>
            Submit
          </Button>
          <Button register border>
            Forgot your login?
          </Button>
        </form>
      </>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
