// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// I've solved this problem using the two pointer approach.
const maxProfit = function (prices) {
  let left = 0; // Buy pointer
  let right = 1; // Sell pointer
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[right] > prices[left]) {
      // Calculate profit and update maxProfit
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      // Move the buy pointer to the current sell pointer
      left = right;
    }
    right++; // Move the sell pointer forward
  }

  return maxProfit;
};
// Time complexity: O(n)
// Space complexity: O(1)
