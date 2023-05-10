import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import * as Rating from "../components";
import { StyledButton } from "./InteractiveRating.style";

function InteractiveRating({ value, max }) {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(value);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const resetHovered = () => {
    setHovered(0);
  };

  const updateHovered = (value) => {
    setHovered(value);
  };

  const updateSelected = (value) => {
    setSelected(value);
    setShouldAnimate(true);
  };

  const shouldHighlight = (rating) => {
    const isBeingHovered = hovered >= rating;
    const hasSelectedAndNothingIsHovered = hovered === 0 && selected >= rating;

    return isBeingHovered || hasSelectedAndNothingIsHovered;
  };

  useEffect(() => {
    let timeout;

    if (shouldAnimate) {
      timeout = setTimeout(() => {
        setShouldAnimate(false);
      }, 350);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [shouldAnimate]);

  return (
    <Rating.Root rating={selected} max={max}>
      <Rating.Container onMouseLeave={resetHovered}>
        {({ rating }) => (
          <StyledButton
            type="button"
            data-animate={shouldAnimate && selected === rating}
            onMouseEnter={() => updateHovered(rating)}
            onClick={() => updateSelected(rating)}
          >
            <Rating.Icon isHighlighted={shouldHighlight(rating)} />
          </StyledButton>
        )}
      </Rating.Container>
    </Rating.Root>
  );
}

InteractiveRating.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
};

InteractiveRating.defaultProps = {
  value: 0,
  max: 5,
};

export default InteractiveRating;
