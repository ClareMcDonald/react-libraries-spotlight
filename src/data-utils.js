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

export function friendlyNumber(arr) {
  console.log(arr[0]);
  let friendly = 0;
  let notFriendly = 0;
      
  arr.map(person => {
    (person.friendly === true)
      ? friendly++
      : notFriendly++;
  });
  console.log(friendly, notFriendly);
  return [friendly, notFriendly];
}