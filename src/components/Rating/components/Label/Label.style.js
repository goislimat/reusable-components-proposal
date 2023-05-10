import styled from "styled-components";

const StyledLabel = styled.li`
  grid-area: label;

  opacity: 0;
  transition: opacity 250ms ease-in-out;

  font-size: 12px;
  line-height: 16px;

  color: #82808e;

  &[data-visible="true"] {
    opacity: 1;
  }
`;

export { StyledLabel };
