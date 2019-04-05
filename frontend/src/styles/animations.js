import { keyframes } from '../../node_modules/styled-components';

export const moveInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }
    80% {
        transform: translateX(10px);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
`;

export const moveInRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(200px);
    }
    80% {
        transform: translateX(-10px);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
`;

export const moveInBottom = keyframes`
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translate(0px);
    }
`;

export const ripple = keyframes`
    0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
`;
