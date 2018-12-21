import React from 'react';
import './LandingStyles.css';


const Landing = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className="row">
                        <ul className="main-nav">
                            <li><a href="/">Food Delivery</a></li>
                            <li><a href="/">How It Works</a></li>
                            <li><a href="/">Our Cities</a></li>
                            <li><a href="/">Sign Up</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="hero-text-container">
                    <h1>Goodbye junk food. <br></br> Hello super unhealthy food.</h1>
                    <a className ="btn btn-full" href="/">Sign Me Up!</a>
                    <a className ="btn btn-ghost" href="/">Login</a>
                </div>
            </header>
        </div>
    )
}

export default Landing;