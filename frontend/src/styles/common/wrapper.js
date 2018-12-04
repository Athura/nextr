import styled from 'styled-components';
import media from '../media';

export const Wrapper = styled.div`
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -moz-tranistion: opacity 1s ease-out, -moz-transform 0.75s ease-out;
    -webkit-tranistion: opacity 1s ease-out, -webkit-transform 0.75s ease-out;
    -ms-tranistion: opacity 1s ease-out, -ms-transform 0.75s ease-out;
    tranistion: opacity 1s ease-out, transform 0.75s ease-out;
    -moz-transition-delay: 0.25s;
    -webkit-transition-delay: 0.25s;
    -ms-transition-delay: 0.25s;
    transition-delay: 0.25s;
    cursor: default;
    position: relative;
    height: 32rem;
    box-shadow: 0 2rem 4rem 0.25rem rgba(46, 43, 55, 0.575);
`;