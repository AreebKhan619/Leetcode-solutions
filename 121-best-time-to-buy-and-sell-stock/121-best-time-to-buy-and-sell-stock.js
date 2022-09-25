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
    const priceForSell = prices[rightIdx];
    const priceForBuy = prices[leftIdx];

    if (priceForSell < priceForBuy) {
      leftIdx = rightIdx;
    } else {
      profit = Math.max(priceForSell - priceForBuy, profit);
    }
    rightIdx++;
  }
  return profit;
};