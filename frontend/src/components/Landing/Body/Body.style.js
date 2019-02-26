import styled, { css } from 'styled-components';
import  present  from '../../../styles/img/annie-spratt-210644-unsplash.jpg';

export const StyledBodyContainer = styled.div`
    display: flex;
`;

export const StyledHelpContainer = styled.div`
    margin: auto;
    width: 100%;
    text-align: center;
    margin-top: 20%;
    z-index:6;

    background-color: tomato;

    height: 600px;

    border-radius: 20px;
`;

export const StyledImg = styled.img`
    background-image: url(${present});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;

    width: 800px;
    height: 513px;
    z-index: 20;

    display: block;
    margin-left: auto;
    margin-right: auto;

    object-fit: cover;
    max-width: 100%;
    max-height: 100%;

    border-radius: 20px;
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${props => props.leftHalf && css`
        flex: 1;
        padding: 1rem;
    `}

    ${props => props.rightHalf && css`
        flex: 1;
        padding: 1rem;
    `}
`;
