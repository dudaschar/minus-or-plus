export const handleResult = (moves) => {
  const lastResult = moves[moves.length - 1];
  const isOne = lastResult && lastResult.nextNumber === 1;
  const isFloat = lastResult && !Number.isInteger(lastResult.nextNumber);
  
  return isOne || isFloat;
};
