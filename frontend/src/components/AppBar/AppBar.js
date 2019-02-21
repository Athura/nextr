import React, { Component } from 'react';
import { Button } from '../../styles/common/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css';

class AppBar extends Component {
  render() {
    return (
        <nav>
            <div className="row">
                <ul className="main-nav">
                  <Button about>Bloggers</Button>
                  <Button about>Contacts</Button>
                  <Button about>About</Button>
                  <div className="push">
                      <Button signup border>Follow</Button>
                      <Button register border>Twitter</Button>
                    <Button signup border>
                      <FontAwesomeIcon icon={['fab', 'twitter']} className="social-media fa-lg" />
                    <span>
                        Login
                      </span></Button>
                    <Button register border>Register</Button>
                  </div>
                </ul>
            </div>
        </nav>
    )
  }
}

export default AppBar;