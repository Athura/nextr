import React from 'react';
import {
  StyledWalkHeader,
  StyledWalkSection,
  StyledWalkTitle,
  StyledDesc,
  StyledSectionTitle,
  StyledWalkthrough,
} from './Walkthrough.style';

const walkthroughInfo = [
  {
    index: 1,
    header: '- 1 -',
    title: 'Questions',
    desc:
      'Your personal design consultant meets with you to discuss style, preferences and space.',
  },
  {
    index: 2,
    header: '- 2 -',
    title: 'Schedule',
    desc:
      'We provide a custom proposal for floaral service based on your schedule (weekly, bi-weekly or monthly).',
  },
  {
    index: 3,
    header: '- 3 -',
    title: 'Enjoy',
    desc:
      "We hand deliver your custom arrangements for you to enjoy. It's that simple.",
  },
];

const Walkthrough = () => (
  <>
    <StyledSectionTitle>How We Work!</StyledSectionTitle>
    <StyledWalkthrough>
      {walkthroughInfo.map(walkInfo => (
        <StyledWalkSection key={walkInfo.index}>
          <StyledWalkHeader>{walkInfo.header}</StyledWalkHeader>
          <StyledWalkTitle>{walkInfo.title}</StyledWalkTitle>
          <StyledDesc>{walkInfo.desc}</StyledDesc>
        </StyledWalkSection>
      ))}
    </StyledWalkthrough>
  </>
);

export default Walkthrough;
