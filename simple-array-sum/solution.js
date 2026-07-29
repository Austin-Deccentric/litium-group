/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
  // TODO: return the sum of the array elements
  const sumofAr = ar.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  return sumofAr;
}

module.exports = simpleArraySum;
