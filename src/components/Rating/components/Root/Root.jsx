import PropTypes from "prop-types";

import { RatingContext } from "../../Context";
import { getRatingsArray } from "./utils";

function Root({ rating, max, children }) {
  return (
    <RatingContext.Provider value={{ rating, ratings: getRatingsArray(max) }}>
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
