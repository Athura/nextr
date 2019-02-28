import styled from 'styled-components';
import theme from '../../styles/theme';

export const StyledFooter = styled.div`
    bottom: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 1em;
    overflow: hidden;
    margin: 0 auto;
    transition: all 1s ease;
    z-index: 999;

    &:hover {
        transition: all 1s ease;
        height: 10em;
    }
`;

export const StyledFootContainer = styled.div`
    margin-top: 5px;
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    background: ${theme.gray};
`;

export const StyledFootButton = styled.div`
    width:35px;
	height:40px;
	border: #727172 12px solid;
	border-radius:35px;
	margin:0 auto;
	position:relative;
    transition: all 1s ease;

    &:hover {
        width:35px;
        height:35px;
        border: #3A3A3A 12px solid;
        transition: all 1s ease;
        position:relative;
    }
`;

export const StyledFootCont = styled.div`
    position: relative;
    top: -45px;
    right: 190px;
    width: 150px;
    height: auto;
    margin: 0 auto;
`;

export const StyledFootCenter = styled.div`
    width:500px;
	float:left;
    text-align:center;
`;
