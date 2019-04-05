import React from 'react';
import styled from 'styled-components';
import { ripple } from '../../styles/animations';

const StyledSpinner = styled.div`
  animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
`;

const OuterSpinnerTwo = styled.div`
  animation-delay: -0.5s;
`;

const OuterSpinnerOne = styled.div`
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
`;

const Spinner = () => {
    return (
        <>
            <StyledSpinner>
                <OuterSpinnerOne></OuterSpinnerOne>
                <OuterSpinnerTwo></OuterSpinnerTwo>
            </StyledSpinner>
        </>
    );
};

export default Spinner;
