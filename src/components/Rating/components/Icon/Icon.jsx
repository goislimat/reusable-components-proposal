import PropTypes from "prop-types";

import { StarIcon } from "../../../Icon";
import { StyledIcon } from "./Icon.style";

function Icon({ isHighlighted, children, ...rest }) {
  return (
    <StyledIcon data-highlight={isHighlighted} {...rest}>
      {children || <StarIcon />}
    </StyledIcon>
  );
}

Icon.propTypes = {
  isHighlighted: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default Icon;
