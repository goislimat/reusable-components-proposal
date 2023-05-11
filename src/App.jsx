import styled from "styled-components";
import { ReferenceIcon } from "./components/Icon";
import {
  InteractiveRating,
  InteractiveRatingWithLabel,
  StaticRating,
} from "./components/Rating";

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
      <StaticRating value={3} size="sm" color="#006263" />
      <StaticRating value={3}>
        <ReferenceIcon />
      </StaticRating>
      <StaticRating value={3} size="sm" color="#006263">
        <ReferenceIcon />
      </StaticRating>
      <InteractiveRating
        onChange={(rating) => console.log(`the new rating is ${rating}`)}
      />
      <InteractiveRatingWithLabel
        onChange={(rating) => console.log(`the new rating is ${rating}`)}
      />
    </Wrapper>
  );
}

export default App;
