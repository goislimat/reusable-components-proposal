function getRatingsArray(max, labels) {
  if (labels) {
    return labels.map((_, index) => index + 1);
  }

  return Array.from({ length: max }).map((_, index) => index + 1);
}

export { getRatingsArray };
