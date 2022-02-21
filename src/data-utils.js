export function generateFields(arr) {
  const keys = Object.keys(arr[0]);

  const fields = keys.map(key => {
    return {
      field: key,
      title: key.split('_')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')
    };
  });
  return fields;
}