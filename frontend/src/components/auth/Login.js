import React, { Component } from 'react';
import Input from '../Form/Input';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        existingUser: {
          email: '',
          password: ''
        }
      }
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleClearForm = this.handleClearForm.bind(this);
      this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
      let value = e.target.value;
      let name = e.target.name;
      this.setState(prevState => {
        return {
          newUser: {
            ...prevState.newUser, [name]: value
          }
        }
      }, () => console.log(this.state.newUser)
      )
  }



  render() {
    return (
      <div>
        <form className="container" onSubmit={this.handleFormSubmit}>
          <Input type={'text'}
            title={'Email'}
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
          <button>Submit</button>
          <button>Forgot your login?</button>
        </form>
      </div>
    )
  }
}


export default Login;