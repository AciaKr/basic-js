const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (Array.isArray(arr)) {
    let controlSequence = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
    let arrTransform = [];
    for(let i = 0; i < arr.length; i++) {
      console.log(arr[i])
      for(let j = 0; j < controlSequence.length; j++) {
        if(arr[i] == controlSequence[j]) {
          i++
        } else {
          if(arr[i + 1] === '--discard-prev') {
            console.log('--discard-prev', i)
            i +=2;
          }
          if(arr[i + 1] === '--double-prev') {
            arrTransform.push(arr[i]);
          }
          if(arr[i - 1] === '--discard-next') {
            console.log('--discard-next', i)
            i +=1;
          }
          if(arr[i - 1] === '--double-next') {
            arrTransform.push(arr[i]);
            arrTransform.push(arr[i]);
          }

      // if(typeof(arr[i]) === 'string') {
      //   switch(arr[i]) {
      //     case '--discard-next':
      //       if(arr[i + 1]) {
      //         i +=1;
      //       }
      //       break;
      //     case '--discard-prev':
      //       console.log(arr[i - 1])
      //       if(arr[i - 1]) {
      //         arrTransform.pop();
      //       }
      //       break;
      //     case '--double-next':
      //       console.log(arr[i + 1])
      //       if(arr[i + 1]) {
      //         arrTransform.push(arr[i + 1]);
      //       }
      //       break;
      //     case '--double-prev':
      //       console.log(arr[i - 1])
      //       if(arr[i - 1]) {
      //         arrTransform.push(arr[i - 1]);
      //       }
      //       break;
          // default:
          //   console.log(`Sorry, we are out of ${expr}.`);
        else {
          arrTransform.push(arr[i]);
        }
      }
      }
    }
    console.log(arrTransform)
    return arrTransform
  } else {
    console.log('\'arr\' parameter must be an instance of the Array!')
    return '\'arr\' parameter must be an instance of the Array!'
  }
}



module.exports = {
  transform
};
