/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  // TODO: return the number of tallest candles
    let m = {};
    let maxCount = 0;
    let result = null;

    for (let candle of candles) {
        m[candle] = (m[candle] || 0) + 1;

        if (m[candle] > maxCount) {
            maxCount = m[candle];
            result = candle;
        }
    }

    return maxCount;
}
// let maxHeight = Math.max(...candles);
// return candles.filter(c => c === maxHeight).length;
module.exports = birthdayCakeCandles;
