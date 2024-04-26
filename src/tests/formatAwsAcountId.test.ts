import { formatAwsAccountId } from "../formatAwsAcountId";

describe("formatAwsAccountId", () => {
  test("'123412341234'の場合、'1234-1234-1234'。", () => {
    expect(formatAwsAccountId("123412341234")).toBe("1234-1234-1234");
  });

  test("'023412341234'の場合、'0234-1234-1234'。", () => {
    expect(formatAwsAccountId("023412341234")).toBe("0234-1234-1234");
  });

  test("'abadfafasd'の場合、エラー'数字ではありません'。", () => {
    expect(() => formatAwsAccountId("abadfafasd")).toThrow("数字ではありません");
  });

  test("'12345'の場合、エラー'12桁ではありません'。", () => {
    expect(() => formatAwsAccountId("12345")).toThrow("12桁ではありません");
  });
});
