/*
  ~ Sorry for being late 🙏🏽
  ~ Mohamed Nagy

  !Note:
  * Fold All Functions:   Ctrl + K  then  Ctrl + 0 (Zero)
  ? Unfold All Functions: Ctrl + K  then  Ctrl + J
*/

// A. Part 1: Coding Questions (7.5 Grade):

// 1. Convert the string "123" to a number and add 7. (0.5 Grade)
const convertToNumber = (str = "", num = 0) => {
  const result = Number(str) + num;
  if (isNaN(result)) {
    console.log("The result is not a number");
    return "The result is not a number";
  } else {
    console.log(result);
    return result;
  }
};
convertToNumber("123", 7);

// 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
const isFalsyValue = (val) => {
  console.log("\n");

  if (val) {
    console.log(val);
    return val;
  } else {
    console.log("Invalid");
    return "Invalid";
  }
};
isFalsyValue(false);

// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
const printAllOddNumbers = (...nums) => {
  console.log("\n");

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      continue;
    } else {
      console.log(nums[i]);
    }
  }
};
printAllOddNumbers(1, 3, 5, 7, 9);

// 4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
const printAllEvenNumbers = (nums) => {
  console.log("\n");

  nums.filter((num) => {
    if (num % 2 == 0) {
      console.log(num);
      return num;
    }
  });
};
printAllEvenNumbers([1, 2, 3, 4, 5]);

// 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
const mergeTwoArrays = (arr1, arr2) => {
  console.log("\n");

  const mergedArray = [...arr1, ...arr2];
  console.log(mergedArray);
  return mergedArray;
};
mergeTwoArrays([1, 2, 3], [4, 5, 6]);

// 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday). (0.5 Grade)
const dayOfTheWeek = (key) => {
  console.log("\n");

  let day = "Invalid Day";
  switch (key) {
    case 1:
      day = "Sunday";
      break;

    case 2:
      day = "Monday";
      break;

    case 3:
      day = "Tuesday";
      break;

    case 4:
      day = "Wednesday";
      break;

    case 5:
      day = "Thursday";
      break;

    case 6:
      day = "Friday";
      break;

    case 7:
      day = "Saturday";
      break;

    default:
      break;
  }

  console.log(day);
  return day;
};
dayOfTheWeek(0);

// 7. Create an array of strings and return their lengths using map method (0.5 Grade)
const returnStringLengths = (arr) => {
  console.log("\n");

  let len = [];
  arr.map((el) => {
    len.push(el.length);
    return el.length;
  });

  console.log(len);
  return len;
};
returnStringLengths(["a", "ab", "abc"]);

// 8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
const isDivisible = (num) => {
  console.log("\n");

  if (num % 3 == 0 || num % 5 == 0) {
    console.log("Divisible by both");
    return "Divisible by both";
  } else {
    console.log(`${num} is not divisible by 3 or 5`);
    return `${num} is not divisible by 3 or 5`;
  }
};
isDivisible(5);

// 9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
const calcSquare = (num) => {
  console.log("\n");

  console.log(num ** 2);
  return num ** 2;
};
calcSquare(5);

// 10.Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
const destructObjectValues = (obj) => {
  console.log("\n");

  const { name, age } = obj;
  console.log(`${name} is ${age} years old`);
  return `${name} is ${age} years old`;
};
destructObjectValues({ name: "John", age: 25 });

// 11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
const calcSum = (...nums) => {
  console.log("\n");

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(sum);
  return sum;
};
calcSum(1, 2, 3, 4, 5);

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
const returnResolve = () => {
  const testPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      return resolve("Success");
    } else {
      return reject("Failed");
    }
  });

  return testPromise
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("\n");

          console.log(res);
          resolve(res);
        }, 0);
      });
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
returnResolve();

// 13. Write a function to find the largest number in an array. (0.5 Grade)
const findLargestNumber = (arr) => {
  console.log("\n");

  const sortedNumbers = arr.sort((a, b) => a - b);
  console.log(sortedNumbers[sortedNumbers.length - 1]);
  return sortedNumbers[sortedNumbers.length - 1];
};
findLargestNumber([1, 3, 7, 2, 4]);

// 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
const returnObjKeys = (obj) => {
  console.log("\n");

  console.log(Object.entries(obj)[0]);
  return Object.entries(obj)[0];
};
returnObjKeys({ name: "John", age: 30 });

// 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)

const splitStr = (str) => {
  console.log("\n");

  console.log(str.split(" "));
  return str.split(" ");
};
splitStr("The quick brown fox");
