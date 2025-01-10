function mySqrt(x) {
  if (x < 0) {
    throw new Error("Input must be a non-negative integer.");
  }
  if (x === 0 || x === 1) {
    return x;
  }
  let left = 1;
  let right = x;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (mid === Math.floor(x / mid)) {
      return mid;
    } else if (mid < Math.floor(x / mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}
