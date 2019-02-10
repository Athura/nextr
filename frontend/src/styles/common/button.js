import styled, { css } from 'styled-components';
import theme from '../theme';
import { moveInLeft } from '../animations';

export const Button = styled.a`
    padding: 0.70em 1.5em;
    margin: 300px 1em;
    background: transparent;
    color: #FFF;
    cursor: pointer;
    border-radius: 20px;

    ${props => props.landing && css`
        background: ${theme.darkgrey};
        color: ${theme.information};
        animation: ${moveInLeft} 2s;
        position: absolute;
        bottom: 10px;
    `};

    ${props => props.signup && css`
        background-image: linear-gradient(to top right, ${theme.midblue}, ${theme.lightblue});
    `}

    ${props => props.register && css`
        background-image: linear-gradient(to top right, ${theme.salmon}, ${theme.purple})
    `}
`;