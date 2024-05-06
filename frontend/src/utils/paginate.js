import lodash from "lodash";

export const paginate = (item, pageNumber, pageSize) => {
  const startIndex = Math.ceil((pageNumber - 1) * pageSize);
  return lodash(item).slice(startIndex).take(pageSize).value();
};
