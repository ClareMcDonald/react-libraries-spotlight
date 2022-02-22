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
  let friendly = [];
  let notFriendly = [];
    
  arr.map(person => {
    (person.friendly === true)
      ? friendly.push(person)
      : notFriendly.push(person);
  });
  console.log(friendly, notFriendly);
  return [friendly, notFriendly];
}
