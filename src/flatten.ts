type NumberArray = Array<number | number[]>;
export const flatten = (targetArray: NumberArray): number[] => {
  const result = targetArray.flat();
  return result;
};
