/**
 * @param {number} n
 * @return {number}
 */
let mapper = {
    
}

var tribonacci = function (n) {
  if (!n) return 0;
  if (n <= 2) return 1;
  if(mapper[n]) return mapper[n]
  else{
      mapper[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
      return mapper[n]
  }
};