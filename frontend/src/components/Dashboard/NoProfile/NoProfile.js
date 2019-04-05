import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class NoProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      budget: '',
      status: '',
      preferences: '',
      sex: '',
      bio: '',
      location: '',
      errors: {},
    };
  }

  nextPage = () => {
      if (page > 4) {
          display = 
      }
      this.setState({
          page: this.state.page + 1
      })
  }

  previousPage = () => {
      this.setState({
          page: this.state.page - 1
      })
  }

  render() {
    const display;
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
