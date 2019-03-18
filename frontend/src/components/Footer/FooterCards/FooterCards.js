import React from 'react';
import {
  CardsContainer,
  FlipCard,
  FlipCardInner,
  FlipCardPart,
  StyledImg,
} from './FooterCards.style';

const FooterCards = () => (
  <CardsContainer>
    <FlipCard child1>
      <FlipCardInner>
        <FlipCardPart front>
          <StyledImg alt="background" />
        </FlipCardPart>
        <FlipCardPart back>
          <h1>John Doe</h1>
          <p>Architect</p>
          <p>We love that guy!</p>
        </FlipCardPart>
      </FlipCardInner>
    </FlipCard>

    <FlipCard child2>
      <FlipCardInner>
        <FlipCardPart front>
          <StyledImg alt="background" />
        </FlipCardPart>
        <FlipCardPart back>
          <h1>John Doe</h1>
          <p>Architect</p>
          <p>We love that guy!</p>
        </FlipCardPart>
      </FlipCardInner>
    </FlipCard>

    <FlipCard>
      <FlipCardInner>
        <FlipCardPart front>
          <StyledImg alt="background" />
        </FlipCardPart>
        <FlipCardPart back>
          <h1>John Doe</h1>
          <p>Architect</p>
          <p>We love that guy!</p>
        </FlipCardPart>
      </FlipCardInner>
    </FlipCard>
  </CardsContainer>
);

export default FooterCards;
