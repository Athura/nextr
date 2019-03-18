import React from 'react';
import {
  StyledFooter,
  StyledFootButton,
  StyledFootContainer,
  StyledFootCont,
  StyledFootCenter,
} from './Footer.style';

import FooterCards from './FooterCards/FooterCards';

const Footer = () => (
  <>
    <StyledFooter>
      <StyledFootButton />
      <StyledFootContainer>
        <StyledFootCont>
          <StyledFootCenter>
            <FooterCards />
          </StyledFootCenter>
        </StyledFootCont>
      </StyledFootContainer>
    </StyledFooter>
  </>
);

export default Footer;
