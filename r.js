// var twoSum = function(numbers, target) {
//     for (let key = 0; key < numbers.length; key++) {
//         for (let i = key + 1; i < numbers.length; i++) {
//             if (numbers[key] + numbers[i] == target) {
//                 return [key + 1, i + 1];
//             }
//         }
//     }
//}; // correct code but limit exceeded

// var twoSum = function(numbers, target) {
//     let start = 0;
//     let end = numbers.length - 1;
//     while (start < end) {
//         let total = numbers[start] + numbers[end];
//         if (total < target)
//             start++;
//         else if (total > target)
//             end--;
//         else
//             [start + 1, end + 1];
//     }
// }; // using two pointers

// let numbers = [2,3,4];
// let target = 6;

// console.log(twoSum(numbers, target));

// var isPerfectSquare = function(num) {
//     let mid = 0;
//     let start = 0;
//     let end = num;
//     if (num == 1)
//         return true;
//     while (start <= end) {
//         mid = Math.floor(start + (end - start) / 2);
//         if (mid * mid > num)
//             end = mid - 1;
//         else if (mid * mid < num)
//             start = mid + 1;
//         else
//             return true;
//     }
//     return false;
// };

// let num = 16;
// console.log(isPerfectSquare(num));

// var arrangeCoins = function(n) {
//     if (n == 1)
//         return 1;
//     let i;
//     for (i = 1; i <= n ;) {
//         n -= i;
//         i++;
//     }
//     return i - 1;
// };

// var arrangeCoins = function(n) {
//     let mid = 0;
//     let start = 1;
//     let end = n;
//     while (start <= end) {
//         mid = Math.floor(start + (end - start) / 2);
//         let sum = mid * (mid + 1) / 2;
//         if (sum > n) {
//             end = mid  - 1;
//         } else if (sum < n) {
//             start = mid + 1;
//         }
//         else {
//             return mid;
//         }
//     }
//     return end;
// };


// let n = 3;
// console.log(arrangeCoins(n));

// var peakIndexInMountainArray = function(arr) {
//     let start = 0;
//     let end = arr.length - 1;
//     let mid = Math.floor((start + end) / 2);
//     while (start < end) {
//         if (arr[mid] > arr[mid + 1]) {
//             end = mid;
//         } else {
//             start = mid + 1;
//         }
//         mid = Math.floor((start + end) / 2);
//     }
//     return end;
// }; // or simply linear search

// let arr = [0,1,0, 10];

// console.log(peakIndexInMountainArray(arr));

// var findPeakElement = function(nums) {
//     let start = 0;
//     let end = nums.length - 1;
//     let mid = Math.floor(start + (end - start) / 2);
//     while (start < end) {
//         if (nums[mid] > nums[mid + 1]) {
//             end = mid;
//         } else {
//             start = mid + 1;
//         }
//         mid = Math.floor(start + (end - start) / 2);
//     }
//     return end;
// }; // binary search

// var findPeakElement = function(nums) {
//     let i = 0;
//     let j = 1;
//     let z;
//     // console.log(i, j, z);
//     for (z = 2; z < nums.length;) {
//         console.log(i, j, z);
//         if (nums[z] < nums[j] && nums[j] > nums[i]) {
//             return j;
//         }
//         else {
//             i++;
//             j++;
//             z++;
//         }
//     }
// }; // lets brute force it

// let nums = [1,2,1,3,5,6,4];

// console.log(findPeakElement(nums));


// let ceiling = function(arr, target) {
    // if (target > arr[arr.length - 1])
    //     return -1;
//     let mid = 0;
//     let start = 0;
//     let end = arr.length - 1;
//     while (start < end) {
//         mid = Math.floor(start + (end - start) / 2);
//         if (target > arr[mid])
//             start = mid + 1;
//         else if (arr[mid] > target)
//             end = mid - 1;
//         else
//             return arr[mid];
//     }
//     console.log(start, end, mid);
//     return  arr[start];
// }

// let floor = function(arr, target) {
//     let mid = 0;
//     let start = 0;
//     let end = arr.length - 1;
//     while (start <= end) {
//         mid = Math.floor(start + (end - start) / 2);
//         if (target > arr[mid])
//             start = mid + 1;
//         else if (arr[mid] > target)
//             end = mid - 1;
//         else
//             return mid;
//     }
//     return  end;
// }

// let arr = [2,3,5,8,9,15,17,18];
// let target = 19;

// console.log(floor(arr, target));

// var nextGreatestLetter = function(letters, target) {
//     let start = 0;
//     let end = letters.length - 1;
//     let mid = 0;
//     while (start <= end) {
//         mid = Math.floor(start + (end - start) / 2);
//         if (target < letters[mid]) {
//             end = mid - 1;
//         } else {
//             start = mid + 1;
//         }
//     }
//     return letters[start % letters.length];
// };

// let letters = ["c","f","j"];
// let target = "j";

// console.log(nextGreatestLetter(letters, target));

// var searchRange = function(nums, target) {
//     let mid = 0;
//     let start = 0;
//     let end = nums.length - 1;
//     // mid = Math.floor(start + (end - start) / 2);
//     while (start <= end) {
//         if (target > nums[start])
//             start += 1;
//         else if (target < nums[end])
//             end -= 1;
//         else
//             return [start, end];
//     }
//     return [-1, -1];
// }; //brute force

// var searchRange = function(nums, target) {
//     return [sir(nums, target, true), sir(nums, target, false)];
// };

// // just returns the index value 

// var sir = function(nums, target, bool) {
//     let ans = -1;
//     let start = 0;
//     let end = nums.length - 1;
//     let mid = 0;
//     while (start <= end) {
//         mid = Math.floor(start + (end - start) / 2);
//         if (target > nums[mid])
//             start = mid + 1;
//         else if (target < nums[mid])
//             end = mid - 1;
//         else {
//             ans = mid;
//             if (bool) {
//                 end = mid - 1;
//             } else {
//                 start = mid + 1;
//             }
//         }
//     }
//     return ans;
// }

// let nums = [5,7,7,8,8,10];
// let target = 7;

// console.log(searchRange(nums, target));


// var targetInInfiniteArray = function(nums, target) {
//     let start = 0;
//     let end = 1;
//     let mid = 0;
//     while (start <= end)
//     {
//         mid = Math.floor(start + (end - start) / 2);
//         if (target > nums[end]) {
//             let newStart = end + 1;
//             end = end + (end - start + 1) * 2
//             start = newStart;
//         }
//         else if (target > nums[mid]) {
//             start = mid + 1;
//         } else if (target < nums[mid]) {
//             end = mid - 1;
//         }
//         else
//             return mid;
//     }
//     return mid;
// }

// var findInMountainArray = function(target, mountainArr) {
//     let start = 0;
//     let end = mountainArr.length() - 1;
//     let mid = 0;
//     while (start <= end) {
//         mid = Math.floor(start + (end - start) / 2);
//         let value = mountainArr.get(mid);
//         if (value > target) {
//             end = mid + 1;
//         } else if (value < target) {
//             start = mid + 1;
//         } else
//             return mid;
//     }
//     return -1;
// };

// var findPeak = function(arr){
//     let start = 0;
//     let mid = 0;
//     let end = arr.length - 1;
//     while (start < end) {
//         mid = Math.floor(start + (end - start) / 2);
//         if (arr[mid] > arr[mid + 1])
//             end = mid;
//         else
//             start = mid + 1;
//     }
//     return end;
// }


// let get = function(arr, target, start, end) {
//     let mid = 0;
//     while (start <= end) {
//         mid = Math.floor(start + (end - start) / 2);
//         if (target > arr[mid])
//             start = mid + 1;
//         else if (arr[mid] > target)
//             end = mid - 1;
//         else
//             return mid;
//     }
//     return -1;
// }

// var pivot = function(nums) {
//     let start = 0;
//     let end = nums.length - 1;
//     let mid = 0;
//     while (start <= end) {
//         mid = Math.floor(start + (end - start) / 2);
//         if (mid < end && nums[mid] > nums[mid + 1])
//             return mid;
//         if (mid > start && nums[mid] < nums[mid - 1])
//             return mid - 1;
//         if (nums[start] >= nums[mid])
//             end = mid - 1;
//         else
//             start = mid + 1;
//     }
//     return -1;
// };


// var search = function(nums, target) {
//     let piv = pivot(nums);
//     if (piv == -1) {
//        return binarySearch(nums, target, 0, nums.length - 1);
//     }
//     let start = 0;
//     let end = nums.length - 1;
//     if (target >= nums[start])
//         return get(nums, target, start, piv);
//     return get(nums, target, piv + 1, end);
// };

// function binarySearch(nums, target, start, end) {
//     while (start <= end) {
//         let mid = Math.floor(start + (end - start) / 2);
//         if (nums[mid] > target) {
//             end = mid - 1;
//         } else if (nums[mid] < target) {
//             start = mid + 1;
//         } else
//             return mid;
//     }
//     return -1
// }

// let nums = [3,5,1];
// let target = 5;

// console.log(search(nums, target));

// class Solution {
//     /**
//      * @param {number[]} nums
//      * @param {number} target
//      * @return {number}
//      */
//     search(nums, target) {
//         let piv = this.pivot(nums);
//         if (piv == -1) {
//             return this.binarySearch(nums, target, 0, nums.length - 1);
//         }
//         let start = 0;
//         let end = nums.length - 1;
//         if (target >= nums[start]) {
//             return this.get(nums, target, start, piv);
//         }
//         return this.get(nums, target, piv + 1, end);
//     }

//     /**
//      * @param {number[]} arr
//      * @param {number} target
//      * @param {number} start
//      * @param {number} end
//      * @return {number}
//      */
//     get(arr, target, start, end) {
//         let mid = 0;
//         while (start <= end) {
//             mid = Math.floor(start + (end - start) / 2);
//             if (target > arr[mid])
//                 start = mid + 1;
//             else if (arr[mid] > target)
//                 end = mid - 1;
//             else
//                 return mid;
//         }
//         return -1;
//     }

//     /**
//      * @param {number[]} nums
//      * @return {number}
//      */
//     pivot(nums) {
//         let start = 0;
//         let end = nums.length - 1;
//         let mid = 0;
//         while (start <= end) {
//             mid = Math.floor(start + (end - start) / 2);
//             if (mid < end && nums[mid] > nums[mid + 1])
//                 return mid;
//             if (mid > start && nums[mid] < nums[mid - 1])
//                 return mid - 1;
//             if (nums[start] >= nums[mid])
//                 end = mid - 1;
//             else
//                 start = mid + 1;
//         }
//         return -1;
//     }

//     /**
//      * @param {number[]} nums
//      * @param {number} target
//      * @param {number} start
//      * @param {number} end
//      * @return {number}
//      */
//     binarySearch(nums, target, start, end) {
//         while (start <= end) {
//             let mid = Math.floor(start + (end - start) / 2);
//             if (nums[mid] > target) {
//                 end = mid - 1;
//             } else if (nums[mid] < target) {
//                 start = mid + 1;
//             } else
//                 return mid;
//         }
//         return -1;
//     }
// }


// var pivot = function(nums) {
//     let start = 0;
//     let end = nums.length - 1;
//     let mid = 0;
//     while (start <= end) {
//         mid = Math.floor(start + (end - start) / 2);
//         if (mid < end && nums[mid] > nums[mid + 1])
//             return mid;
//         if (mid > start && nums[mid] < nums[mid - 1])
//             return mid - 1;
//         if (nums[start] >= nums[mid])
//             end = mid - 1;
//         else
//             start = mid + 1;
//     }
//     return -1;
// };

// let check = function(nums) {
//     let occurence = 0;
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] > nums[i+1])
//             occurence++;
//     }
//     console.log(occurence);
//     nums[nums.length - 1] > nums[0] && occurence++;
//     console.log(occurence);
//     return occurence < 2 ? true : false;
// }

// var times = function(nums) {
//     return pivot(nums) + 1;
// }

function maxValue(nums) {
    let max = 0;
    let maximumValue = 0;
    for (let i = 0; i < nums.length; i++) {
        if (maximumValue < nums[i])
            maximumValue = nums[i];
        max += nums[i];
    }
    return {max, maximumValue};
}

function sum(nums, mid, k) {
    let sum = 0;
    let pieces = 1;
    for (let num of nums) {
        if (sum + num > mid) {
            pieces++;
            sum = num;
        } else
            sum += num;
    }
    return pieces;
}

var splitArray = function(nums, k) {
    let values = maxValue(nums);
    let start = values.maximumValue;
    let end = values.max;
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        let pieces = sum(nums, mid, k);
        if (pieces <= k) {
            end = mid;
        } else
            start = mid + 1;
    }
    return end;
};

let nums = [1,2,3,4,5];
let k = 1;
console.log(splitArray(nums, k));