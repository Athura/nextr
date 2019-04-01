import styled from 'styled-components';

export const Collapsible = styled.button`
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;

  &:hover {
    background-color: #ccc;
  }
`;

export const Content = styled.div`
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
`;
