import PropTypes from "prop-types";

import * as Rating from "../components";

function InteractiveRating({ value, max, onChange }) {
  return (
    <Rating.Root rating={value} max={max}>
      <Rating.Container>
        {({ rating, isHighlighted }) => (
          <Rating.Button rating={rating} onClick={onChange}>
            <Rating.Icon isHighlighted={isHighlighted} />
          </Rating.Button>
        )}
      </Rating.Container>
    </Rating.Root>
  );
}

InteractiveRating.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
};

InteractiveRating.defaultProps = {
  value: 0,
  max: 5,
  onChange: () => {},
};

export default InteractiveRating;
