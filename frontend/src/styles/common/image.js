import styled, { css } from 'styled-components';

export const Image = styled.div`
    display: inline-block;
    position: relative;
    border: 0;

    ${props => props.filtered && css`
        background-image: url(""), 
        linear-gradient(45deg, rgba(114, 97, 147, 0.25) 25%,
         rgba(227, 123, 124, 0.25) 50%, rgba(255, 228, 180, 0.25)), 
         linear-gradient(0deg, rgba(0, 0, 0, 0.125), rgba(0, 0, 0, 0.125));
         background-image: 128px 128px auto;
         pointer-events: none;
         content: '';
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         opacity: 1;
         z-index: 1;
    `};

    ${props => props.topleft && css`

    `};
`;