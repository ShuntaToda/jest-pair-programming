import { checkValidPastDate } from "../checkValidPastDate";

test("'2021/04/01'の場合はtrue", () => {
  expect(checkValidPastDate("2021/04/01")).toBe(true);
});

test("'200000000'の場合はfalse", () => {
  expect(checkValidPastDate("200000000")).toBe(false);
});

test("'2020/13/01'の場合はfalse", () => {
  expect(checkValidPastDate("2020/13/01")).toBe(false);
});

test("'2020/12/35'の場合はfalse", () => {
  expect(checkValidPastDate("2020/12/35")).toBe(false);
});

test("'2024/02/29'(閏年)の場合はtrue", () => {
  expect(checkValidPastDate("2024/02/29")).toBe(true);
});

test("'2023/02/29'(閏年ではない)の場合はfalse", () => {
  expect(checkValidPastDate("2023/02/29")).toBe(false);
});

// ターゲット
describe("checkValidPastDate", () => {
  // コンテキスト
  describe("現在時刻が2024/04/23 0時0分0秒", () => {
    beforeAll(() => {
      jest.useFakeTimers();
      const fixedTime = new Date(2024, 4 - 1, 23);
      console.log(fixedTime);
      jest.setSystemTime(fixedTime);
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    test("'2024/04/24'(未来)の場合false", () => {
      expect(checkValidPastDate("2024/04/24")).toBe(false);
    });
    test("'2024/04/23'(現在時刻と同じ日)の場合", () => {
      expect(checkValidPastDate("2024/04/23")).toBe(true);
    });
    test("'2024/04/22'(過去)の場合", () => {
      expect(checkValidPastDate("2024/04/22")).toBe(true);
    });
  });
});
