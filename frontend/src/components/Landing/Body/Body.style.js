import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';

export const StyledBodyContainer = styled.div`
  display: flex;
`;

export const StyledHeader = styled.h1`
  font-size: 30px;
`;

export const StyledDesc = styled.p`
  font-size: 25px;
`;

export const StyledGetStartedContainer = styled.div`
  margin: auto;
  width: 100%;
  text-align: center;
  z-index: 6;
  margin-top: -60px;
  flex-direction: row;

  background-color: ${theme.gray};

  height: 400px;

  border-radius: 20px;
`;

export const StyledHelpContainer = styled.div`
  margin: auto;
  width: 100%;
  text-align: center;
  z-index: 6;

  flex-direction: row;

  background-color: ${theme.background};

  height: 600px;

  border-radius: 20px;
`;

export const StyledImg = styled.img`
  width: 600px;
  height: 350px;
  z-index: 20;
  max-width: 100%;
  max-height: 100%;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${props =>
    props.leftHalf &&
    css`
      flex: 1;
      padding: 1rem;
    `}

  ${props =>
    props.rightHalf &&
    css`
      flex: 1;
      padding: 1rem;
    `}
`;
