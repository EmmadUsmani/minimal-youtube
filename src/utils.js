export function formatTitle(title) {
  return title.replace("&amp;", "&").substr(0, 80);
}

export function formatDate(dateStr) {
  let str = new Date(dateStr).toDateString();
  const re = /\s(.*)/;
  str = re.exec(str)[1];
  return str.substr(0, 6) + "," + str.substr(6);
}

export function addCommas(number) {
  return parseInt(number).toLocaleString();
}
