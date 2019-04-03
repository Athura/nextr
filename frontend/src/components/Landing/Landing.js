import React, { Component } from 'react';
import {
  StyledContainer,
  StyledH1,
  StyledH3,
  StyledSpan,
  StyledBody,
  StyledShift,
} from './Landing.style';

import CTA from './CTA/CTA';
import Body from './Body/Body';

class Landing extends Component {
  render() {
    return (
      <>
        <StyledContainer>
          <StyledH1>GiftIt</StyledH1>
          <StyledH3>
            #1 platform for finding out the best gift for him or her.
          </StyledH3>
          <br />
          <StyledSpan>
            We unite the best gifters with those of us who need a hint
            sometimes.
          </StyledSpan>
        </StyledContainer>
        <StyledBody>
          <CTA />

          <StyledShift>
            <Body />
          </StyledShift>
        </StyledBody>
      </>
    );
  }
}

export default Landing;
