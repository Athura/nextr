import styled from 'styled-components';
import media from '../media';

export const PageWrapper = styled.div`
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -moz-justify-content: -moz-flex-start;
  -webkit-justify-content: -webkit-flex-start;
  -ms-justify-content: -ms-flex-start;
  justify-content: flex-start;
  -moz-flex-grow: 1;
  -webkit-flex-grow: 1;
  -ms-flex-grow: 1;
  flex-grow: 1;
  -moz-flex-shrink: 1;
  -webkit-flex-shrink: 1;
  -ms-flex-shrink: 1;
  flex-shrink: 1;
  height: 100%;
  padding: 5rem;

  @media (orientation: portrait) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-aspect-ratio: 16 / 7) {
    padding: 6vh;
  }

  @media (min-aspect-ration: 16 / 6) {
    padding: 0;
  }

  ${media.medium`
        height: auto;
        padding: 1rem;
    `}

  ${media.small`
        padding: 0;
    `}
`;
