import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Input from '../Form/Input';
import { Button } from '../../styles/common/button';
import axios from 'axios';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions'


class Register extends Component {
  constructor() {
    super();
    this.state = {
      newUser: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: '',
        errors: {}
      }
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

    this.props.registerUser(newUser);

    // axios.post('/api/users/register', newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({ errors: err.response.data }))
  }

  render() {

    const { errors } = this.state;
    const { user } = this.props.auth;

    return (
      <div>
        {user ? user.name : null}
        <h1>Register</h1>
        <div className="container" onSubmit={this.handleFormSubmit}>
          <Input
            type={'text'}
            title={'Firstname'}
            name={'firstname'}
            value={this.state.newUser.firstname}
            placeholder={'Enter your first name here'}
            handleChange={this.handleInput}
          />
          <Input type={'text'}
            title={'lastname'}
            name={'lastname'}
            value={this.state.newUser.lastname}
            placeholder={'Enter your last name here'}
            handleChange={this.handleInput}
          />
          <Input type={'text'}
            title={'email'}
            name={'email'}
            value={this.state.newUser.email}
            placeholder={'Enter your email here'}
            handleChange={this.handleInput}
          />
          <Input type={'password'}
            title={'Password'}
            name={'password'}
            value={this.state.newUser.password}
            placeholder={'Your Password'}
            handleChange={this.handleInput}
          />
          <Input type={'password'}
            title={'Password Confirmation'}
            name={'password2'}
            value={this.state.newUser.password2}
            placeholder={'Confirm Your Password'}
            handleChange={this.handleInput}
          />
          <Button register border onClick={this.handleFormSubmit}>Submit</Button>
          <Button register border>Forgot your login?</Button>
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { registerUser })(Register);