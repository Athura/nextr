import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Input from '../Form/Input';
import { Button } from '../../styles/common/button';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions'


class Register extends Component {
  constructor() {
    super();
    this.state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: '',
        errors: {}
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => {
      return {
        newUser: {
          ...prevState.newUser, [name]: value
        }
      }
    }
  )
}

  handleFormSubmit = (e) => {
    e.preventDefault();

    const newUser = this.state.newUser;

    this.props.registerUser(newUser, this.props.history);
  }

  render() {

    const { errors } = this.state;

    return (
      <div>
        <h1>Register</h1>
        <div className="container" onSubmit={this.handleFormSubmit}>
              <Input
                type={'text'}
                title={'Firstname'}
                name={'firstname'}
                value={this.state.firstname}
                placeholder={'Enter your first name here'}
                handleChange={this.handleInput}
              />
              {errors.firstname && (
                <div>{errors.firstname}</div>
              )}
          <Input type={'text'}
            title={'lastname'}
            name={'lastname'}
            value={this.state.lastname}
            placeholder={'Enter your last name here'}
            handleChange={this.handleInput}
          />
          {errors.firstname && (
                <div>{errors.firstname}</div>
          )}
          <Input type={'text'}
            title={'email'}
            name={'email'}
            value={this.state.email}
            placeholder={'Enter your email here'}
            handleChange={this.handleInput}
          />
          {errors.firstname && (
                <div>{errors.firstname}</div>
          )}
          <Input type={'password'}
            title={'Password'}
            name={'password'}
            value={this.state.password}
            placeholder={'Your Password'}
            handleChange={this.handleInput}
          />
          {errors.firstname && (
                <div>{errors.firstname}</div>
          )}
          <Input type={'password'}
            title={'Password Confirmation'}
            name={'password2'}
            value={this.state.password2}
            placeholder={'Confirm Your Password'}
            handleChange={this.handleInput}
          />
          {errors.firstname && (
                <div>{errors.firstname}</div>
          )}
          <Button register border onClick={this.handleFormSubmit}>Submit</Button>
          <Button register border>Forgot your login?</Button>
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));