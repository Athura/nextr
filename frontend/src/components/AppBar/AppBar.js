import React, { Component } from 'react';
import { Button } from '../../styles/common/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css';
import { Link } from 'react-router-dom';

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
                      <Button signup border>Like</Button>
                      <Button register border>Share</Button>
                    <Link to='/login'>
                    <Button signup border>
                      <FontAwesomeIcon icon={['fab', 'twitter']} className="social-media fa-lg" />
                      <span>
                        Login
                      </span></Button>
                    </Link>
                    <Link to='/register'><Button register border>Register</Button></Link>
                  </div>
                </ul>
            </div>
        </nav>
    )
  }
}

export default AppBar;