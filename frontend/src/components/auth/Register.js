import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styled from 'styled-components';
import Input from '../Form/Input';
import { Button } from '../../styles/common/button';
import { StyledError } from '../../styles/common/error';
import { registerUser } from '../../actions/authActions';

const StyledHeader = styled.h1`
  color: white;
  font-size: 20px;
  padding-left: 20px;
`;

const ButtonContainer = styled.div`
  padding: 20px 20px;
`;

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    };
  }

  componentWillReceiveProps = nextProps => {
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

  handleFormSubmit = e => {
    e.preventDefault();

    const newUser = this.state;

    // eslint-disable-next-line react/prop-types
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <StyledHeader>Register</StyledHeader>
        <div className="container" onSubmit={this.handleFormSubmit}>
          <Input
            type="text"
            title="Firstname"
            name="firstname"
            value={this.state.firstname}
            placeholder="Enter your first name here"
            handleChange={this.handleInput}
          />
          {errors.firstname && <StyledError>{errors.firstname}</StyledError>}
          <Input
            type="text"
            title="lastname"
            name="lastname"
            value={this.state.lastname}
            placeholder="Enter your last name here"
            handleChange={this.handleInput}
          />
          {errors.lastname && <StyledError>{errors.lastname}</StyledError>}
          <Input
            type="text"
            title="email"
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
          <Input
            type="password"
            title="Password Confirmation"
            name="password2"
            value={this.state.password2}
            placeholder="Confirm Your Password"
            handleChange={this.handleInput}
          />
          {errors.password2 && <StyledError>{errors.password2}</StyledError>}
          <ButtonContainer>
            <Button register border onClick={this.handleFormSubmit}>
              Submit
            </Button>
            <Button register border>
              Forgot your login?
            </Button>
          </ButtonContainer>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
