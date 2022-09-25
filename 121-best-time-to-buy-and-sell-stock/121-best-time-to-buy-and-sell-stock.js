/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let leftIdx = 0,
    rightIdx = 1,
    profit = 0;

  while (rightIdx < prices.length) {
    // if at any moment we come across a value in the next day where the price is lower, we can put the 'buy' time for that day.
    if (prices[rightIdx] <  prices[leftIdx]) {
      leftIdx = rightIdx;
    } else {
      profit = Math.max(prices[rightIdx] - prices[leftIdx], profit);
    }
    rightIdx++;
  }
  return profit;
};