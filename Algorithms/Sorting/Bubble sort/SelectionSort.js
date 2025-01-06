function selectionSort(arr) {
  const n = arr.length;

  // Outer loop to iterate through the array
  for (let i = 0; i < n - 1; i++) {
    // Assume the current index is the minimum
    let minIndex = i;

    // Inner loop to find the minimum element in the unsorted part
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Update the index of the minimum element
      }
    }

    // Swap the found minimum element with the first unsorted element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap using destructuring
    }
  }

  return arr; // Return the sorted array
}
