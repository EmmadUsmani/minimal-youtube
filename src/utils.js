export function formatDate(dateStr) {
  let str = new Date(dateStr).toDateString();
  const re = /\s(.*)/;
  str = re.exec(str)[1];
  return str.substr(0, 6) + "," + str.substr(6);
}
