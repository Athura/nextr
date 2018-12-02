import styled, { css } from 'styled-components';
import theme from '../theme';
import { moveInLeft } from '../animations';

export const Button = styled.button`
    border-radius: 3px;
    padding: 0.70em 1.5em;
    margin: 0 1em;
    background: transparent;
    color: ${theme.lightblue};
    border: 2px solid ${theme.information};
    cursor: pointer;
    ${props => props.landing && css`
        background: ${theme.darkgrey};
        color: ${theme.information};
        animation: ${moveInLeft} 2s;
        position: absolute;
        bottom: 10px;
    `};
`;