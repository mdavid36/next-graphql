/**
 * Creates an array of key-value pairs that has been filtered for empty string values from an object.
 * @param filterObject The object to convert.
 * @returns An array of key-value pairs that has been filtered for empty string values.
 */

export const handleFiltersWithValues = (filterObject: object) => {
  const filteredEntries = Object.entries(filterObject).filter(
    ([, value]) => value !== ""
  );
  return filteredEntries;
};
