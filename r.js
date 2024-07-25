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

var arrangeCoins = function(n) {
    let mid = 0;
    let start = 1;
    let end = n;
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        let sum = mid * (mid + 1) / 2;
        if (sum > n) {
            end = mid  - 1;
        } else if (sum < n) {
            start = mid + 1;
        }
        else {
            return mid;
        }
    }
    return end;
};


let n = 3;
console.log(arrangeCoins(n));