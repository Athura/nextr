import styled from 'styled-components';
import theme from '../../../../styles/theme';

export const SectionCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.7s;
    border-radius: 5px;
    width: 20%;
    margin-right: 50px;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
`;

export const StyledImg = styled.svg`
    border-radius: 5px 5px 0 0;
    width: 100%;
`