'use strict'

function binarySearch(input, target) {
  //return input.indexOf(target);  // Remove this line and change to your own algorithm
  const right = input.length - 1;
  const left = 0;
  return ( left <= right) ? search (input, target, left, right ) : -1;
}
function search(input, target, left, right,){
  const mid = Math.floor((left + right) / 2);
  return (input[mid] == target) ?  mid 
                                : (input[mid] > target) ? search(input, target, left, mid -1 ) 
                                : search(input, target, mid +1, right);
                                           

}
module.exports = binarySearch