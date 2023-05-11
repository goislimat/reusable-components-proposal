import styled from "styled-components";

const StyledIcon = styled.span`
  & svg {
    width: 36px;
    height: 34px;
  }

  path {
    stroke: #d5d5d9;
    stroke-width: 10%;
    fill: transparent;

    transition: all 250ms ease-in-out;
  }

  &[data-highlight="true"] {
    path {
      stroke-width: 0;
      fill: ${({ color }) => color || "#ffc000"};
    }
  }

  &[data-size="sm"] svg {
    width: 18px;
    height: 16px;
  }
`;

export { StyledIcon };
