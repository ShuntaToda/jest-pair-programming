const isNumberString = (id: string) => !isNaN(Number(id));

export const formatAwsAccountId = (idStr: string): string => {
  if (isNumberString(idStr) === false) {
    throw new Error("数字ではありません");
  }
  if (idStr.length !== 12) {
    throw new Error("12桁ではありません");
  }

  // 123412341234　=> 1234-1234-1234
  // "123412341234".replace(/(\d{4})(?=\d)/g, "$1-")
  const replacedId = idStr.replace(/(\d{4})(?=\d)/g, "$1-");
  return replacedId;
};

try {
  // console.log(formatAwsAccountId("123412341234"));
  // console.log(formatAwsAccountId("123412341234fdaf"));
  // console.log(formatAwsAccountId("12341234"));
} catch (e) {
  console.error(e);
}
