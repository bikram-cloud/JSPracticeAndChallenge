// JavaScript basic [150 exercises with solution]
// 1Write a JavaScript program to display the current day and time in the following format.  Sample Output : Today is : Tuesday.Current time is : 10 PM : 30 : 38
// Dom Element
const weekDay = document.querySelector('.today');
const currTime = document.querySelector('.currentTime');

function getDate() {
  const date = new Date();

  const dateArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thusday',
    'Friday',
    'Saturday',
  ];

  const getYear = date.getFullYear();
  const getMonth = date.getMonth();
  const getDate = date.getDate();
  const getDay = date.getDay();
  const getHour = date.getHours();
  const getMinute = date.getMinutes();
  const getSecond = date.getSeconds();

  weekDay.innerText = `${dateArray[getDay]}.`;

  currTime.innerText = `Current time is : ${date0Format(
    getHour
  )} ${dateampmFormat(getHour)} : ${date0Format(getMinute)} : ${date0Format(
    getSecond
  )}`;

  function dateampmFormat(date) {
    if (date <= 12) return 'AM';
    return 'PM';
  }

  function date0Format(date) {
    if (date < 10) return `0${date}`;
    return date;
  }
}

setInterval(function () {
  getDate();
}, 1000);

// 2 Write a JavaScript program to print the current window contents.
const printButton = document.querySelector('.printbtn');

printButton.addEventListener('click', () => {
  window.print();
});

// 3. Write a JavaScript program to get the current date.  Expected Output :mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
function currentDate() {
  const currDate = document.querySelector('.currentDate');
  const currDate1 = document.querySelector('.currentDate1');
  const currDate2 = document.querySelector('.currentDate2');

  const date = new Date();

  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const day = date.getDate();

  currDate.innerText = `${date0Format(month)}-${date0Format(day)}-${year} `;
  currDate1.innerText = `${date0Format(month)}/${date0Format(day)}/${year} `;
  currDate2.innerText = `${date0Format(day)}-${date0Format(month)}-${year} `;

  function date0Format(date) {
    if (date < 10) return `0${date}`;
    return date;
  }
}

currentDate();

// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
function triangle(a, b, c) {
  const sum = (a + b + c) / 2;

  const area = Math.sqrt(sum * ((sum - a) * (sum - b) * (sum - c)));

  return area;
}

// console.log(triangle(5, 5, 3));

// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.
// const btn = document.getElementById('target');
// function animate_string(str) {
//   const element = document.getElementById(str);
//   const textNode = element.childNodes[0];
//   let text = textNode.data;

//   setInterval(() => {
//     text = text[text.length - 1] + text.substring(0, text.length - 1);
//     textNode.data = text;
//   }, 1000);
// }

// window.onload(animate_string(btn));

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return true;
  return false;
}

// console.log(leapYear(2000));
// console.log(leapYear(2021));

// Write a JavaScript program to find out if 1st January will be a Sunday between 2000 and 2050.

function findDay() {
  const select = document.getElementById('mySelect');
  const select1 = document.getElementById('mySelect1');

  for (let year = 2000; year <= 2050; year++) {
    const d = new Date(year, 0, 1);

    if (d.getDay() === 0) {
      const option1 = document.createElement('option');

      option1.text = `1st January is being a Sunday  ${year}`;

      select.add(option1, null);
    } else if (d.getDay() === 1) {
      const option2 = document.createElement('option');

      option2.text = `1st January is being a Monday  ${year}`;

      select1.add(option2, null);
    }
  }
}

findDay();

// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

function randomNumber(num) {
  // return Math.floor(Math.random() * num + 1);
  return Math.ceil(Math.random() * num);
}

// console.log(randomNumber(10));

const btn = document.querySelector('.btn');

function getRandomInteger() {
  let inputNumber = document.querySelector('.input');
  // const btn = document.querySelector('.btn');
  const result = document.querySelector('.result');

  const ranNum = Math.floor(Math.random() * 10 + 1);
  // const guessNum = prompt('Guess the number between 1 and 10 inclusive');
  const number = inputNumber.value;

  const convertNumber = parseInt(number);

  if (ranNum === convertNumber) {
    result.innerText = `${convertNumber} was Matched`;
    console.log(typeof convertNumber);
    console.log(typeof ranNum);
  } else {
    result.innerText = `${convertNumber} was not matched`;
    console.log(typeof convertNumber);
    console.log(typeof ranNum);
  }

  inputNumber = '';
}

btn.addEventListener('click', getRandomInteger);

// // getRandomInteger(10);

// 9. Write a JavaScript program to calculate the days left before Christmas.

function findChristmasLeftDays() {
  const displayDate = document.querySelector('.day');

  const today = new Date();
  let crmsDay = new Date(today.getFullYear(), 11, 25);

  const one_day = 1000 * 60 * 60 * 24;

  const date = `${Math.ceil(
    (crmsDay.getTime() - today.getTime()) / one_day
  )} days!`;

  displayDate.innerText = date;
}

findChristmasLeftDays();

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).
function calculate() {
  // DOM
  const input1 = document.querySelector('.input1');
  const input2 = document.querySelector('.input2');
  const multBtn = document.querySelector('.multBtn');
  const divideBtn = document.querySelector('.divideBtn');
  const resultSpan = document.querySelector('.resultSpan');

  // Multiplication
  multBtn.addEventListener('click', () => {
    const inputValue1 = input1.value;
    const inputValue2 = input2.value;

    if (inputValue1 === '' || inputValue2 === '') return;

    function mulipli(value1, value2) {
      return value1 * value2;
    }

    resultSpan.innerText = mulipli(inputValue1, inputValue2);

    input1.value = '';
    input2.value = '';
  });

  // Division
  divideBtn.addEventListener('click', () => {
    const inputValue1 = input1.value;
    const inputValue2 = input2.value;

    if (inputValue1 === '' || inputValue2 === '') return;

    function divide(value1, value2) {
      return value1 / value2;
    }

    resultSpan.innerText = divide(inputValue1, inputValue2);

    input1.value = '';
    input2.value = '';
  });
}

calculate();

// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
function changeTemperatures() {
  // Dom
  const input1 = document.querySelector('.inpc');
  const input2 = document.querySelector('.inpf');
  const btn1 = document.querySelector('.btn1');
  const btn2 = document.querySelector('.btn2');
  const result1 = document.querySelector('.result1');
  const result2 = document.querySelector('.result2');

  // Celsus
  btn1.addEventListener('click', function () {
    const num = input1.value;

    if (num === '') return;

    const cToFahr = (num * 9) / 5 + 32;
    const message = `${num}\xB0C is ${cToFahr} \xB0F.`;
    result1.innerText = `Restul : ${message}`;

    input1.value = '';
  });

  // Fahrenheit
  btn2.addEventListener('click', function () {
    const num = input2.value;

    if (num === '') return;

    const cToFahr = ((num - 32) * 5) / 9;
    const message = `${num}\xB0F is ${cToFahr} \xB0C.`;
    result2.innerText = `Restul : ${message}`;

    input2.value = '';
  });
}

changeTemperatures();

// 12. Write a JavaScript program to get the website URL (loading page).
function findLocation() {
  console.log(location.href);
  console.log(location.protocol);
  console.log(location.host);
  console.log(location.hostname);
  console.log(location.pathname);
  console.log(document.URL);
}

// findLocation();

// 13. Write a JavaScript exercise to create a variable using a user-defined name.
function userDefineName() {
  const var_name = 'abcd';
  const n = 120;
  this[var_name] = n;
  console.log(var_name);
  console.log(n);
  console.log(this[var_name]);
}

// userDefineName();

// 14. Write a JavaScript exercise to get the filename extension.

function fileExtension(fName) {
  return fName.split('.').pop();
}
// console.log(fileExtension('index.html'));
// console.log(fileExtension('index.JS'));

// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

function diffNumber(num) {
  // if (num <= 13) return 13 - num;
  // return (num - 13) * 2;
  return num <= 13 ? 13 - num : (num - 13) * 2;
}

// console.log(diffNumber(10));
// console.log(diffNumber(20));

// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
function compute(x, y) {
  if (x === y) return 3 * (x + y);
  return x + y;
}

// console.log(compute(10, 10));
// console.log(compute(10, 20));

// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.
function diff_number(num) {
  return num <= 19 ? 19 - num : (num - 19) * 3;
}

// console.log(diff_number(12));
// console.log(diff_number(19));
// console.log(diff_number(25));
// console.log(diff_number(22));

// 18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
function pairSum(x, y) {
  return x === 50 || y === 50 || x + y === 50 ? true : false;
}

// console.log(pairSum(50, 10));
// console.log(pairSum(30, 20));
// console.log(pairSum(10, 20));

// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
function whetherInteger(num) {
  return 100 - num <= 20 || 400 - num <= 20;
}
// console.log(whetherInteger(10));
// console.log(whetherInteger(90));
// console.log(whetherInteger(380));

// 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.
function checkNumber(a, b) {
  if ((a > 0 && b < 0) || (b > 0 && a < 0)) {
    return true;
  } else {
    return false;
  }
  return;
}

// console.log(checkNumber(5, 1));
// console.log(checkNumber(5, -1));
// console.log(checkNumber(0, -1));

// 21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.
function stringCheck(str) {
  if (str === null || str === undefined || str.substring(0, 2) === 'Py')
    return str;

  return `Py${str}`;
}
// console.log(stringCheck('thon'));
// console.log(stringCheck('Python'));
// console.log(stringCheck('chart'));

// 22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
function removeCharacter(str, position) {
  // const str1 = str.substring(0, position);
  // const str2 = str.substring(position + 1, str.length);
  const str2 = str.slice(position + 1, str.length);
  const str1 = str.slice(0, position);
  return str1 + str2;
}

// console.log(removeCharacter('Pytnon', 0));
// console.log(removeCharacter('Pytnon', 2));
// console.log(removeCharacter('Pytnon', 1));

// 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

function newString(str) {
  if (str.length <= 1) return str;

  const str1 = str.slice(1, -1);
  return str.charAt(str.length - 1) + str1 + str.charAt(0);

  // return str.substring(1, str.length - 1);
}

// console.log(newString('a'));
// console.log(newString('ab'));
// console.log(newString('abc'));

// 24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

function firstString(str) {
  const firstChar = str.charAt(0);
  return firstChar + str + firstChar;
}

// console.log(firstString('bikram'));
// console.log(firstString('neupane'));

// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

function positiveNumber(num) {
  if (num <= 0) return false;

  return num % 3 === 0 || num % 7 == 0 ? true : false;
}

// console.log(positiveNumber(10));
// console.log(positiveNumber(0));
// console.log(positiveNumber(9));
// console.log(positiveNumber(-14));

// 26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.
function stringCheck(str) {
  if (str.length >= 3) {
    const backStr = str.substring(str.length - 3);
    return backStr + str + backStr;
  } else {
    return false;
  }
}

// console.log(stringCheck('abc'));
// console.log(stringCheck('bikram'));
// console.log(stringCheck('ab'));

// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

function stringJava(str) {
  if (str.length < 4) return false;

  const stFront = str.substring(0, 4);

  if (stFront === 'Java') {
    return true;
  } else {
    return false;
  }
}

// console.log(stringJava('Java'));
// console.log(stringJava('Javascript'));
// console.log(stringJava('PHP'));
// console.log(stringJava('Python'));

// 28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.
function check_numbers(x, y) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
    return true;
  } else {
    return false;
  }
}

// console.log(check_numbers(69, 93));
// console.log(check_numbers(49, 93));
// console.log(check_numbers(10, 100));

// 29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.
function check_numbers3(x, y, z) {
  return (x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && x <= 99);
}

// console.log(check_numbers3(10, 30, 45));
// console.log(check_numbers3(50, 60, 90));
// console.log(check_numbers3(23, 65, 97));

// 30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.
function checkString(str) {
  if (str.length < 6) return str;

  if (str.substring(str.length, 4) === 'Script') {
    return str.substring(0, 4);
  }
  return str;
}

// console.log(checkString('JavaScript'));
// console.log(checkString('PHP'));
// console.log(checkString('CoffScript'));
// console.log(checkString('BikramNeupane'));
// console.log(checkString('ScriptJava'));

// 31. Write a JavaScript program to find the largest of three given integers.
function largestNumber(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

// console.log(largestNumber(12, 30, 99));
// console.log(largestNumber(79, 87, 86));

// 32. Write a JavaScript program to find the closest value to 100 from two numerical values.
function near_100(x, y) {
  if (x !== y) {
    const x1 = Math.abs(x - 100);
    const y1 = Math.abs(y - 100);

    if (x1 < y1) return x;
    if (x1 > y1) return y;
    return 0;
  } else {
    return false;
  }
}

// console.log(near_100(100, 100));
// console.log(near_100(10, 200));
// console.log(near_100(-10, 200));

// 33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.
function checkNumberRange(x, y) {
  return (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  );
}

// console.log(checkNumberRange(41, 60));
// console.log(checkNumberRange(71, 100));

// 34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.
function getNumber(a, b) {
  if (a < 0 || b < 0) return 'Included grater then 0 value';

  if ((a >= 40 && a <= 60) || (b >= 40 && b <= 60)) {
    if (a === b) return 'Number are same';
    return Math.max(a, b);
  } else {
    return false;
  }
}

// console.log(getNumber(50, 59));
// console.log(getNumber(-50, 59));
// console.log(getNumber(10, 61));
// console.log(getNumber(53, 41));
// console.log(getNumber(41, 41));

// 35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.
function getSpecifiedValue(str) {
  if (str.length < 4) return 'string length is less then 4';

  const str1 = str.substring(1, 2);
  const str2 = str.substring(3, 4);
  return str1 + str2;
}

// console.log(getSpecifiedValue('Hlw'));
// console.log(getSpecifiedValue('Bikram'));
// console.log(getSpecifiedValue('Neupane'));

// another way solve
function check_char(str1, char) {
  let ctr = 0;
  for (i = 0; i < str1.length; i++) {
    if (str1.charAt(i) === char) {
      ctr = 1;
    }
  }
  if (ctr === 1) return true;
  return false;
}

// console.log(check_char('Hello', 'b'));
// console.log(check_char('Hello', 'H'));

// 36. Write a JavaScript program that checks whether the last digit of three positive integers is the same.
function checkLastDigits(x, y, z) {
  if (x === y || x === z || y === z) return 'Number is same';
  if (x > 0 && y > 0 && z > 0) {
    return x % 10 === y % 10 && y % 10 === z % 10 && x % 10 === z % 10;
  } else {
    return false;
  }
}

// console.log(checkLastDigits(10, 20, 30));
// console.log(checkLastDigits(1000, 20100, 333000));
// console.log(checkLastDigits(10, 30, 30));
// console.log(checkLastDigits(10, 30, -50));

// 37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.
function convertUppercase(str) {
  if (typeof str === 'number') return `${str} is Not a String Value`;
  if (str.length <= 3) {
    return str.toUpperCase();
  }
  const frontPart = str.substring(0, 3).toLowerCase();
  const lastPart = str.substring(3, str.length);
  return frontPart + lastPart;
}

// console.log(convertUppercase('php'));
// console.log(convertUppercase(12));
// console.log(convertUppercase('JavaScript'));
// console.log(convertUppercase('Bikram Neupane'));

// 38. Write a JavaScript program to check a student's total marks in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false.
function examStudent(totalMarks, isExam) {
  if (isExam) return totalMarks >= 90;

  return totalMarks >= 89 && totalMarks <= 100;
}

// console.log(examStudent(88, ''));
// console.log(examStudent(90, true));
// console.log(examStudent(89, true));
// console.log(examStudent(110, true));

// 39. Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.
function sumCheck(x, y) {
  if (typeof x === 'string' || typeof y === 'string')
    return 'This is not a number';
  if (x < 0 || y < 0) return 'This is not a positive number';
  const sumValue = x + y;
  if (sumValue >= 50 && sumValue <= 80) return 65;
  return 80;
}

// console.log(sumCheck(10, 20));
// console.log(sumCheck(30, 20));
// console.log(sumCheck(30, 'ab'));
// console.log(sumCheck(30, -100));

// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
function check8(x, y) {
  if (x === 8 || y === 8) return true;

  if (x < 0 || y < 0) return 'Its not a positive Number';

  if (x + y === 8 || Math.abs(x - y) === 8) return true;
  return false;
}

// console.log(check8(8, 10));
// console.log(check8(10, 10));
// console.log(check8(5, 3));
// console.log(check8(20, 12));
// console.log(check8(-20, -12));

// 41. Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.
function numberCheck(a, b, c) {
  if (a < 0 || b < 0 || c < 0) return 'Its not a positive Number';

  if (a === b && a === c && b === c) return 30;

  if (a === b || a === c || b === c) return 40;

  return 20;
}

// console.log(numberCheck(15, 15, 15));
// console.log(numberCheck(15, 15, -15));
// console.log(numberCheck(15, 1, 100));
// console.log(numberCheck(1, 1, 100));

// 42. Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
function checkStrickMode(a, b, c) {
  if (b > a && c > b) {
    return 'Strict mode';
  } else if (c > b) {
    return 'Soft Mode';
  } else {
    return 'undefined';
  }
}

// console.log(checkStrickMode(10, 15, 20));
// console.log(checkStrickMode(100, 15, 20));
// console.log(checkStrickMode(20, 20, 20));

// 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
function sameDigitNumber(a, b, c) {
  return a % 10 === b % 10 || a % 10 === c % 10 || b % 10 === c % 10;
}

// console.log(sameDigitNumber(32, 42, 62));
// console.log(sameDigitNumber(32, 40, 52));
// console.log(sameDigitNumber(30, 42, 65));

// 44. Write a JavaScript program to check from three given integers whether a number is greater than or equal to 20. It is less than the others.
function abc(a, b, c) {
  return a >= 20 && b >= 20 && c >= 20;
}

// console.log(abc(20, 330, 199));
// console.log(abc(20, 330, 0));

// 45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.
function checkIntegerValue(a, b) {
  if (a < 0 || b < 0) return 'Not a positive number';
  if (a === 15 || b === 15) return true;
  if (a + b === 15 || a - b === 15) return true;
  return false;
}

// console.log(checkIntegerValue(15, 20));
// console.log(checkIntegerValue(99, 69));
// console.log(checkIntegerValue(7, 8));
// console.log(checkIntegerValue(42, 27));
// console.log(checkIntegerValue(42, -10));

// 46. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.
function nonNegative(a, b) {
  if (a < 0 || b < 0) return false;
  if ((a % 7 === 0 || a % 11 === 0) && (b % 7 === 0 || b % 11 === 0)) {
    return true;
  } else {
    return false;
  }
}

// console.log(nonNegative(-10, 23));
// console.log(nonNegative(7, 23));
// console.log(nonNegative(33, 28));

// 47. Write a JavaScript program to check whether a given number exists in the range 40..10000.
// For example 40 presents in 40 and 4000
function existsNumber(x, y, n) {
  if (n < 40 || n > 10000) {
    return false;
  } else if (n >= x && n <= y) {
    return true;
  } else {
    return false;
  }
}

// console.log(existsNumber(50, 65, 57));
// console.log(existsNumber(50, 65, 200000));
// console.log(existsNumber(50, 65, 41));

// 48. Write a JavaScript program to reverse a given string.
function strReverse(str) {
  if (str === '') return 'false';

  return str.split('').reverse().join('');
}

// console.log(strReverse('abc'));
// console.log(strReverse(''));
// console.log(strReverse('123'));
// console.log(strReverse('www'));

// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
function alphabetString(str) {
  const st = str.split('');

  for (let i = 0; i < st.length; i++) {
    switch (st[i]) {
      case ' ':
        break;
      case 'z':
        st[i] = 'a';
        break;
      case 'Z':
        st[i] = 'A';
        break;
      default:
        st[i] = String.fromCharCode(1 + st[i].charCodeAt(0));
    }
    // Uppercase vowels
    switch (st[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        st[i] = st[i].toUpperCase();
    }
  }
  return st.join('');
}

// console.log(alphabetString('php'));
// console.log(alphabetString('w3r'));

// 50. Write a JavaScript program to capitalize the first letter of each word in a given string.

function firstLetterCapitalize(str) {
  if (typeof str === 'number') return 'Not a String';
  if (str.length === 1 || str.length === 0)
    return 'String length is empty or only one';

  return str.charAt(0).toUpperCase() + str.slice(1);
}

// console.log(firstLetterCapitalize('abc'));
// console.log(firstLetterCapitalize('a'));
// console.log(firstLetterCapitalize(12334));
// console.log(firstLetterCapitalize(''));

// 51. Write a JavaScript program to convert a given number into hours and minutes.
function convertTime(num) {
  const convertHour = Math.floor(num / 60);
  const convertMinute = Math.floor(num % 60);
  return `${convertHour} : ${convertMinute}`;
}

// console.log(convertTime(70));
// console.log(convertTime(121));
// console.log(convertTime(200.12));

// 52. Write a JavaScript program to convert letters of a given string alphabetically.
function sortAlphabets(str) {
  return [...str].sort((a, b) => a.localeCompare(b)).join('');
  // return str.split('').sort().join('');
}

// console.log(sortAlphabets('cdab'));
// console.log(sortAlphabets('4501'));
// console.log(sortAlphabets('CdAb'));

// 53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
function abCheck(str) {
  return /a..b/.test(str) || /b..a/.test(str);
}

// console.log(abCheck('aijbc'));
// console.log(abCheck('afgn'));
// console.log(abCheck('Chainsbreak'));
// console.log(abCheck('efgacdeboy'));

// 54. Write a JavaScript program to count the number of vowels in a given string.
function vowelCount(str) {
  return str.replace(/[^aeiou]/g, '').length;
}

// console.log(vowelCount('Javascript'));
// console.log(vowelCount('bikram'));

// 55. Write a JavaScript program to check whether a given string contains an equal number of p's and t's.
function equalPT(str) {
  const strP = str.replace(/[^p]/g, '').length;
  const strT = str.replace(/[^t]/g, '').length;

  return strP === strT;
}

// console.log(equalPT('property'));
// console.log(equalPT('paaptaat'));

// 56. Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.
function divideString(x, y) {
  const div = (x / y).toString().split('');
  if (div >= 1000) {
    for (let i = div.length - 3; i > 0; i -= 3) {
      div.splice(i, 0, ',');
    }
  }
  return div;
}

// console.log(divideString(120, 10));
// console.log(divideString(120, 0));

// 57. Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.
function stringCopies(str, n) {
  if (n <= 0) return 'No any string value';

  return str.repeat(n);
}

// console.log(stringCopies('B', 3));
// console.log(stringCopies('Love', 3));
// console.log(stringCopies('N', 0));

// 58. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.
function newString(str) {
  if (str.length <= 3) return 'string length is less then 3';

  const strResult = str.substring(str.length - 3);

  // return strResult + strResult + strResult + strResult;
  return strResult.repeat(4);
}

// console.log(newString('bra'));
// console.log(newString('Bikram'));
// console.log(newString('1234'));

// 59. Write a JavaScript program to extract the first half of a even string.
function evenString(str) {
  if (str === '') return 'No any string value';
  if (str.length % 2 === 0) return str.slice(0, str.length / 2);
  return str;
}

// console.log(evenString('Go'));
// console.log(evenString('PHP'));
// console.log(evenString('JavaScript'));
// console.log(evenString('123456'));
// console.log(evenString(''));

// 60. Write a JavaScript program to create a new string without the first and last characters of a given string.
function newString(str) {
  if (str.length <= 2) return 'string length is less then 3';
  // return str.slice(1, -1);
  return str.substring(1, str.length - 1);
}

// console.log(newString('ab'));
// console.log(newString('abcde'));
// console.log(newString(''));
// console.log(newString('1234567'));
// console.log(newString('NeupaneBikram'));

// 61. Write a JavaScript program to concatenate two strings except for their first character.
function concatenate(str1, str2) {
  if (str1 <= 1 || str2 <= 1) return 'String length is less then 2';

  // return str1.substring(1) + str2.substring(1);
  return str1.substring(1, str1.length) + str2.substring(1, str2.length);
}

// console.log(concatenate('PHP', 'JavaScript'));
// console.log(concatenate('', 'JavaScript'));
// console.log(concatenate('AA', 'BB'));

// 62. Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.
function stringMove(str) {
  if (str.length <= 2) return 'String length is less then 3';

  return str.slice(-3) + str.slice(0, -3);
}

// console.log(stringMove('Bikram'));
// console.log(stringMove('ab'));
// console.log(stringMove('JavaScript'));
// console.log(stringMove('1234'));

// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.
function stringThree(str) {
  if (str.length <= 2) return 'String is must be 3 length';
  if (str.length % 2 !== 0) {
    const mid = (str.length + 1) / 2;
    return str.slice(mid - 2, mid + 1);
  }
  return str;
}

// console.log(stringThree('abcdefg'));
// console.log(stringThree('PHP'));
// console.log(stringThree('JS'));

// 64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.
function concatenateString(st1, st2) {
  const min = Math.min(st1.length, st2.length);

  // console.log(min);

  return st1.substring(st1.length - min) + st2.substring(st2.length - min);
}

// console.log(concatenateString('Bikram', 'Neupane'));
// console.log(concatenateString('PHP', 'JS'));
// console.log(concatenateString('abc', 'abcdefgh'));

// 65. Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.
function checkStringEqual(str) {
  if (str.substring(str.length - 6) === 'Script') return true;
  return false;
}

// console.log(checkStringEqual('JavaScript'));
// console.log(checkStringEqual('abc'));
// console.log(checkStringEqual('123456789'));

// 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
function stringBegins(str) {
  // if (str.startsWith('Los') || str.startsWith('New')) return str;
  if (str.substring(0, 3) === 'Los' || str.substring(0, 3) === 'New')
    return str;
  return '';
}

// console.log(stringBegins('Losangles'));
// console.log(stringBegins('Tokyo'));
// console.log(stringBegins('NewDelhi'));
// console.log(stringBegins(''));

// 67. Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.
function stringModified(str) {
  if (str.length === 0) return 'No value in there';
  if (str.substr(0, 1) === 'P' && str.substr(-1) === 'P') {
    return str.slice(1, -1);
  }
  return str;
}

// console.log(stringModified('Bikram'));
// console.log(stringModified('PokharaP'));
// console.log(stringModified('PAbcdefP'));
// console.log(stringModified('PAbcdefp'));
// console.log(stringModified(''));

// 68. Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.
function firstAndLastChr(str, n) {
  if (str.length >= n) {
    // const fir = str.substring(0, n);
    // const last = str.substring(str.length - n);
    return str.slice(0, n) + str.slice(str.length - n);
    // return fir + last;
  }
  return 'String length is less then n';
}

// console.log(firstAndLastChr('Javascript', 2));
// console.log(firstAndLastChr('abc', 4));
// console.log(firstAndLastChr('nepal', 1));

// 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
function sumArr(arr) {
  return arr[0] + arr[1] + arr[2];
}

// console.log(sumArr([1, 2, 3, 4]));
// console.log(sumArr([11, 21, 30]));

// 70. Write a JavaScript program to rotate the elements left in a given array of integers of length 3.
function rotateArr(arr) {
  return [arr[1], arr[2], arr[0]];
}

// console.log(rotateArr([0, 1, 2]));
// console.log(rotateArr([10, 20, 30]));

// 71. Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.
function arrayPosition(arr) {
  if (arr.length <= 1) return 'Array length must be 2 or above';
  const lastPosition = arr.pop();

  return arr[0] === 1 || lastPosition === 1;
}

// console.log(arrayPosition([1, 2, 3, 4, 5]));
// console.log(arrayPosition([1, 2, 3, 4, 1]));
// console.log(arrayPosition([2, 2, 3, 4, 1]));
// console.log(arrayPosition([2, 3, 4]));
// console.log(arrayPosition([4]));
// console.log(arrayPosition([]));

// 72. Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.
function checkArrayValue(arr) {
  if (arr.length >= 3) {
    // return arr[0] === arr.pop();
    const ends = arr.length - 1;
    return arr[0] === arr[ends];
  }
  return false;
}

// console.log(checkArrayValue(['a', 'b', 'c', 'a']));
// console.log(checkArrayValue(['a', 'b', 'c', 'e']));
// console.log(checkArrayValue(['e', 'b', 'c', 'e']));
// console.log(checkArrayValue([1, 2, 3, 1]));
// console.log(checkArrayValue([1, 2]));

// 73. Write a JavaScript program to reverse the elements of a given array of integers of length 3.
function reverseArr(arr) {
  if (arr.length >= 3) {
    return arr.reverse();
  }
  return false;
}

// console.log(reverseArr([1, 2, 3, 4, 5]));
// console.log(reverseArr(['a', 'b', 'c', 'd', 'e']));
// console.log(reverseArr([1, 2, -3, -4]));
// console.log(reverseArr([1, 2]));

// 74. Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.
function largestArray(arr) {
  if (arr.length >= 3) {
    const maxValue = arr[0] > arr[2] ? arr[0] : arr[2];
    arr[0] = maxValue;
    arr[1] = maxValue;
    arr[2] = maxValue;

    return arr;
  }
  return false;
}

// console.log(largestArray(['Bikram', 'Neupane', 'Ram']));
// console.log(largestArray(['Bikram', 'Neupane']));
// console.log(largestArray([20, 30, 40]));

// 75. Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.
function middleArray(a, b) {
  if (a.length <= 2 || b.length <= 2)
    return ['Array Value is less then 3 length'];

  const new_arr = [];

  const middleArr = Math.floor(a.length / 2);
  const middleArr2 = Math.floor(b.length / 2);
  new_arr.push(a[middleArr], b[middleArr2]);

  return new_arr;
}

// console.log(middleArray([1, 2, 3, 4], [50, 100, 150]));
// console.log(middleArray([1, 2, 3], [1000, 2000]));
// console.log(middleArray([1, 2], [1000, 2000, 3000]));
// console.log(
//   middleArray(['Bikram', 'Neupane', 'Rojina'], ['Neupane', 'Bikram', 'Sapkota'])
// );

// 76. Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.
function takeArray(arr) {
  const newArr = [];

  if (arr.length <= 2) {
    newArr.push(['Array length value is less then 3']);
  } else {
    newArr.push(arr[0], arr[arr.length - 1]);
  }

  return newArr;
  // if (arr.length <= 2) return ['Array length value is less then 3'];
  // return [arr.at(0) + ' ' + arr.at(-1)].join().split(' ');
}

// console.log(takeArray([1, 2, 3, 4, 5]));
// console.log(takeArray([]));
// console.log(takeArray(['Japan', 'USA', 'India', 'China', 'Nepal']));
// console.log(takeArray(['Japan', 'USA']));

// 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.
function arrayLength(arr) {
  if (arr.length === 2) {
    return arr.includes(1) || arr.includes(3);
  }
  return false;
}

// console.log(arrayLength([1, 10]));
// console.log(arrayLength([50, 3]));
// console.log(arrayLength([1]));
// console.log(arrayLength(['Bikram', 'Neuapne']));

// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.
function arrayLength2(arr) {
  if (arr.length === 2) {
    // return !arr.includes(1) && !arr.includes(3);
    return arr.indexOf(1) === -1 && arr.indexOf(3) === -1;
  }
  return false;
}

// console.log(arrayLength2([50, 3]));
// console.log(arrayLength2([10, 20]));
// console.log(arrayLength2([1, 10]));
// console.log(arrayLength2([1]));
// console.log(arrayLength2(['Bikram', 'Neuapne']));

// 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.
function arrayLengthCheck(arr) {
  if (arr.length >= 3) return 'Array length is over';
  // if (arr.includes(30) && arr.includes(40))  return true;

  const fValue = arr[0];
  const lValue = arr[1];

  return (fValue === 30 && lValue === 30) || (fValue === 40 && lValue === 40);

  // const myArr = new Set(arr);
  // if (myArr.has(30) && myArr.has(40)) return true;

  return false;
}

// console.log(arrayLengthCheck([10, 20, 30, 40]));
// console.log(arrayLengthCheck([30, 40]));
// console.log(arrayLengthCheck([30, 30]));
// console.log(arrayLengthCheck([40, 40]));
// console.log(arrayLengthCheck([10, 30]));

// 80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
function swap(arr) {
  if (arr.length <= 1) return 'Array length is less then 1';

  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

  return arr;
}

// console.log(swap([10]));
// console.log(swap([10, 20, 30]));
// console.log(swap(['Bikram', 'Neupane']));

// 81. Write a JavaScript program to add two digits to a given positive integer of length two.
function addTwoDigits(num) {
  if (typeof num === 'string') return 'The value is String';
  if (num > 0) {
    return (num % 10) + Math.floor(num / 10);
  } else {
    return 'Number value is less then 1';
  }
}

// console.log(addTwoDigits(25));
// console.log(addTwoDigits(0));
// console.log(addTwoDigits(-10));
// console.log(addTwoDigits(67));
// console.log(addTwoDigits('Bikram'));

// 82. Write a JavaScript program to add two positive integers without carrying.
// function positiveInteger(num1, num2) {
//   let result = 0;
//   let x = 1;

//   while (num2 > 0 && num2 > 0) {
//     result += x * ((num1 + num2) % 10);
//     const n1 = Math.floor(num1 / 10);
//     const n2 = Math.floor(num2 / 10);
//     x *= 10;
//   }
//   return result;
// }

// console.log(positiveInteger(10, 27));
// console.log(positiveInteger(10, -27));

// 83. Write a JavaScript program to find the longest string from a given array of strings.
function findLongestWord(arr) {
  let longestWord = '';

  // arr.forEach(ar => {
  //   if (ar.length > longestWord.length) longestWord = ar;
  // });
  for (let ar of arr) {
    if (ar.length > longestWord.length) {
      longestWord = ar;
    }
  }
  return longestWord;
}

// console.log(findLongestWord(['Hello', 'Nepal', 'USA', 'Nederland']));

const getLongestText = arr =>
  arr.reduce(
    (savedText, text) => (text.length > savedText.length ? text : savedText),
    ''
  );

// console.log(getLongestText(['Hello', 'Nepal', 'USA', 'Nederland']));

// 84. Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

function replaceString(str) {
  if (str.length <= 0) return 'str length is less then 1';

  const allChar = str.split('');

  for (let i = 0; i < allChar.length; i++) {
    const n = allChar[i].charCodeAt() - 'a'.charCodeAt();
    const n1 = (n + 1) % 26;
    allChar[i] = String.fromCharCode(n1 + 'a'.charCodeAt());
  }
  return allChar.join(' ');
}

// console.log(replaceString('I Love You'));
// console.log(replaceString(''));
// console.log(replaceString('Bikram'));

// 85. Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.
// function alternateSums(arr) {
//   const result = [0, 0];

//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if (i % 2) result[1] += arr[i];
//     else result[0] += arr[i];
//   }
//   return result;
// }

// console.log(alternateSums([1, 2, 3, 4, 5]));
// console.log(alternateSums([1, 3, 6, 2, 5, 10]));

// 86. Write a JavaScript program to find the types of a given angle.

// Types of angles:
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.
function findAngel(angel) {
  if (angel > 0 && angel < 90) return 'Acute angle';
  if (angel === 90) return 'Right angle';
  if (angel > 90 && angel < 180) return 'Obtuse angle';
  if (angel === 180) return 'Straight angle';
  return 'Out of angel number';
}

// console.log(findAngel(100));
// console.log(findAngel(0));
// console.log(findAngel(300));
// console.log(findAngel(30));
// console.log(findAngel(90));
// console.log(findAngel(180));

// 87. Write a JavaScript program to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.
function arrayCheck(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j < arr1.length; j++) {
      let result = true;
      const temp = arr1[i];
      arr1[i] = arr1[j];
      arr1[j] = temp;
      for (let k = 0; k < arr1.length; k++) {
        if (arr1[k] !== arr2[k]) {
          result = false;
          break;
        }
      }
      if (result) return true;
      arr1[j] = arr1[i];
      arr1[i] = temp;
    }
  }
  return false;
}

// console.log(arrayCheck([10, 20], [30, 40, 50]));
// console.log(arrayCheck([10, 20], [10, 20]));
// console.log(arrayCheck([], []));

// 88. Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.
function integerDivides(num1, num2, divide) {
  if (num1 <= 0 || num2 <= 0 || divide <= 0)
    return 'Number value is less then 1';

  if (
    (num1 % divide === 0 && num2 % divide === 0) ||
    (num1 % divide !== 0 && num2 % divide !== 0)
  )
    return true;
  return false;
}

// console.log(integerDivides(8, 20, 4));
// console.log(integerDivides(10, 20, 4));
// console.log(integerDivides(10, 22, 4));
// console.log(integerDivides(8, 20, 0));

// 89. Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.
function checkOperation(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return 'Number is less then 1';
  return a + b === c || a * b === c || a / b === c || a - b === c;
}

// console.log(checkOperation(10, 25, 35));
// console.log(checkOperation(60, 25, 35));
// console.log(checkOperation(60, 25, -35));
// console.log(checkOperation(12, 10, 120));
// console.log(checkOperation(1500, 2, 750));
// console.log(checkOperation(1500, 1000, 750));

// 90. Write a JavaScript program to find the kth greatest element in a given array of integers.

function greatestNumber(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    let maxIndex = 1;
    const tmp = arr[i];
    // console.log(' From i ' + arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(' From J ' + arr[j]);
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    arr[i] = arr[maxIndex];
    arr[maxIndex] = tmp;
  }
  return arr[k - 1];
}

// console.log(greatestNumber([10, 2, 100, 199, 89]));
// console.log(greatestNumber([10, 2, 100, 199, 89], 3));
// console.log(greatestNumber([1, 2, 3, 4, 6], 3));

// 91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers.
function arrayMaxSum(arr, k) {
  let result = 0;
  let tmpSum = 0;

  for (i = 0; i < k - 1; i++) {
    tmpSum += arr[i];
  }
  for (let i = k - 1; i < arr.length; i++) {
    tmpSum += arr[i];
    if (tmpSum > result) {
      result = tmpSum;
    }
    tmpSum -= arr[i - k + 1];
  }
  return result;
}

// console.log(arrayMaxSum([1, 3, 6, 8], 12));
// console.log(arrayMaxSum([1, 2, 3, 14, 5], 2));

//92. Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.
function maxDifferent(arr) {
  let max = -1;
  let temp;

  for (let i = 0; i < arr.length - 1; i++) {
    temp = Math.abs(arr[i] - arr[i + 1]);
    console.log(temp);
    max = Math.max(max, temp);
  }
  return max;
}

// console.log(maxDifferent([1, 2, 4, 100, 210, 90, 50]));

// 93. Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.
function maxDiff(arr) {
  // let diff = 0;
  // if (arr?.length) diff = arr?.length ? Math.max(...arr) - Math.min(...arr) : 0;

  // return diff;

  // if (arr.length <= 2) return 'Array length is less then 2';

  // return Math.max(...arr) - Math.min(...arr);

  let maxResult = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log('From I', arr[i]);
    for (let k = 0; k !== i && k < arr.length; k++) {
      // console.log(arr[k]);
      const diff = Math.abs(arr[i] - arr[k]);
      maxResult = Math.max(maxResult, diff);
    }
  }
  return maxResult;
}

// console.log(maxDiff([1, 2, 3]));

// 94. Write a JavaScript program to find the number appearing most frequently in a given array of integers.
function arrarElementMode(arr) {
  const ctr = [];
  let ans = 0;

  for (let i = 0; i < 10; i++) {
    ctr.push(0);
    // console.log(ctr);
  }

  for (let i = 0; i < arr.length; i++) {
    ctr[arr[i] - 1]++;
    console.log(ctr);
    if (ctr[arr[i] - 1] > ctr[ans]) {
      ans = arr[i] - 1;
    }
  }
  return ans + 1;
}

// console.log(arrarElementMode([1, 2, 3, 2, 2, 8, 1, 9]));

// 95. Write a JavaScript program to replace all numbers with a specified number in an array of integers.
function arrayReplace(arr, oldNum, newNum) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === oldNum) {
      arr[i] = newNum;
    }
  }
  return arr;
}

// console.log(arrayReplace([1, 2, 3, 2, 2, 8, 1, 9], 2, 5));
// console.log(arrayReplace([100, 200, 300, 400], 200, 5));

// 96. Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.
function sumDiff(arr) {
  let result = 0;

  for (i = 1; i < arr.length; i++) {
    // console.log(arr[i]);
    result += Math.abs(arr[i] - arr[i - 1]);
  }
  return result;
}

// console.log(sumDiff([1, 2, 3, 2]));

// 97. Write a JavaScript program to find the shortest possible string. This can be converted into a string and converted into a palindrome by adding characters to the end of it.
// function buildPalindrome(str) {
//   let flag;
//   for (let i = str.length; ; i++) {
//     console.log(str[i]);
//   }
// }

// console.log(buildPalindrome('Bikram'));
