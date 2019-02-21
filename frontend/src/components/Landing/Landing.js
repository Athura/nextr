import React, { Component } from 'react';
import { StyledContainer } from './Landing.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Landing extends Component {
    render() {
        return (
            <StyledContainer>
                <h1>GiftIt</h1>
                <span>#1 platform for finding out the best gift for him or her.</span>
                <br/>
                <span>We unite the best gifters with those of us who need a hint sometimes.</span>
                <FontAwesomeIcon icon={['fab', 'facebook']} className="social-media fa-lg" />
            </StyledContainer>
        )
    }
}

export default Landing;