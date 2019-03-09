import React from 'react';
import { SectionCard } from '../../../Landing/CTA/Sections/Sections.style';

const FooterCard = ({ cardinfo }) => {
    return (
        <>
            {cardinfo.map(c => {
                return (
                    <SectionCard footer key={c.title}>
                        <h1>{c.title}</h1>
                    </SectionCard>
                )
            })}
        </>
    )
}

export default FooterCard;