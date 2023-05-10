import styled from "styled-components";

const Wrapper = styled.div``;

const StarsContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const IconContainer = styled.span`
  path {
    stroke: #d5d5d9;
    stroke-width: 10%;
    fill: transparent;

    transition: all 250ms ease-in-out;
  }

  &[data-highlight="true"] {
    path {
      stroke-width: 0;
      fill: #ffc000;
    }
  }
`;

export { Wrapper, StarsContainer, IconContainer };
