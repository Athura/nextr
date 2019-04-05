import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class NoProfile extends Component {
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
    };
  }

  render() {
    return <div />;
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
