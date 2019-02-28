import React from 'react';
import { StyledBodyContainer, StyledDiv, StyledImg, StyledHelpContainer, StyledHeader, StyledDesc, StyledGetStartedContainer } from './Body.style';
import Fade from 'react-reveal/Fade';

import Walkthrough from './Walkthrough/Walkthrough';



const Body = () => {
    return (
        <>
            <StyledBodyContainer>
                <Fade left duration={2000}>
                    <StyledDiv leftHalf>
                        <article>
                            <StyledHeader>Your love life is our priority</StyledHeader>
                            <StyledDesc>We're committed to helping lovers and partners <br /> give what presents they want and deliver with confidence</StyledDesc>
                        </article>
                    </StyledDiv>
                </Fade>
                    <StyledDiv rightHalf>
                        <StyledImg />
                    </StyledDiv>
            </StyledBodyContainer>

            <StyledHelpContainer>
                <Walkthrough />
            </StyledHelpContainer>

            <StyledGetStartedContainer>
                <h1>Help!</h1>
            </StyledGetStartedContainer>
        </>
    )
}

export default Body