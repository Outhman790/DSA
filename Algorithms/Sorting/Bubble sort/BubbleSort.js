// The bubbleSort function is a simple sorting algorithm that sorts an array in ascending or descending order by repeatedly swapping adjacent elements if they are in the wrong order. It takes two parameters: arr (the array to be sorted) and ascending (a boolean flag indicating whether to sort in ascending or descending order). The function returns the sorted array.
// Time complexity: O(n^2)
const bubbleSort = (arr, ascending = true) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++)
      if (
        (arr[j] < arr[j + 1] && !ascending) ||
        (arr[j] > arr[j + 1] && ascending)
      ) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
  }
  return arr;
};
console.log(bubbleSort([1, 3, 5, 6]));
console.log(bubbleSort([1, 3, 5, 6], false));
