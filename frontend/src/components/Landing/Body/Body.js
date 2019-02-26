import React from 'react';
import { StyledBodyContainer, StyledDiv, StyledImg } from './Body.style';
import Fade from 'react-reveal/Fade'



const Body = () => {
    return (
        <>
            <StyledBodyContainer>
                <Fade left>
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
        </>
    )
}

export default Body