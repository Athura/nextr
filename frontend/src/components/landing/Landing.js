import React from 'react';
import './LandingStyles.css';


const Landing = () => {
    return (
        <div>
            <header>
                <div className="hero-text-container">
                    <h1>Tired of endlessly searching for bars? <br></br> Look no more.</h1>
                    <a className ="btn btn-full" href="/register">Sign Me Up!</a>
                    <a className ="btn btn-ghost" href="/login">Login</a>
                </div>
            </header>
        </div>
    )
}

export default Landing;