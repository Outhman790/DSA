const BinarySearchRecursion = (
  arr,
  target,
  left = 0,
  right = arr.length - 1
) => {
  if (left > right) return "Not Found";
  let middle = Math.floor((left + right) / 2);
  if (arr[middle] < target) {
    return BinarySearchRecursion(arr, target, middle + 1, right);
  } else if (arr[middle] > target) {
    return BinarySearchRecursion(arr, target, left, middle - 1);
  } else {
    return middle;
  }
};
const binarySearchLoops = (arr, target, left = 0, right = arr.length - 1) => {
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (target > arr[middle]) {
      left = middle + 1;
    } else if (target < arr[middle]) {
      right = middle - 1;
    } else if (target == arr[middle]) {
      return middle;
    }
  }
  return -1;
};
// Time comlexity: O(log n)
console.log(binarySearchLoops([-1, 0, 3, 5, 9, 12], 2));
