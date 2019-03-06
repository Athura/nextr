import React, { Component } from 'react'
import Input from '../Form/Input';
import { Button } from '../../styles/common/button';

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

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form className="container" onSubmit={this.handleFormSubmit}>
          <Input type={'text'}
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
          <Input type={'text'}
            title={'Password'}
            name={'password'}
            value={this.state.newUser.password}
            placeholder={'Your Password'}
            handleChange={this.handleInput}
          />
          <Input type={'text'}
            title={'Password'}
            name={'password'}
            value={this.state.newUser.password}
            placeholder={'Your Password'}
            handleChange={this.handleInput}
          />
          <Button>Submit</Button>
          <Button>Forgot your login?</Button>
        </form>
      </div>
    )
  }
}


export default Register;