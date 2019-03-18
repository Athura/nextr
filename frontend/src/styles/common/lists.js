import styled, { css } from 'styled-components';

export const OrderedList = styled.ol`
  list-style: decimal;
  margin: 0 0 1.5rem 0;
  padding-left: 1.25rem;
`;

export const UnorderedList = styled.ul`
  list-style: disc;
  margin: 0 0 1.5rem 0;
  padding-left: 1rem;

  ${props =>
    props.alt &&
    css`
      list-style: none;
      padding-left: 0;
    `};

  ${props =>
    props.actions &&
    css`
      display: flex;
      cursor: default;
      list-style: none;
      margin-left: -0.75rem;
      padding-left: 0;
    `};

  ${props =>
    props.special &&
    css`
      justify-content: center;
      width: 100%;
      margin-left: 0;
    `};

  ${props =>
    props.stacked &&
    css`
      flex-direction: column;
      margin-left: 0;
    `};

  ${props =>
    props.fit &&
    css`
      width: calc(100% + 0.75rem);
    `};
`;
