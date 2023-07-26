/**
Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
 */
function reverseString(inputString) {
    let reversedString = '';

    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }

    return reversedString;
}
const reverse = 'alamin'
// console.log(reverseString(reverse))

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
function sumOfPositiveNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }

    return sum;
}
const result = [4, -6, 8, -3, 2];
const sum = sumOfPositiveNumbers(result);
// console.log(sum);

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
function findMostFrequentElement(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    let frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement;

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];

        // If the element is encountered for the first time, initialize its frequency to 1.
        if (!frequencyMap[currentElement]) {
            frequencyMap[currentElement] = 1;
        } else {
            frequencyMap[currentElement]++;

            // Update the most frequent element if needed.
            if (frequencyMap[currentElement] > maxFrequency) {
                maxFrequency = frequencyMap[currentElement];
                mostFrequentElement = currentElement;
            }
        }
    }

    return mostFrequentElement;
}

// Example usage:
const numbers = [2, 3, 4, 2, 5, 2, 6, 2];
const count = findMostFrequentElement(numbers);
// console.log(result);


// Task 5: Implement a simple JavaScript calculator.The calculator should take two numbers and an operator(+, -, *, /) as input and return the result of the operation.

function calculator(num1, operator, num2) {
    let result;

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else {
        console.log('Invalid operator.');
        return;
    }

    return result;
}

// Example:
const number1 = 10;
const operator = '-';
const number2 = 5;
const resulted = calculator(number1, operator, number2);
// console.log(resulted);

// Task 6: Create a program that generates a random password of a specified length.The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const uppercaseLetters = "AB";
    const lowercaseLetters = "az";
    const numbers = "89";
    const specialCharacters = "!@";

    const allCharacters =
        uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters.charAt(randomIndex);
    }

    return password;
}

const passwordLength = 8;
const randomPassword = generateRandomPassword(passwordLength);
// console.log(randomPassword);

// Task 7: Implement a function that converts a Roman numeral to an integer.The function should take a Roman numeral string(e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(roman) {
    const romanNumerals = {
        "I": 1,
        "II": 2,
        "IV": 4,
        "V": 5,
        "VII": 7,
        "IX": 9,
        "X": 10
    };

    let result = 0;
    let prevValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const currentNumeral = roman[i];
        const currentValue = romanNumerals[currentNumeral];

        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
        prevValue = currentValue;
    }

    return result;
}

// Example
const romanNumeral = "IX";
const integerEquivalent = romanToInteger(romanNumeral);
// console.log(integerEquivalent);

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers.The function should return the second smallest number.

function findSecondSmallest(arr) {
    if (arr.length < 2) {
        console.log(" two elements");
        return undefined;
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    if (secondSmallest === Infinity) {
        console.log("No second smallest element found.");
        return undefined;
    }

    return secondSmallest;
}

// Example
const numbered = [5, 8, 3, 9, 4];
const secondSmallestNum = findSecondSmallest(numbered);
// console.log(secondSmallestNum);
















