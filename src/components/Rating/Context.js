import { createContext, useContext } from "react";

const RatingContext = createContext();

function useRating() {
  return useContext(RatingContext);
}

export { RatingContext, useRating };
