import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledLabelsList = styled.ul`
  list-style-type: none;

  display: grid;
  grid-template-areas: "label";
  justify-content: center;
  align-items: center;

  text-align: center;
`;

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

export { Wrapper, StyledLabelsList as Labels, StyledLabel as Label };
