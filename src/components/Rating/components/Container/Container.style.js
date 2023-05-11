import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  gap: 24px;

  &[data-size="sm"] {
    gap: 8px;
  }
`;

export { StyledContainer };
