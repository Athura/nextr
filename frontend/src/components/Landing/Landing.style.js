import styled from 'styled-components';
import theme from '../../styles/theme';

export const StyledContainer = styled.div`
    margin: auto;
    width: 100%;
    text-align: center;
    margin-top: 10%;
    z-index:6;
`;

export const StyledBody = styled.div`
    background: white;
    height: 160vh;
    margin: auto;
    width: 100%;
    text-align: center;
    margin-top: 10%;
    z-index: 2;
    border-radius: 10px;
`;

export const StyledH1 = styled.h1`
    font-size: 70px;
    font-family: 'Pacifico';
    letter-spacing: 5px;
    color: transparent;
    background: -webkit-linear-gradient(${theme.pink}, ${theme.purple});
    -webkit-background-clip: text;
    background-clip: text;
`;

export const StyledH3 = styled.h3`
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: white;
`;

export const StyledSpan = styled.span`
    font-size: 30px;
    letter-spacing: 2px;
    color: ${theme.gray};
    opacity: 0.6;
`;

export const StyledShift = styled.div`
    padding-top: 875px;
`;
