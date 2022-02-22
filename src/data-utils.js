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
  let friendly = 0;
  let notFriendly = 0;
    
  for (let i = 0; i < arr.length; i++) {
    if (arr.friendly === true) {
      friendly++;
    } else if (notFriendly++) {
      notFriendly++;
    }
  }
}
