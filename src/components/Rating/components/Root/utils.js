function getRatingsArray(max) {
  return Array.from({ length: max }).map((_, index) => index + 1);
}

export { getRatingsArray };
