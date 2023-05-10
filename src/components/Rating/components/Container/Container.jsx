import PropTypes from "prop-types";
import { Fragment } from "react";

import { useRating } from "../../Context";
import { StyledContainer } from "./Container.style";

function Container({ children, ...rest }) {
  const { rating, ratings } = useRating();

  return (
    <StyledContainer {...rest}>
      {ratings.map((value) => {
        const isHighlighted = value <= rating;

        return <Fragment key={value}>{children({ isHighlighted })}</Fragment>;
      })}
    </StyledContainer>
  );
}

Container.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Container;
