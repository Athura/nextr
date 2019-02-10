import styled from 'styled-components';
import theme from './theme';

export const StyledApp = styled.div`
    text-align: center;
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(to bottom, ${theme.lightblue}, ${theme.midblue}, ${theme.midnight}, black);
`;

export const StyledContainer = styled.div`
    background-image : linear-gradient(to bottom right, black, ${theme.midnight}, ${theme.midblue} );
    position: absolute;

    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    margin: 10%;

    min-height: 200px;
    min-width: 300px;

    border-radius: 20px;
`;