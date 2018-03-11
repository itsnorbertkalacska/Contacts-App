const sortArrayByAttribute = (arr, attr, asc = true) => {
  const compare = (a, b) => {
    let valueA = a[attr];
    let valueB = b[attr];

    if (typeof valueA === 'string') {
      valueA = valueA.toLowerCase();
    }
    if (typeof valueB === 'string') {
      valueB = valueB.toLowerCase();
    }

    if (valueA < valueB) return -1;
    if (valueA > valueB) return 1;

    return 0;
  };

  if (asc) return arr.sort(compare);

  return arr.sort(compare).reverse();
};

module.exports = { sortArrayByAttribute };
