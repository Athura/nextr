import React, { Component } from 'react';
import { Button } from '../../styles/common/button';
import './styles.css';

class AppBar extends Component {
  render() {
    return (
        <nav>
            <div className="row">
                <ul className="main-nav">
                  <div className="push">
                    <Button signup>Sign up</Button>
                    <Button register>Register</Button>
                  </div>
                </ul>
            </div>
        </nav>
    )
  }
}

export default AppBar;