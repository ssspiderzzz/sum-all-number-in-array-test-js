let sumItems = function(array) {
  while (array.length > 0) {
    for (let i = 0; i < array.lentgh; ++i) {
      if (array[i] === undefined) {
        array.slice(i,1);
      }
    }
    const element = array.shift();

    if (Array.isArray(element)) {
      return sumItems(element) + sumItems(array);
    } else {
      return element + sumItems(array);
    }
  }
  return 0;
};

module.exports = sumItems;