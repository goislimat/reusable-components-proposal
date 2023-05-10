import PropTypes from "prop-types";
import { Fragment } from "react";

import { useRating } from "../../Context";
import { StyledLabelsList } from "./Labels.style";

function Labels({ children, ...rest }) {
  const { ratings, labels, hovered, selected } = useRating();

  return (
    <StyledLabelsList {...rest}>
      {ratings.map((value, index) => {
        const isBeingHovered = hovered === value;
        const isSelected = !hovered && selected === value;

        return (
          <Fragment key={value}>
            {children({
              label: labels.at(index),
              isVisible: isBeingHovered || isSelected,
            })}
          </Fragment>
        );
      })}
    </StyledLabelsList>
  );
}

Labels.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Labels;
