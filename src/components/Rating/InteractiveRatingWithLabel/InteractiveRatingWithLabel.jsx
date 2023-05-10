import PropTypes from "prop-types";

import * as Rating from "../components";
import { Wrapper } from "./InteractiveRatingWithLabel.style";

function InteractiveRatingWithLabel({ value, labels, onChange }) {
  return (
    <Rating.Root rating={value} labels={labels}>
      <Wrapper>
        <Rating.Container>
          {({ rating, isHighlighted }) => (
            <Rating.Button rating={rating} onClick={onChange}>
              <Rating.Icon isHighlighted={isHighlighted} />
            </Rating.Button>
          )}
        </Rating.Container>

        <Rating.Labels>
          {({ label, isVisible }) => (
            <Rating.Label isVisible={isVisible}>{label}</Rating.Label>
          )}
        </Rating.Labels>
      </Wrapper>
    </Rating.Root>
  );
}

InteractiveRatingWithLabel.propTypes = {
  value: PropTypes.number,
  labels: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

InteractiveRatingWithLabel.defaultProps = {
  value: 0,
  labels: ["Awful", "Bad", "Okay", "Good", "Excellent"],
  onChange: () => {},
};

export default InteractiveRatingWithLabel;
