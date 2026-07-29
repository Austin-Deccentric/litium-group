/*
 * Complete the 'uniqueArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function uniqueArraySum(ar) {
  // TODO: return the sum of unique numbers in the array
  function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
  }

  let uniqArr =  ar.filter(onlyUnique);
  let sumofAr = uniqArr.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue
  } , 0);
  return sumofAr;
}



module.exports = uniqueArraySum;
