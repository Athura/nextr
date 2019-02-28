import React from 'react';
import { StyledFooter, StyledFootButton, StyledFootContainer, StyledFootCont, StyledFootCenter } from './Footer.style';

const Footer = () => {
    return (
        <>
            <StyledFooter>
                <StyledFootButton></StyledFootButton>
                <StyledFootContainer>
                    <StyledFootCont>
                        <StyledFootCenter>
                            <h3>Classy Footer Text</h3>
                        </StyledFootCenter>
                    </StyledFootCont>
                </StyledFootContainer>
            </StyledFooter>
        </>
    )
}

export default Footer;