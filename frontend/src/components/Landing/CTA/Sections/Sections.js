import React from 'react';
import { SectionCard, StyledImg } from './Sections.style';

const Sections = ({section}) => {
    return (
        <SectionCard>
            {section.map(s => {
                return (
                    <div key={s.name}>
                        <StyledImg src={s.img} alt={s.name} />
                        <h3 className="header">{s.section}</h3>
                        <p>{s.description}</p>
                    </div>
                )
            })}
        </SectionCard>
    )
}

export default Sections;