import { flatten } from "../flatten";

describe("flatten", () => {
  test("[[ 1, 2, 3], [4, 5], [6, 7, 8, 9]] => [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
    expect(
      flatten([
        [1, 2, 3],
        [4, 5],
        [6, 7, 8, 9],
      ])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test("[] => []", () => {
    expect(flatten([])).toEqual([]);
  });
  test("[0] => [0]", () => {
    expect(flatten([0])).toEqual([0]);
  });
  test("[0, 1] => [0, 1]", () => {
    expect(flatten([0, 1])).toEqual([0, 1]);
  });
  test("[[]] => []", () => {
    expect(flatten([[]])).toEqual([]);
  });
  test("[[2]] => [2]", () => {
    expect(flatten([[2]])).toEqual([2]);
  });
  test("[[3, 4]] => [3,4]", () => {
    expect(flatten([[3, 4]])).toEqual([3, 4]);
  });
  test("[[2, 6], [7, 5, 8]] => [2, 6, 7, 5, 8]", () => {
    expect(
      flatten([
        [2, 6],
        [7, 5, 8],
      ])
    ).toEqual([2, 6, 7, 5, 8]);
  });
  test("[9, 11, [10, 12]] => [9, 11, 10, 12]", () => {
    expect(flatten([9, 11, [10, 12]])).toEqual([9, 11, 10, 12]);
  });
  test("[9, 11,  [9, 12], [9, 9]] => [9, 11, 9, 12, 9, 9]", () => {
    expect(flatten([9, 11, [9, 12], [9, 9]])).toEqual([9, 11, 9, 12, 9, 9]);
  });
});
