const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  x = String(x);
  let left = 0;
  let right = x.length - 1;
  while (left < right) {
    if (x[left] !== x[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
console.log(isPalindrome(10));
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
