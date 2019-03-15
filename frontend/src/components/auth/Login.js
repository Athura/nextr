import React, { Component } from 'react';
import Input from '../Form/Input';
import { Button } from '../../styles/common/button';

import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        existingUser: {
          email: '',
          password: '',
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

  onSubmit = (e) => {
    const existingUser = this.state.existingUser;
  }



  render() {
    return (
      <div>
        <form className="container" onSubmit={this.handleFormSubmit}>
          <Input type={'text'}
            title={'Email'}
            name={'email'}
            value={this.state.existingUser.email}
            placeholder={'Enter your email here'}
            handleChange={this.handleInput}
          />
          <Input type={'text'}
            title={'Password'}
            name={'password'}
            value={this.state.existingUser.password}
            placeholder={'Your Password'}
            handleChange={this.handleInput}
          />
          <Button register border>Submit</Button>
          <Button register border>Forgot your login?</Button>
        </form>
      </div>
    )
  }
}


export default Login;