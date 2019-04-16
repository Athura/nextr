import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Input from '../../Form/Input';
import Select from '../../Form/Select';
import TextArea from '../../Form/TextArea';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: '',
      status: '',
      preferences: '',
      sex: '',
      bio: '',
      location: '',
      errors: {},
      preferenceOptions: ['Jewelry', 'Coffee', 'The Goodstuff', 'The Badstuff', 'Books'],
      sexOptions: ['Male', 'Female', 'Others']
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    console.log('Submit');
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { errors } = this.state;

      return (
          <>
            <h1>Let's create your profile!</h1>
            <small>* = required fields</small>
            <form onSubmit={this.onSubmit}>
              <Input
                placeholder="Let's start with your status. Are you in a relationship? Married? Single? Looking for a friend?"
                name="status"
                type="text"
                value={this.state.status}
                onChange={this.onChange}
                title="Status"
              />
              {errors.status && <StyledError>{errors.status}</StyledError>}
            </form>
          </>
      )
  }
}

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

Const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps)(CreateProfile);
