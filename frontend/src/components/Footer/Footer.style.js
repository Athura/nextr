import styled from 'styled-components';
import theme from '../../styles/theme';

import background from '../../styles/img/mahkeo-277047-unsplash.jpg';

export const StyledFooter = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 3.5em;
  overflow: hidden;
  margin: 0 auto;
  transition: all 1s ease;
  z-index: 999;

  &:hover {
    transition: all 1s ease;
    height: 25em;
  }
`;

export const StyledFootContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${background});

  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  border-radius: 20px;

  margin-top: 5px;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
`;

export const StyledFootButton = styled.div`
  width: 35px;
  height: 30px;
  border: #727172 12px solid;
  border-radius: 35px;
  margin: 0 auto;
  position: relative;
  transition: all 1s ease;

  &:hover {
    width: 35px;
    height: 35px;
    border: #3a3a3a 12px solid;
    transition: all 1s ease;
    position: relative;
  }
`;

export const StyledFootCont = styled.div`
  position: relative;
  top: -10px;
  right: -60px;
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

export const StyledFootCenter = styled.div`
  width: 90%;
  text-align: center;
`;
