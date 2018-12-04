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
        background-image: url(""), linear-gradient(45deg, #726193 20%, #e37b7c 60%);
        background-size: 128px 128px, auto;
    `};

    ${props => props.color1 && css`
        background-image: url(""), linear-gradient(45deg, #726193 20%, #e37b7c 60%);
        background-size: 128px 128px, auto;
        background-color: #726193;
    `};

    ${props => props.color2 && css`
        background-image: url(""), linear-gradient(45deg, #726193 20%, #e37b7c 60%);
        background-size: 128px 128px, auto;
        background-color: #e37b7c;
    `};

    ${props => props.color3 && css`
        background-image: url(""), linear-gradient(45deg, #726193 20%, #e37b7c 60%);
        background-size: 128px 128px, auto;
        background-color: #ffe4b4;
    `};

    ${props => props.color4 && css`
        background-image: url(""), linear-gradient(45deg, #726193 20%, #e37b7c 60%);
        background-size: 128px 128px, auto;
        background-color: #353865;
    `};

    ${props => props.color5 && css`
        background-image: url(""), linear-gradient(45deg, #726193 20%, #e37b7c 60%);
        background-size: 128px 128px, auto;
        background-color: #6c5e86;
    `};
    
    ${props => props.color6 && css`
        background-image: url(""), linear-gradient(45deg, #726193 26%, #e37b7c 60%);
        background-size: 128px 128px, auto;
        background-color: #de7172;
    `};

    ${props => props.color7 && css`
        background-image: url(""), linear-gradient(45deg, #726193 20%, #e37b7c 60%);
        background-size: 128px 128px, auto;
        background-color: #fedea6;
    `};

    ${props => props.intro && css`
        padding: 3.5rem 3.5rem 2rem 3.5rem;
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
        -moz-align-items: -moz-flex-start;
        -webkit-align-items: -webkit-flex-start;
        -ms-align-items: -ms-flex-start;
        align-items: flex-start;
        -moz-flex-direction: column;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 22rem;
    `};

    ${props => props.joined && css`
        width: 18.5rem;
        padding-right: 0;
    `};

    ${props => props.inner && css`
        padding-left: 2.625rem;
    `};

    ${props => props.banner && css`
        -moz-align-items: -moz-stretch;
        -webkit-align-items: -webkit-stretch;
        -ms-align-items: -ms-stretch;
        align-items: stretch;
    `};

    ${props => props.right && css`
        flex-direction: row-reverse;
    `};
`;

export const PanelContent = styled.div`
    padding: 3.5rem 3.5rem 2rem 3.5rem;
        display: -moz-flex;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        -moz-flex-direction: column;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -moz-justify-content: center;
        -webkit-justify-content: center;
        -ms-justify-content: center;
        justify-content: center;
        -moz-flex-grow: 0;
        -webkit-flex-grow: 0;
        -ms-flex-grow: 0;
        flex-grow: 0;
        -moz-flex-shrink: 0;
        -webkit-flex-shrink: 0;
        -ms-flex-shrink: 0;
        flex-shrink: 0;

    ${props => props.color0 && css`
        background-image: url(""), linear-gradient(45deg, #726193 20%, #e37b7c 60%);
        background-size: 128px 128px, auto;
    `};

    ${props => props.span375 && css`
        width: 37.5rem;
    `};
`;