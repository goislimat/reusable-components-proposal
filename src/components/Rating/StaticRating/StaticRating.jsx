import PropTypes from "prop-types";

import * as Rating from "../components";

function StaticRating({ value, max, size, color, children }) {
  return (
    <Rating.Root rating={value} max={max}>
      <Rating.Container data-size={size}>
        {({ isHighlighted }) => (
          <Rating.Icon
            isHighlighted={isHighlighted}
            data-size={size}
            color={color}
          >
            {children}
          </Rating.Icon>
        )}
      </Rating.Container>
    </Rating.Root>
  );
}

StaticRating.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  size: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
};

StaticRating.defaultProps = {
  max: 5,
  size: "md",
  color: "#ffc000",
  children: undefined,
};

export default StaticRating;
