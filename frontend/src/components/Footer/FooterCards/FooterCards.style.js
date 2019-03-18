import styled, { css } from 'styled-components';
import background from '../../../styles/img/kira-auf-der-heide-475677-unsplash.jpg';

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

  right: 40px;
  width: 100%;
`;

export const FlipCard = styled.div`
  margin-top: 40px;
  background-color: transparent;
  width: 20%;
  height: 200px;
  perspective: 1000;
  cursor: pointer;

  &:hover {
    transform: rotateY(180deg);
  }

  ${props =>
    props.child1 &&
    css`
      margin-right: 35%;
    `};

  ${props =>
    props.child2 &&
    css`
      margin-right: 5%;
    `};
`;

export const StyledImg = styled.img.attrs({
  src: `${background}`,
})`
  border-radius: 5px 5px 0 0;
  width: inherit;
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: all 1s ease-in-out;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const FlipCardPart = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  ${props =>
    props.front &&
    css`
      background-color: #bbb;
      color: white;
    `}

  ${props =>
    props.back &&
    css`
      background-color: dodgerblue;
      color: white;
      transform: rotateY(180deg);
    `}
`;
