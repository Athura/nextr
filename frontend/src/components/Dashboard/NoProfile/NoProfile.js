import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../../../styles/common/button';

class NoProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      budget: '',
      status: '',
      preferences: '',
      sex: '',
      bio: '',
      location: '',
      errors: {},
    };
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const { step } = this.state;
    const { budget, status, preferences, sex, bio, location } = this.state;
    const values = { budget, status, preferences, sex, bio, location };

    const greaterThanFour = (
      <>
        <Button disabled>Next</Button>
      </>
    );

    const lessThanFour = (
      <>
        <Button>Next</Button>
      </>
    );

    switch(step) {
      case 1:
        return (
          <MultistepForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
          return (
            <MultistepPersonal
            />
          )
      default:
            return (
              <h1>We're Done!</h1>
            )
    }
  }
}

NoProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(null)(NoProfile);
