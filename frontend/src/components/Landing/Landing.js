import React, { Component } from 'react';
import { StyledContainer, StyledH1, StyledH3, StyledSpan, StyledBody } from './Landing.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CTA from './CTA/CTA';

class Landing extends Component {
    render() {
        return (
            <>
                <StyledContainer>
                    <StyledH1>GiftIt</StyledH1>
                    <StyledH3>#1 platform for finding out the best gift for him or her.</StyledH3>
                    <br/>
                    <StyledSpan>We unite the best gifters with those of us who need a hint sometimes.</StyledSpan>
                    <ul>
                    <FontAwesomeIcon icon={['fab', 'facebook']} className="social-media fa-lg" />
                    </ul>
                </StyledContainer>
                <StyledBody>
                    <CTA />
                </StyledBody>
            </>
        )
    }
}

export default Landing;