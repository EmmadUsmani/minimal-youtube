import { AllHtmlEntities as entities } from "html-entities";

export function formatTitle(title) {
  return entities.decode(title);
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
