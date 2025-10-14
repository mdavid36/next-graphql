/**
 * Converts a camelCase string to a human-readable label.
 * @param key The camelCase string to convert.
 * @returns A human-readable label.
 * @example
 * handleLabelFromKey("firstName") // "First Name"
 */

function handleLabelFromKey(key: string) {
  const label =
    key.charAt(0).toUpperCase() +
    key.slice(1).replace(/([a-z])([A-Z])/g, "$1 $2");
  return label;
}

export default handleLabelFromKey;
