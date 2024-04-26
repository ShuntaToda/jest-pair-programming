const splitDateStr = (dateStr: string) => {
  const dateRegex = /^(\d{4})\/(\d{2})\/(\d{2})$/;
  const match = dateStr.match(dateRegex);

  // マッチしない場合はfalseを返す
  if (!match) {
    return undefined;
  }

  const year = parseInt(match[1], 10);
  const month = parseInt(match[2], 10) - 1; // Dateオブジェクトの月は0から始まるため
  const day = parseInt(match[3], 10);

  return [year, month, day];
};

const isValidDate = (dateStr: string): boolean => {
  const tokens = splitDateStr(dateStr);
  if (tokens === undefined) {
    return false;
  }

  const [year, month, day] = tokens;
  const date = new Date(year, month, day);

  // 日付が無効な場合はfalseを返す
  if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
    return false;
  }

  return true;
};

const isFutureDate = (dateStr: string): boolean => {
  const [year, month, day] = splitDateStr(dateStr) || [-1, -1, -1];
  if (year === -1) return false;
  // const [year, month, day] = tokens;

  const date = new Date();
  console.log(date, date.getMonth(), month);
  if (date.getFullYear() <= year && date.getMonth() <= month && date.getDate() < day) {
    return false;
  }
  return true;
};

// export const checkValidPastDate = ({ dateStr, newDate = new Date() }: { dateStr: string; newDate?: Date }): boolean => {
export const checkValidPastDate = (dateStr: string): boolean => {
  if (isValidDate(dateStr) === false) {
    return false;
  }
  if (isFutureDate(dateStr) === false) {
    return false;
  }

  return true;
};
