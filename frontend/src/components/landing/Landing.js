import React from 'react';
import { Button } from '../../styles/common/button';
import './LandingStyles.css';

const Landing = ({ history }) => {
    return (
        <div className="background">
            <div className ="container">
                <Button landing
                    onClick = {() => history.push('/')}
                >
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export default Landing;