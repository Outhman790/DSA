// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

const searchInsert = (arr, target, left = 0, right = arr.length - 1) => {
  if (left > right) {
    return right + 1;
  }
  let middle = Math.floor((left + right) / 2);
  if (arr[middle] < target) {
    return searchInsert(arr, target, middle + 1, right);
  } else if (arr[middle] > target) {
    return searchInsert(arr, target, left, middle - 1);
  } else {
    return middle;
  }
};

console.log(searchInsert([1, 3, 5, 6], 5));
