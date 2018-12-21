import React, { Component } from 'react';
import Bar from '../../styles/img/bar.svg';
import './styles.css';

class AppBar extends Component {
  render() {
    return (
        <nav>
            <div className="row">
            <img src={Bar} alt="logo" className="logo" />
                <ul className="main-nav">
                    <li><a href="/">Food Delivery</a></li>
                    <li><a href="/">How It Works</a></li>
                    <li><a href="/">Our Cities</a></li>
                    <li><a href="/">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    )
  }
}

export default AppBar;