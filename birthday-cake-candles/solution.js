/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  // TODO: return the number of tallest candles
    let freqtable = {};
    let maxCount = 0;

    for (let candle of candles) {
        freqtable[candle] = (freqtable[candle] ?? 0) + 1;


        if (freqtable[candle] > maxCount) {
            maxCount = freqtable[candle];
        }
    }

    return maxCount;
}
// let maxHeight = Math.max(...candles);
// return candles.filter(c => c === maxHeight).length;
module.exports = birthdayCakeCandles;
