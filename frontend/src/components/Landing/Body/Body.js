import React from 'react';
import { StyledBodyContainer, StyledDiv, StyledImg, StyledHelpContainer } from './Body.style';
import Fade from 'react-reveal/Fade'



const Body = () => {
    return (
        <>
            <StyledBodyContainer>
                <Fade left duration={2000}>
                    <StyledDiv leftHalf>
                        <article>
                            <h1>Your love life is our priority</h1>
                            <p>We're committed to helping lovers and partners give what presents they want and deliver with confidence</p>
                        </article>
                    </StyledDiv>
                </Fade>
                    <StyledDiv rightHalf>
                        <StyledImg />
                    </StyledDiv>
            </StyledBodyContainer>

            <StyledHelpContainer>
                <h1>Help!</h1>
            </StyledHelpContainer>
        </>
    )
}

export default Body