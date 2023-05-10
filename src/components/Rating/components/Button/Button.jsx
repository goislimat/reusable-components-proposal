import PropTypes from "prop-types";

import { useRating } from "../../Context";
import { StyledButton } from "./Button.style";

function Button({ rating, onClick, children, ...rest }) {
  const { selected, shouldAnimate, updateHovered, updateSelected } =
    useRating();

  const handleMouseEnter = () => {
    updateHovered(rating);
  };

  const handleClick = () => {
    updateSelected(rating);
    onClick(rating);
  };

  return (
    <StyledButton
      type="button"
      data-animate={shouldAnimate && selected === rating}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  rating: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
