import styled, { css } from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalCard = styled.div`
  position: relative;
  min-width: 320px;
  z-index: 10;
  margin-bottom: 100px;
  background: white;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const BackgroundNorm = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
`;

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.div`
  cursor: pointer;
  position: relative;
  z-index: 2;
  -webkit-appearance: none;
  background: none;
  outline: none;
  border: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  border-radius: 2px;
  transition: all 0.5s ease;
  font-weight: 600;
  font-size: 14px;
  height: 60px;
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 0px;
  box-shadow: 0 0 0 white, 0 0 0 white;

  &:hover {
    box-shadow: -15px 0 70px -15px #504bff, 15px 0 70px -15px #4cfa63;
  }
`;

export const ButtonText = styled.span`
  display: inline-block;
  position: relative;
  z-index: 2;
  background: linear-gradient(to right, #504bff, #4cfa63);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ButtonCircle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  box-shadow: 0 0 10px #504bff, 0 0 20px #504bff, 0 0 30px #504bff;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: none;
  }

  ${props =>
    props.circle2 &&
    css`
      top: auto;
      bottom: 0;

      &:hover {
        transform: translate(-15px, 15px) scale(0);
      }
    `};

  ${props =>
    props.circle3 &&
    css`
      left: auto;
      right: 0;
      box-shadow: 0 0 10px #4cfa63, 0 0 20px #4cfa63, 0 0 30px #4cfa63;

      &:hover {
        transform: translate(15px, -15px) scale(0);
      }
    `};

  ${props =>
    props.circle4 &&
    css`
      left: auto;
      top: auto;
      bottom: 0;
      right: 0;
      box-shadow: 0 0 10px #4cfa63, 0 0 20px #4cfa63, 0 0 30px #4cfa63;

      &:hover {
        transform: translate(15px, 15px) scale(0);
      }
    `};

  ${props =>
    props.circle1 &&
    css`
      &:hover {
        transform: translate(-15px, -15px) scale(0);
      }
    `};
`;

export const Popup = styled.div`
  opacity: 0;
  visibility: hidden;
  height: 400px;
  width: 400px;
  flex-shrink: 0;
  border-radius: 3px;
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
`;

export const PopupInside = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0 0 black;
  transition: box-shadow 0.5s ease 0.7s, border-radius 0.35s ease 0.7s;
`;

export const Backgrounds = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const Background = styled.div`
  --offset: 0;
  position: absolute;
  left: var(--offset);
  right: var(--offset);
  bottom: var(--offset);
  top: var(--offset);
  background: linear-gradient(to right, #504bff, #4cfa63);
  transform: scale(0);
  transition: all 0.5s ease 0s;
  border-radius: 50%;

  ${props =>
    props.background2 &&
    css`
      --offset: 10%;
      position: absolute;
      left: var(--offset);
      right: var(--offset);
      bottom: var(--offset);
      top: var(--offset);
      background: linear-gradient(to right, #6665ff, #69fa7f);
      transform: scale(0);
      transition: all 0.5s ease 0.1s;
    `};

  ${props =>
    props.background3 &&
    css`
      --offset: 20%;
      position: absolute;
      left: var(--offset);
      right: var(--offset);
      bottom: var(--offset);
      top: var(--offset);
      background: linear-gradient(to right, #8583ff, #85fa99);
      z-index: 2;
      transition: all 0.5s ease 0.2s;
    `};

  ${props =>
    props.background4 &&
    css`
      --offset: 30%;
      position: absolute;
      left: var(--offset);
      right: var(--offset);
      bottom: var(--offset);
      top: var(--offset);
      background: linear-gradient(to right, #aaaaff, #a7fab7);
      z-index: 3;
      transition: all 0.5s ease 0.3s;
    `};

  ${props =>
    props.background5 &&
    css`
      --offset: 40%;
      position: absolute;
      left: var(--offset);
      right: var(--offset);
      bottom: var(--offset);
      top: var(--offset);
      background: linear-gradient(to right, #c9c8ff, #c3fad1);
      z-index: 4;
      transition: all 0.5s ease 0.4s;
    `};

  ${props =>
    props.background4 &&
    css`
      --offset: 40%;
      position: absolute;
      left: var(--offset);
      right: var(--offset);
      bottom: var(--offset);
      top: var(--offset);
      background: white;
      z-index: 5;
      transition: all 0.8s ease 0.4s;
    `};
`;

export const Content = styled.div`
  --offset: 0;
  position: absolute;
  left: var(--offset);
  right: var(--offset);
  bottom: var(--offset);
  top: var(--offset);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.35s ease 0.75s;
  z-index: 10;
`;
