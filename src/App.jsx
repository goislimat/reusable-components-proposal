import styled from "styled-components";
import { InteractiveRating, StaticRating } from "./components/Rating";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
`;

function App() {
  return (
    <Wrapper>
      <StaticRating value={4} />
      <InteractiveRating
        onChange={(rating) => console.log(`the new rating is ${rating}`)}
      />
    </Wrapper>
  );
}

export default App;
