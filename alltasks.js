//Q1
function sortDescending(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap elements
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//Q2
function isPalindrome(s) {
    // Initialize two pointers, one at the start and one at the end of the string
    let start = 0;
    let end = s.length - 1;

    // Loop until the pointers meet
    while (start < end) {
        // If characters at the pointers are not equal, it's not a palindrome
        if (s[start] !== s[end]) {
            return false;
        }
        // Move the pointers towards the center
        start++;
        end--;
    }
    // If the loop completes without finding any non-matching characters, it's a palindrome
    return true;
}

//Q3
function sumOfTwoLargest(arr) {
    const sortedArr = sortDescending(arr);
    return sortedArr[0] + sortedArr[1];
}

// Q4

function findMissingElements(arr) {
    // It initializes a variable max to negative infinity (-Infinity) to ensure it can handle empty arrays or arrays with negative numbers.
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    // Initialize an array to store missing elements
    const missing = [];

    // Iterate through numbers from 0 to max
    for (let i = 0; i <= max; i++) {
        let found = false;
        // Check if the current number exists in the array
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === i) {
                found = true;
                break;
            }
        }
        // If the current number doesn't exist in the array, add it
        if (!found) {
            missing[missing.length] = i;
        }
    }

    return missing;
}

//Q5
function findMostRepeatedNumber(arr) {
    const count = {};
    arr.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    });
    let mostRepeatedNum = null;
    let maxCount = 0;
    for (const num in count) {
        if (count[num] > maxCount) {
            mostRepeatedNum = num;
            maxCount = count[num];
        }
    }
    return `${mostRepeatedNum} is repeated ${maxCount} times.`;
}

//Q6

function rotateArray(arr) {
    if (arr.length === 0) {
        return arr;
    }

    const firstElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = firstElement;
    return arr;
}

// Test the function q1
const arr = [3, 2, 7, 4, 6, 9];
const sortedArr = sortDescending(arr);
console.log('Sorted and descending array ', sortedArr);

// Test the function q2
const string1 = "madam";
const string2 = "karak";
console.log('Palindrom value ', isPalindrome(string1));
console.log('Palindrom value ', isPalindrome(string2));

// Test the function q3
const arr2 = [3, 7, 1, 5, 11, 19];
console.log('Sum of two largest number in array ', sumOfTwoLargest(arr2));

// Test the function q4
const array1 = [1, 2, 4, 6, 8];
const array2 = [3, 7, 2, 1, 9];
console.log('Missing number in the array ', findMissingElements(array1));
console.log('Missing number in the array ', findMissingElements(array2));

// Test the function q5
const arr3 = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];
console.log(findMostRepeatedNumber(arr3));

// Test the function q6
const arr4 = [3, 8, 9, 7, 6];
console.log(rotateArray(arr4));