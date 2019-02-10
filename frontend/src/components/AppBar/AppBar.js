import React, { Component } from 'react';
import undraw from '../../styles/img/undraw_super_thank_you_obwk.svg';
import { Button } from '../../styles/common/button';
import './styles.css';

class AppBar extends Component {
  render() {
    return (
        <nav>
            <div className="row">
            <img src={undraw} alt="logo" className="logo" />
                <ul className="main-nav">
                  <Button signup>Sign up</Button>
                  <Button register>Register</Button>
                </ul>
            </div>
        </nav>
    )
  }
}

export default AppBar;