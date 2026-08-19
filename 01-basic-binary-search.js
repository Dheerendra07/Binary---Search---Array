function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Example
let arr = [1, 3, 5, 7, 9, 11];

console.log(binarySearch(arr, 7));
// Output: 3



let arr = ["apple", "banana", "cat", "dog", "mango"];
let target = "dog";

let left = 0;
let right = arr.length - 1;
let result = -1;

while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        result = mid;
        break;
    }

    if (arr[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

console.log(result);