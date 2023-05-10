import PropTypes from "prop-types";

import { StarIcon } from "../Icon";
import { IconContainer, StarsContainer, Wrapper } from "./Rating.style";

function Rating({ value, max }) {
  return (
    <Wrapper>
      <StarsContainer>
        {Array.from({ length: max }).map((_, index) => {
          const rating = index + 1;

          return (
            <IconContainer key={rating} data-highlight={rating <= value}>
              <StarIcon />
            </IconContainer>
          );
        })}
      </StarsContainer>
    </Wrapper>
  );
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
};

Rating.defaultProps = {
  max: 5,
};

export default Rating;
