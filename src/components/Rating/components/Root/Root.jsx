import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { RatingContext } from "../../Context";
import { getRatingsArray } from "./utils";

function Root({ rating, max, children }) {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(Math.min(max, rating));
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
    <RatingContext.Provider
      value={{
        ratings: getRatingsArray(max),
        hovered,
        selected,
        shouldAnimate,
        resetHovered,
        updateHovered,
        updateSelected,
      }}
    >
      {children}
    </RatingContext.Provider>
  );
}

Root.propTypes = {
  rating: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Root;
