import React from 'react';
import Sections from './Sections/Sections';
import { StyledCTAContainer } from './CTA.style'

import  texting  from '../../../styles/img/undraw_texting_k35o.svg';
import  wedding  from '../../../styles/img/undraw_wedding_t1yl.svg';
import  love  from '../../../styles/img/undraw_in_love_3dcq.svg';

const section = [
    {
        name: 'texting',
        img: texting,
        section: 'For Lovers',
        description: 'Guarenteed to give your partner the best gift they could ever ask for'
    },
    {
        name: 'wedding',
        img: wedding,
        section: 'For Wedders',
        description: 'We gon get you the happiest bae of the day'
    },
    {
        name: 'love',
        img: love,
        section: 'For Perfection',
        description: 'In the name of love what are you waiting for! She gon leave you for the other guy who is using us.'
    }
]

const CTA = () => {
    return (
        <StyledCTAContainer>
            <Sections section={section} />
        </StyledCTAContainer>
    );
};

export default CTA;