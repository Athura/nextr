import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '../../styles/common/button';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

class AppBar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.clearCurrentProfile();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <>
        <a style={{ textDecoration: 'none' }}>
          <Button signup border onClick={this.onLogoutClick}>
            <span>Logout</span>
          </Button>
          <img
            style = {{ width: '25px', marginRight: '5px' }}
            src={user.avatar}
            alt={user.name}
            title="You must have a Gravatar email for an avatar to display here"
          />
        </a>
      </>
    );

    const guestLinks = (
      <>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <Button signup border>
            <span>Login</span>
          </Button>
        </Link>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <Button register border>
            Register
          </Button>
        </Link>
      </>
    );

    return (
      <nav>
        <div className="row">
          <ul className="main-nav">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button about>Home</Button>
            </Link>

            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button about>Contact</Button>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Button about>About</Button>
            </Link>
            <div className="push">
              <Button signup border>
                Like
              </Button>
              <Button register border>
                Share
              </Button>
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}

AppBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(AppBar);
