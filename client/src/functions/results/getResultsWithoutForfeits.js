export const getResultsWithoutForfeits = (results) => {
  return results.filter((result) => !result.isForfeit);
};
