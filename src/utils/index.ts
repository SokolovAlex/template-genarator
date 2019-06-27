const getArrayFromEnum = (enumValue: object): string[] => {
  const values: string[] = [];
  for (const value in enumValue) {
    values.push(enumValue[value]);
  }
  return values;
};

export { getArrayFromEnum };
