import styled, { keyframes } from "styled-components";

const pulse = keyframes`
0% {
        transform: scale(1);
    }
    20% {
        transform: scale(1.4);
    }
    40% {
        transform: scale(0.8);
    }
    60%{
        transform: scale(1.2);            
    }
    80% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
    }
`;

const StyledButton = styled.button`
  all: unset;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &[data-animate="true"] {
    animation: ${pulse} 350ms ease-in-out 0ms 1 normal forwards;
  }
`;

export { StyledButton };
