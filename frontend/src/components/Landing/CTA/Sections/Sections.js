import React from 'react';
import { SectionCard, StyledImg } from './Sections.style';

const Sections = ({ section }) => (
  <>
    {section.map(s => (
      <SectionCard key={s.name}>
        <StyledImg src={s.img} alt={s.name} />
        <h3 className="header">{s.section}</h3>
        <p>{s.description}</p>
      </SectionCard>
    ))}
  </>
);

export default Sections;
