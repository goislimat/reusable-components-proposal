import PropTypes from "prop-types";
import { Fragment } from "react";

import { useRating } from "../../Context";
import { StyledContainer } from "./Container.style";
import { shouldHighlight } from "./utils";

function Container({ children, ...rest }) {
  const { ratings, hovered, selected, resetHovered } = useRating();

  return (
    <StyledContainer onMouseLeave={resetHovered} {...rest}>
      {ratings.map((value) => {
        const isHighlighted = shouldHighlight(value, hovered, selected);

        return (
          <Fragment key={value}>
            {children({ rating: value, isHighlighted })}
          </Fragment>
        );
      })}
    </StyledContainer>
  );
}

Container.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Container;
