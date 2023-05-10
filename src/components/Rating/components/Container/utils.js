const shouldHighlight = (rating, hovered, selected) => {
  const isBeingHovered = hovered >= rating;
  const hasSelectedAndNothingIsHovered = hovered === 0 && selected >= rating;

  return isBeingHovered || hasSelectedAndNothingIsHovered;
};

export { shouldHighlight };
