import styled, { css } from 'styled-components';
import theme from '../theme';
import { moveInLeft } from '../animations';

export const Button = styled.button`
    padding: 0.70em 1.5em;
    margin-top: 6em 1em;
    background: transparent;
    color: #FFF;
    cursor: pointer;
    border-radius: 10px;
    border-color: ${theme.pink};

    ${props => props.signup && css`
        position: relative;
        /*background-image: linear-gradient(to top right, ${theme.midblue}, ${theme.lightblue}); */
    `}

    ${props => props.register && css`
        position: relative;
        margin-right: 40px;
        /*background-image: linear-gradient(to top right, ${theme.salmon}, ${theme.purple}) */
    `}
`;