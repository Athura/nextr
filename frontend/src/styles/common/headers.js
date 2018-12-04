import styled, { css } from 'styled-components';

export const StyledHeader = styled.h1`
    font-size: 3rem;
    line-height: 1.2;

    ${props => props.major && css`
        margin: 0 0 2.625rem 0;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            width: 3.5rem;
            height: 0.1rem;
            background-color: rgba(255, 255, 255, 0.25);
            bottom: -1.325rem;
        }
    `};

    
`;