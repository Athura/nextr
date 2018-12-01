import styled, { css } from 'styled-components';
import theme from '../theme';

export const Button = styled.button`
    border-radius: 3px;
    padding: 0.70em 1.5em;
    margin: 0 1em;
    background: transparent;
    color: ${theme.lightblue};
    border: 2px solid ${theme.lightblue};
    cursor: pointer;
    ${props => props.landing && css`
        background: 
    `};
`;