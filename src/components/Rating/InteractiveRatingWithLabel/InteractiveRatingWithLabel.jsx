import PropTypes from "prop-types";

import * as Rating from "../components";
import { RatingContext } from "../Context";
import { Label, Labels, Wrapper } from "./InteractiveRatingWithLabel.style";

function InteractiveRatingWithLabel({ value, labels, onChange }) {
  return (
    <Rating.Root rating={value} max={labels.length}>
      <Wrapper>
        <Rating.Container>
          {({ rating, isHighlighted }) => (
            <Rating.Button rating={rating} onClick={onChange}>
              <Rating.Icon isHighlighted={isHighlighted} />
            </Rating.Button>
          )}
        </Rating.Container>

        <RatingContext.Consumer>
          {({ ratings, hovered, selected }) => (
            <Labels>
              {ratings.map((value, index) => (
                <Label
                  key={value}
                  data-visible={
                    hovered === value || (hovered === 0 && selected === value)
                  }
                >
                  {labels.at(index)}
                </Label>
              ))}
            </Labels>
          )}
        </RatingContext.Consumer>
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
