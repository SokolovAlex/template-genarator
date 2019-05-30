const getArrayFromEnum = (enumValue: object): Array<string> => {
  const values: Array<string> = [];
  for (let value in enumValue) {
    values.push(enumValue[value]);
  }
  return values;
}

export { getArrayFromEnum };