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
      
  arr.map(person => {
    (person.friendly === true)
      ? friendly++
      : notFriendly++;
  });
  
  return [friendly, notFriendly];
}

export function yesFriendlyNumber(arr) {
  let friendly = 0;
      
  arr.map(person => {
    if (person.friendly === true) {
      friendly++;
    }

  });

  return friendly;
}

export function notFriendlyNumber(arr) {
  let notFriendly = 0;
      
  arr.map(person => {
    if (person.friendly === false) {
      notFriendly++;
    }
  });

  return notFriendly;
}

export function getTotalOfEachGender(customers) {
  const hashMap = customers.reduce((acc, customer) => {
    if (acc[customer.gender]) {
      acc[customer.gender]++;
    } else {
      acc[customer.gender] = 1;
    }
    return acc;
  }, {});

  const array = Object.entries(hashMap);

  const newArray = array.map(item => (
    { gender: item[0], total: item[1] }
  ));

  return newArray;
}

export function getCustomersByCarModelYear(customers) {
  const hashMap = customers.reduce((acc, customer) => {
    if (acc[customer.car_year]) {
      acc[customer.car_year]++;
    } else {
      acc[customer.car_year] = 1;
    }
    return acc;
  }, {});
  
  const array = Object.entries(hashMap);

  const newArray = array.map(item => (
    { year: item[0], customers: item[1] }
  ));
  console.log(newArray);
  return newArray;
}