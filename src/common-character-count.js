const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let similar = [];
  // if (s1 === '' || s2 === '') {
  //   return false
  // } else {
  //   s1.split('')
  //   s2.split('')
  //   for(let i = 0; i < s1.length; i++) {

  //       if(s2.includes(s1[i])) {
  //         // if(!similar.includes(s1[i])) {
  //           similar.push(s1[i]);
  //           console.log(s1[i])
  //         // }
  //       }

  //   }
  //   console.log(similar.length)
  //   return similar.length
  // }

}

module.exports = {
  getCommonCharacterCount
};
