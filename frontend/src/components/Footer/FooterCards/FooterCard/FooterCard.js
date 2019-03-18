import React from 'react';
import { SectionCard } from '../../../Landing/CTA/Sections/Sections.style';

const FooterCard = ({ cardinfo }) => (
  <>
    {cardinfo.map(c => (
      <SectionCard footer key={c.title}>
        <h1>{c.title}</h1>
      </SectionCard>
    ))}
  </>
);

export default FooterCard;
