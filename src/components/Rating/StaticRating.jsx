import PropTypes from "prop-types";

import * as Rating from "./components";

function StaticRating({ value, max }) {
  return (
    <Rating.Root rating={value} max={max}>
      <Rating.Container>
        {({ isHighlighted }) => <Rating.Icon isHighlighted={isHighlighted} />}
      </Rating.Container>
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
