import React from 'react';
import Fade from 'react-reveal/Fade';
import {
  StyledBodyContainer,
  StyledDiv,
  StyledImg,
  StyledHelpContainer,
  StyledHeader,
  StyledDesc,
  StyledGetStartedContainer,
} from './Body.style';
import CoffeeLover from '../../../styles/img/coffee_lover (1).svg';

import Walkthrough from './Walkthrough/Walkthrough';

const Body = () => (
  <>
    <StyledBodyContainer>
      <Fade left duration={2000}>
        <StyledDiv leftHalf>
          <article>
            <StyledHeader>Your love life is our priority</StyledHeader>
            <StyledDesc>
              We're committed to helping lovers and partners <br /> give what
              presents they want and deliver with confidence
            </StyledDesc>
          </article>
        </StyledDiv>
      </Fade>
      <Fade right duration={5000}>
        <StyledDiv rightHalf>
          <StyledImg src={CoffeeLover} alt="coffee" />
        </StyledDiv>
      </Fade>
    </StyledBodyContainer>

    <StyledHelpContainer>
      <Walkthrough />
    </StyledHelpContainer>

    <StyledGetStartedContainer>
      <h1>Help!</h1>
    </StyledGetStartedContainer>
  </>
);

export default Body;
