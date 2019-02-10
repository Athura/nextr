import styled from 'styled-components';
import theme from './theme';

export const StyledApp = styled.div`
    text-align: center;
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(to top right,
        purple 30%,
        ${theme.darkpurple},
        ${theme.pink},
        ${theme.salmon},
        ${theme.orange});
`;

export const StyledContainer = styled.div`
    background-image : radial-gradient(
        circle at top,
        ${theme.top} 1%,
        ${theme.middle} 30%,
        black );
    position: absolute;

    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    margin: 10%;

    min-height: 200px;
    min-width: 500px;

    border-radius: 20px;

    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`;