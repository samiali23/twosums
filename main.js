alert('wroking')

function twoSum(nums, target) {
    const previousValues = {}
    for (let i = 0; i < nums.length; i++) {
      const currentValue = nums[i]
      const neededValue = target - currentValue
      if (previousValues[neededValue] != null) {
        return [previousValues[neededValue], i]
      } else {
        previousValues[currentValue] = i
      }
    }
  
      return []
  }

let nums = [2,7,11,15];
let target = 9;

// let numsS= [2,7,11,15];
// let targetT = 13;

// let numsSs= [2,7,11,15];
// let targetTt = 17;


console.log(twoSum(nums, target))
// console.log(twoSum(numsS, targetT))
// console.log(twoSum(numsSs, targetTt))


// var twoSum = function (nums, target) {
//     // Array to store the result
//     result = [];
//     console.log(result)
//     // Map to store the difference and its index
//     index_map = new Map();
//     // console.log(index_map)
//     // Loop for each element in the array
//     for (let i = 0; i < nums.length; i++) {
//         let difference = target - nums[i];
//         // console.log(difference)
//         if (index_map.has(difference)) {
//             result[0] = i;
//             // console.log(result[0])
//             result[1] = index_map.get(difference);
//             // console.log(result[0])
//             break;
//         } else {
//             index_map.set(nums[i], i);
//         }
//     }
//     return result;
// };

// let nums = [2, 7, 11, 15];
// let target = 9;
// console.log(twoSum(nums, target));

// // nums = [3, 2, 4];
// // target = 6;
// // console.log(twoSum(nums, target));


