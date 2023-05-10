import styled from "styled-components";
import Rating from "./components/Rating";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Rating value={4} />
    </Wrapper>
  );
}

export default App;
