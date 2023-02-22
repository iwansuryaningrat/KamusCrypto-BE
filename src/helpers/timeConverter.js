/**
 * It takes a date object and returns a string in the format of `YYYY-MM-DD HH:MM:SS +HH:MM` where
 * `+HH:MM` is the timezone offset.
 * @param date - The date to convert.
 * @returns A string in the format of: YYYY-MM-DD HH:MM:SS +/-HH:MM
 */
const timeConvert = (date) => {
  const d = new Date(date);
  const offset = d.getTimezoneOffset();
  const offsetHours = Math.floor(offset / 60);
  const offsetMinutes = offset % 60;
  const offsetString = `${offsetHours > 0 ? "-" : "+"}${Math.abs(offsetHours)
    .toString()
    .padStart(2, "0")}:${offsetMinutes.toString().padStart(2, "0")}`;
  return `${d.getFullYear()}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")} ${d
    .getHours()
    .toString()
    .padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}:${d
    .getSeconds()
    .toString()
    .padStart(2, "0")} ${offsetString}`;
};

export default timeConvert;
