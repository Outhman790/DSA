const bubbleSortAscending = function (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j + 1] < array[j]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

const bubbleSortDescending = function (array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = array.length; j > 0; j--) {
      if (array[j - 1] < array[j]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  return array;
};
