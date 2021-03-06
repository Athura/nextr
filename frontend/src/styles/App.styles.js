import styled from 'styled-components';
import background from './img/kira-auf-der-heide-475677-unsplash.jpg';

export const StyledContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;

  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  margin: 5%;

  height: 90vh;
  min-width: 500px;

  border-radius: 20px;

  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  z-index: 1;
`;
