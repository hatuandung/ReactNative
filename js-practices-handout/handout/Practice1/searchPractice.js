'use strict'

function search(input, target/*, lo , mid, hi*/) {
  //return  input.indexOf(target);  // Remove this line and change to your own algorithm
  /*let lo = 0;
  let mid = -1;
  let hi = input.length;
  while(target != mid){
    if(lo == hi || input[lo] == input[hi]){
      return -1;
    }
    mid = Math.round(lo +((hi - lo) / (input[hi] - input[lo])) * (target - input[lo]));
    if(input[mid] == target){
      return mid;
    }
    else if(input[mid] < target){
      lo = mid -1;
    }
    else if (input[mid] > target){
      hi = mid - 1;
    }
  }*/
  /*for (let i = 0; i <= input.length; i++) {
    if (i == input.length) {
      return -1;
    }
    if (input[i] == target) {
      return i;
    }
  }*/
  var left = 0;
  var right = input.length - 1 ;
  while(left <= right){
    let mid = Math.round((left + right) / 2);
    if(input[mid] == target){
      return mid;
    }
    else if (input[mid] > target){
      right = mid -1;
    }
    else
      left = mid +1;
  }
  return -1;
  
}



module.exports = search
