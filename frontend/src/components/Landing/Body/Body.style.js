import styled, { css } from 'styled-components';
import  present  from '../../../styles/img/annie-spratt-210644-unsplash.jpg';

export const StyledBodyContainer = styled.div`
    display: flex;
`;

export const StyledImg = styled.div`
    background-image: url(${present});
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    margin-left: auto;
  margin-right: auto;
  width: 50%;
display: block;

    height: 400px;
    width: 37%;
    z-index: 20;
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${props => props.leftHalf && css`
        background-color: #ff9e2c;
        flex: 1;
        padding: 1rem;
    `}

    ${props => props.rightHalf && css`
        background-color: #ff9e2c;
        flex: 1;
        padding: 1rem;
    `}
`