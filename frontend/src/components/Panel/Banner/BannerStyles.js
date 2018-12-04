import styled, { css } from 'styled-components';

export const Panel = styled.section`
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-flex-grow: 0;
    -webkit-flex-grow: 0;
    -ms-flex-grow: 0;
    flex-grow: 0;
    -moz-flex-shrink: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-shrink: 0;
    flex-shrink: 0;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    -moz-align-items: -moz-stretch;
    -webkit-align-items: -webkit-stretch;
    -ms-align-items: -ms-stretch;
    align-items: stretch;
    height: 100%;
    overflow-y: hidden;
    overflow-x: auto;

    ${props => props.All && css`
        position: relative;
        min-width: 10rem;
    `};

    ${props => props.color0 && css`
        bakcground-image: url(""), linear-gradient(45deg, #726193 20%, #e37b7c 60%);
        background-size: 128px 128px, auto;
    `};
`;