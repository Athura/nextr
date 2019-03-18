import styled, { css } from 'styled-components';
import theme from '../theme';
import { moveInLeft } from '../animations';

export const Button = styled.a`
  margin-top: 6em 1em;
  background: transparent;
  color: #fff;
  cursor: pointer;
  opacity: 0.5;

  ${props =>
    props.border &&
    css`
      border: 2px solid ${theme.gray};
      border-radius: 10px;
    `}

  ${props =>
    props.about &&
    css`
      text-transform: uppercase;
      letter-spacing: 2px;
      padding: 0.7em 0.75em;
    `};

  ${props =>
    props.signup &&
    css`
        padding: 0.70em 1.5em;
        position: relative;
        margin-right: 10px;
        /*background-image: linear-gradient(to top right, ${theme.midblue}, ${
      theme.lightblue
    }); */
    `}

  ${props =>
    props.register &&
    css`
        padding: 0.70em 1.5em;
        position: relative;
        margin-right: 20px;
        /*background-image: linear-gradient(to top right, ${theme.salmon}, ${
      theme.purple
    }) */
    `}

    &:hover {
    color: ${theme.salmon};
    border-color: ${theme.salmon};
    transition: all 1s ease 0s;
  }
`;
