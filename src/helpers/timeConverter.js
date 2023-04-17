/**
 * It takes a date object and returns a string in the format of `YYYY-MM-DD HH:MM:SS +HH:MM` where
 * `+HH:MM` is the timezone offset.
 * @param date - The date to convert.
 * @returns A string in the format of: YYYY-MM-DD HH:MM:SS +/-HH:MM
 */
const timeConvert = (date) => {
  const d = new Date(date);
  return d.toString();
};

const timeConvertNumber = (date) => {
  const d = new Date(date);
  return d.getTime();
};

export { timeConvert, timeConvertNumber };
