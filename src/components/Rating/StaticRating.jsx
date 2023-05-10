import PropTypes from "prop-types";

import { Wrapper } from "./StaticRating.style";
import * as Rating from "./components";

function StaticRating({ value, max }) {
  return (
    <Rating.Root rating={value} max={max}>
      <Wrapper>
        <Rating.Container>
          {({ isHighlighted }) => <Rating.Icon isHighlighted={isHighlighted} />}
        </Rating.Container>
      </Wrapper>
    </Rating.Root>
  );
}

StaticRating.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
};

StaticRating.defaultProps = {
  max: 5,
};

export default StaticRating;
