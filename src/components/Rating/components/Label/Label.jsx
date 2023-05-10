import PropTypes from "prop-types";

import { StyledLabel } from "./Label.style";

function Label({ isVisible, children, ...rest }) {
  return (
    <StyledLabel data-visible={isVisible} {...rest}>
      {children}
    </StyledLabel>
  );
}

Label.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
};

export default Label;
