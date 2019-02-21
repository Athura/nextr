import styled from 'styled-components';
import theme from '../../../styles/theme';

export const StyledCTAContainer = styled.div`
    position: absolute;
    background: ${theme.pink};

    left: 0;
    right: 0;
    top: 575px;
    bottom: 0;

    margin: 5%;

    height: 40vh;
    min-width: 300px;

    border-radius: 20px;

    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    z-index:10;
`;