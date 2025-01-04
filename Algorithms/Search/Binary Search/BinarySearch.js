const BinarySearch = (arr, target, left = 0, right = arr.length - 1) => {
  if (left > right) return "Not Found";
  let middle = Math.floor((left + right) / 2);
  if (arr[middle] < target) {
    return BinarySearch(arr, target, middle + 1, right);
  } else if (arr[middle] > target) {
    return BinarySearch(arr, target, left, middle - 1);
  } else {
    return middle;
  }
};
