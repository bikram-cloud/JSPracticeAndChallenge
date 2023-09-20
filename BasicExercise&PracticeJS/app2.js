// 97. Write a JavaScript program to find the shortest possible string. This can be converted into a string and converted into a palindrome by adding characters to the end of it.
function buildPalindrome(str) {
  let flag;
  for (let i = str.length; ; i++) {
    flag = true;
    for (let j = 0; j < i - j - 1; j++) {
      if (i - j - 1 < str.length && str[j] !== str[i - j - 1]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      for (let j = str.length; j < i; j++) {
        str += str[i - j - 1];
      }
      return str;
    }
  }
}

console.log(buildPalindrome('abcd'));
console.log(buildPalindrome('122'));

// 98. Write a JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case.
function changeCase(str) {
  let x = 0;
  let y = 0;

  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      x++;
    } else {
      y++;
    }
  }
  if (y > x) return str.toLowerCase();
  return str.toUpperCase();
}

// console.log(changeCase('Bikram'));
// console.log(changeCase('PHp'));
// console.log(changeCase('123'));
// console.log(changeCase('bikram'));

// 99. Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string.
function rearrangeChar(st1, st2) {
  const firstSet = st1.split('').sort();
  const secondSet = st2.split('').sort();
  let result = true;

  //   console.log(firstSet);
  //   console.log(secondSet);

  //   console.log(Math.max(firstSet.length, secondSet.length));

  for (let i = 0; i < Math.max(firstSet.length, secondSet.length); i++) {
    if (firstSet[i] !== secondSet[i]) result = false;
  }
  return result;
}

console.log(rearrangeChar('xzy', 'acb'));
console.log(rearrangeChar('irk', 'kri'));

// 100. Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers.
function checkArray(arr1, arr2) {
  const setA = new Set(arr1);
  const setB = new Set(arr2);

  const inst = new Set([...setA].filter(x => setB.has(x)));
  console.log(setA);
  console.log(setB);
  console.log(inst);
  console.log(typeof inst);
  return Array.from(inst);
}

console.log(checkArray([1, 2, 3], [10, 100, 199, 2]));

// Another way
function checkCommonElement(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) return true;
  }
  return false;
}

console.log(checkCommonElement([1, 2, 3], [10, 200, 20]));
console.log(checkCommonElement([20, 2000, 3], [50, 200, 20]));

// 101. Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.
function checkLatinLetters(str) {
  const isLowerCase = symbol => {
    if ('a' <= symbol && symbol <= 'z') return true;
    return false;
  };

  const isUpperCase = symbol => {
    if ('A' <= symbol && symbol <= 'Z') return true;
    return false;
  };

  const firstCharLower = isLowerCase(str[0]);
  const firstCharUpper = isUpperCase(str[0]);

  console.log(firstCharLower);
  console.log(firstCharUpper);

  if (!(firstCharLower || firstCharUpper)) return false;

  for (let i = 1; i < str.length; i++) {
    console.log(str[i]);
    if (i % 2) {
      console.log(str[i]);
      console.log(isLowerCase(str[i]));
      console.log(isUpperCase(str[i]));
      if (
        isLowerCase(str[i]) === firstCharLower ||
        isUpperCase(str[i] === firstCharUpper)
      )
        return false;
    }
  }
  return true;
}

console.log(checkLatinLetters('xYr'));
console.log(checkLatinLetters('BBikramNeupane'));

// 102. Write a JavaScript program to find the number of inversions of a given array of integers.
// Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.

function arrayInversions(arr) {
  let ctr = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[j]);
      if (arr[i] > arr[j]) {
        ctr++;
      }
    }
  }
  return ctr;
}

console.log(arrayInversions([1, 2, 3, 4, 5]));
console.log(arrayInversions([1, 5, 4, 3]));

// 103. Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number.
function digitDelete(num) {
  let result = 0;
  const numDegits = [];

  while (num) {
    numDegits.push(num % 10);
    num = Math.floor(num / 10);
  }

  for (let indexNum = 0; indexNum < numDegits.length; indexNum++) {
    let n = 0;
    for (let i = numDegits.length - 1; i >= 0; i--) {
      if (i !== indexNum) {
        n = n * 10 + numDegits[i];
      }
    }
    result = Math.max(n, result);
  }
  return result;
}

console.log(digitDelete(500));
console.log(digitDelete(10));

// 104. Write a JavaScript program to find two elements of an array such that their absolute difference is not larger than a given integer. However, it is as close as possible to the integer.
function diffValues(arr, n) {
  let maxValue = -1;
  console.log(maxValue);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (j = i + 1; j < arr.length; j++) {
      console.log(arr[j]);
      const x = Math.abs(arr[i] - arr[j]);
      console.log(x);
      if (x <= n) {
        maxValue = Math.max(maxValue, x);
      }
    }
  }
  return maxValue;
}

console.log(diffValues([1, 2, 3, 4, 5, 10], 10));

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i % 2 === 0) {
    console.log(i);
  }
}

let b = 10;
while (b >= 1) {
  console.log(b);
  b--;
  if (b === 1) {
    console.log('Hello'.toString().lastIndexOf('l'));
  }
}

// 105. Write a JavaScript program to find the number of times to replace a given number with the sum of its digits. This is until it converts to a single-digit number.

function digitToOne(num) {
  const digitSum = num => {
    let disitNum = 0;
    while (num) {
      disitNum += num % 10;
      console.log(disitNum);
      num = Math.floor(num / 10);
      console.log(num);
    }
    return disitNum;
  };

  let result = 0;

  while (num >= 10) {
    result += 1;
    num = digitSum(num);
  }
  return result;
}

console.log(digitToOne(123));
console.log(digitToOne(156));

// 106. Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.
function divideDigit(num, d) {
  if (d === 1) return num;
  while (num % d === 0) {
    num /= d;
  }
  return num;
}

console.log(divideDigit(13, 2));
console.log(divideDigit(13, 1));
console.log(divideDigit(16, 2));

// 107. Write a JavaScript program to find the number of sorted pairs formed by arrays of integers. This is such that one element in the pair is divisible by the other one.
function arrParis(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[j]);
      if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
        result++;
      }
    }
  }
  return result;
}

console.log(arrParis([1, 2, 3]));
console.log(arrParis([]));

// 108. Write a JavaScript program to create the dot products of two given 3D vectors.
// Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.
function dotProduct(v1, v2) {
  let result = 0;
  for (let i = 0; i < 4; i++) {
    console.log(v1[i], v2[i]);
    result += v1[i] * v2[i];
    console.log(v1[i] * v2[i]);
  }
  return result;
}

console.log(dotProduct([1, 2, 3, 10], [1, 2, 3, 9]));
console.log(dotProduct([1, 2, 3, 4], [1, 2, 3, 5]));

// 109. Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.
// function shortArr(arr) {
//   return arr.sort((a, b) => parseFloat(a) - parseFloat(b));
//   // return arr.sort((a, b) => a - b);
// }

// console.log(shortArr([1, 10, 500, 99, 88.88, 79, 88.1]));
function shortPrime(num) {
  const primeNum1 = [];
  const primeNum2 = [];

  for (let i = 0; i <= num; i++) {
    console.log(i);
    primeNum2.push(true);
    console.log(primeNum2);
  }

  for (let i = 2; i <= num; i++) {
    console.log(i);
    if (primeNum2[i]) {
      primeNum1.push(i);
      console.log(primeNum1);
      for (let j = 1; i * j <= num; j++) {
        console.log(j);
        primeNum2[i * j] = false;
        console.log(primeNum2);
      }
    }
  }
  return primeNum1;
}

console.log(shortPrime(3));

// 110. Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.

function findNumber(arrNum, num) {
  let result = 0;

  for (let i = 0; i < arrNum.length; i++) {
    console.log(arrNum[i]);
    console.log(i);
    if (arrNum[i] % 2 === 0 && arrNum[i] !== num) {
      result++;
      console.log(arrNum[i] !== 0);
      console.log(arrNum[i] % 2 === 0);
      console.log(arrNum[i]);
      console.log(result);
    }
    if (arrNum[i] === num) {
      return result;
    }
  }
  return -1;
}

console.log(findNumber([1, 5, 3, 7], 4));
console.log(findNumber([1, 2, 3, 4, 5, 6, 7, 8], 5));

function countEvenBeforeNumber(arr, target) {
  let evenCount = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === target) {
      break;
    }

    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
      evenCount++;
    }
  }

  return evenCount;
}

console.log(countEvenBeforeNumber([2, 4, 6, 10], 6));

// 111. Write a JavaScript program to check a number from three given numbers where two numbers are equal. Find the third one.
function findDiffNum(n1, n2, n3) {
  if (n1 === n2 && n1 === n3 && n2 === n3) return 'All value is same';

  if (n1 !== n2 && n1 !== n3 && n2 !== n3) return 'All value are not equal';

  if (n1 === n2) return n3;
  if (n1 === n3) return n2;
  return n1;
}

console.log(findDiffNum(10, 20, 30));
console.log(findDiffNum(10, 10, 30));
console.log(findDiffNum(30, 33, 30));
console.log(findDiffNum(30, 30, 30));
console.log(findDiffNum(30, 50, 50));

// 112. Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number.
function countTrailingZerosInFactorial(n) {
  let count = 0;

  for (let i = 5; n / i >= 1; i *= 5) {
    console.log(i);
    count += Math.floor(n / i);
    console.log(count);
  }

  return count;
}

console.log(countTrailingZerosInFactorial(25));
console.log(countTrailingZerosInFactorial(22));

function zeroFactorial(n) {
  let result = 0;

  for (let i = 5; i <= n; i += 5) {
    console.log(i);
    let num = i;
    while (num % 5 === 0) {
      num /= 5;
      result++;
      console.log(result);
    }
  }
  return result;
}

console.log(zeroFactorial(10));
console.log(zeroFactorial(9));

// 113. Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers.
function calculateSeriesSum(n) {
  let sum = 0;

  while (n >= 1) {
    console.log(n);
    sum += n;
    console.log(sum);
    n = Math.floor(n / 2);
    console.log(n);
  }

  return sum;
}

console.log(calculateSeriesSum(10));
console.log(calculateSeriesSum(0));

// 114. Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.)
function isCorrectSectence(str) {
  // if (str.length === 0) return 'String length is 0';
  // if (str[0] !== str[0].toUpperCase())
  //   return ['The first string letter is lowercase'];
  // if (str[str.length - 1] !== '.') return 'The last string not includes .';

  // return true;

  const firstChar = str[0];
  const lastChar = str[str.length - 1];
  return /[A-Z]/.test(firstChar) && lastChar === '.';
}

console.log(isCorrectSectence('This is a correct sentence.'));
console.log(isCorrectSectence('This is a correct sentence'));
console.log(isCorrectSectence('this is a correct sentence'));

// 115. Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right).
function isDiagonalMatrix(matr) {
  for (let i = 0; i < matr.length; i++) {
    console.log(matr[i]);
    for (j = 0; j < matr[i].length; j++) {
      if (i !== j && matr[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(
  isDiagonalMatrix([
    [5, 0, 0],
    [0, 2, 0],
    [0, 0, 3],
  ])
);
console.log(
  isDiagonalMatrix([
    [1, 0, 0],
    [0, 2, 3],
    [0, 0, 3],
  ])
);

// 116. Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.
function isDivisibleBy3(str) {
  let digitSum = 0;

  const left = '0'.charCodeAt();
  const right = '9'.charCodeAt();
  const result = [];
  const maskData = str.split('');
  let hasPos = -1;

  for (let i = 0; i < maskData.length; i++) {
    console.log(i);
    console.log(left);
    console.log(right);
    console.log(maskData[i].charCodeAt());
    if (left <= maskData[i].charCodeAt() && maskData[i].charCodeAt() <= right) {
      digitSum += maskData[i].charCodeAt() - left;
      console.log(digitSum);
      console.log(maskData[i].charCodeAt() - left);
    } else {
      hasPos = i;
      console.log(i);
    }
  }

  for (let i = 0; i < 10; i++) {
    if ((digitSum + i) % 3 === 0) {
      maskData[hasPos] = String.fromCharCode(left + i);
      result.push(maskData.join(''));
    }
  }
  return result;
}

console.log(isDivisibleBy3('Bik#'));
console.log(isDivisibleBy3('2#0'));
console.log(isDivisibleBy3('4#2'));

// 117. Write a JavaScript program to check whether a given matrix is an identity matrix.
function isIdentityMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[j]);
      if (i === j && matrix[i][j] !== 1) {
        return false;
      } else if (i !== j && matrix[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(isIdentityMatrix('Hello'));

function is_identity_Matrix(matrixData) {
  for (let i = 0; i < matrixData.length; i++) {
    console.log(matrixData[i]);
    for (let j = 0; j < matrixData.length; j++) {
      console.log(matrixData[j]);
      console.log(matrixData[i][j]);
      if (matrixData[i][j] !== 1 || i === j || (matrixData[i][j] && i !== j))
        return false;
    }
  }
  return true;
}

console.log(
  is_identity_Matrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);

for (let i = 0; i < 3; i++) {
  console.log(`The current value of i is ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`j : ${j}`);
  }
  console.log('--------------------');
}

for (let i = 0; i < 11; i++) {
  for (let j = i + 1; j < 11; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log('--------------------');
}

const colors = ['red', 'green', 'blue'];
const sizes = ['small', 'medium', 'large'];

for (let c of colors) {
  // console.log(c);
  for (let d of sizes) {
    console.log(`${d} ${c}`);
  }
  console.log('---------');
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const target = 9;

for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i]);
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[j]);
    console.log(matrix[i][j]);
    if (matrix[i][j] === target) {
      console.log(`Found ${target} at row ${i} and cloumn ${j}`);
    } else {
      console.log(`Found ${target} at row ${i} and cloumn ${j}`);
    }
  }
}

// 118. Write a JavaScript program to check whether a given number is in a given range.
function isNumberInRange(num, max, min) {
  return num >= min && num <= max;
}

console.log(isNumberInRange(15, 20, 10));
console.log(isNumberInRange(9, 20, 10));

function sayHi() {
  return (() => 'a')();
}

(function ab() {
  for (i = 0; i < 10; i++) {
    console.log(i);
  }
})();

function sum8(num1, num2) {
  return Number(num1) + Number(num2);
  // return num1 + num2;
}

console.log(sum8('10', '11'));

function a7(arr) {
  const ab = arr.map(Number);
  if (ab === 'NaN') {
    return 'false';
  } else {
    return 'true';
  }
  return ab;
}

console.log(a7(['Bikram', 'Neupane', 'Japan', '12']));

// 119. Write a JavaScript program to check if a given integer has an increasing digit sequence.
function hasIncreasingSequence(num) {
  const digits = num.toString().split('').map(Number);
  console.log(typeof digits);

  for (let i = 0; i < digits.length - 1; i++) {
    console.log(digits[i]);
    console.log(digits[i + 1]);
    if (digits[i] >= digits[i + 1]) return false;
  }

  return true;
}

console.log(hasIncreasingSequence(12345));
console.log(hasIncreasingSequence(1223));

// 120. Write a JavaScript program to check if a point lies strictly inside the circle.
function isPointInsideCircle(x, y, centerx, centery, readius) {
  const distanceSquared = (x - centerx) ** 2 + (y - centery) ** 2;
  console.log(distanceSquared);
  console.log(readius ** 2);
  return distanceSquared < readius ** 2;
}

console.log(isPointInsideCircle(2, 3, 0, 0, 5));
console.log(isPointInsideCircle(4, 5, 1, 1, 4));

// 121. Write a JavaScript program to check whether a given matrix is lower triangular or not.
function isLowerTriangular(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
    for (let j = i + 1; j < matrix[i].length; j++) {
      console.log(j);
      if (matrix[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(isLowerTriangular([1, 0, 0], [2, 0, 0], [0, 3, 3]));
console.log(isLowerTriangular([1, 0, 1], [2, 0, 0], [0, 3, 3]));

// 122. Write a JavaScript program to check whether a given array of integers represents a strictly increasing or decreasing sequence.
function isStrictlyIncreasing(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr[i]);
    console.log(i - 1);
    console.log(arr[i - 1]);
    if (arr[i] <= arr[i - 1]) return false;
  }
  return true;
}

console.log(isStrictlyIncreasing([1, 3, 5, 7, 9]));

function isStrictlyDecreasing(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr[i]);
    if (arr[i] >= arr[i - 1]) return false;
  }
  return true;
}

console.log(isStrictlyDecreasing([1, 3, 5, 7, 9]));

function isMonotonous(num) {
  if (num.length === 1) return true;

  const numDirection = num[1] - num[0];

  console.log(num[0]);
  console.log(num[1]);

  console.log(numDirection);

  for (let i = 0; i < num.length - 1; i++) {
    if (numDirection * (num[i + 1] - num[i]) <= 0) return false;
  }
  return true;
}

console.log(isMonotonous([1, 2, 3]));
console.log(isMonotonous([1, 2, 2]));
console.log(isMonotonous([-3, -2, -1]));
console.log(isMonotonous([3, 10]));

// 123. Write a JavaScript program to find out if the members of a given array of integers are a permutation of numbers from 1 to a given integer.

function isPermutation(arr, n) {
  if (arr.length !== n) return false;

  const seen = new Set();

  console.log(seen);

  for (const num of arr) {
    console.log(num);
    if (num < 1 || num > n || seen.has(num)) return false;
    seen.add(num);
    console.log(seen);
  }

  return seen.size === n;
}

console.log(isPermutation([4, 2, 1, 3], 4));
console.log(isPermutation([4, 2, 1], 4));

function is_permutation(arr, num) {
  for (let i = 0; i < num; i++) {
    console.log(i);
    console.log(i + 1);
    if (!arr.includes(i + 1)) return false;
  }
  return true;
}

console.log(is_permutation([1, 2, 3, 4, 5], 5));
console.log(is_permutation([1, 2, 3, 4], 4));

// 124. Write a JavaScript program to create the NOR value of two given booleans.
// const nonValue = (a,b) => !(a || b)
const nonValue = (a, b) => !a && !b;

console.log(nonValue(true, true));
console.log(nonValue(false, false));

// 125. Write a JavaScript program to find the longest string in a given array.
function findLongestString(str) {
  let longestStr = '';

  for (let i = 0; i < str.length; i++) {
    console.log(i);
    console.log(str[i]);
    if (str[i].length > longestStr.length) {
      console.log(longestStr.length);
      longestStr = str[i];
      console.log(longestStr);
      console.log(str[i]);
    }
  }
  return longestStr;

  // other soluction
  // return str.sort((a,b) => b.length - a.length);
  // return str.reduce((a,b) => a.length > b.length ? a : b)
}

console.log(findLongestString(['Apple', 'Orrange', 'Banana', 'Fruit']));

// 126. Write a JavaScript program to get the largest even number from an array of integers.
function getLargestEvenNumber(num) {
  // let largestEven = null;
  // for (const n of num) {
  //   console.log(n);
  //   if (n % 2 === 0 && (largestEven === null || n > largestEven)) {
  //     console.log(n);
  //     largestEven = n;
  //     console.log(largestEven);
  //   }
  // }
  // return largestEven;
  num.sort((a, b) => b - a);

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) return num[i];
  }
}

console.log(getLargestEvenNumber([5, 10, 15, 11, 8, 17, 30, 32]));

// 127. Write a JavaScript program to reverse the order of bits in a integer.
function reverseBits(n) {
  let result = 0;

  while (n > 0) {
    console.log(n);
    result = (result << 1) | (n & 1);
    n >>= 1;
  }

  return result;
}

console.log(reverseBits(10));

// other soluson
function mirror_bits(n) {
  let t = n.toString(2).split('');

  let strLen = t.length;

  for (let i = 0; i < 8 - strLen; i++) {
    t.unshift('0');
  }

  return parseInt(t.reverse().join(''), 2);
}

console.log(mirror_bits(14));
console.log(mirror_bits(56));
console.log(mirror_bits(234));

// 128. Write a JavaScript program to find the smallest round number not less than a given value.
function findSmallestRoundNumber(num) {
  if (num < 10) return 10;

  let power = 1;
  while (10 ** power < num) {
    power++;
    console.log(power);
  }

  return power ** 10;
}

console.log(findSmallestRoundNumber(57));
console.log(findSmallestRoundNumber(19));
console.log(findSmallestRoundNumber(20));

function nearest_round_number(num) {
  while (num % 10) {
    num++;
    console.log(num);
  }
  return num;
}

console.log(nearest_round_number(56));

// 129. Write a JavaScript program to find the smallest prime number strictly greater than a given number.
function nextPrimeNum(num) {
  for (let i = num + 1; ; i++) {
    console.log(i);

    let isPrime = true;
    for (let d = 2; d * d <= i; d++) {
      console.log(d);
      if (i % d === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) return i;
  }
}

console.log(nextPrimeNum(3));
console.log(nextPrimeNum(17));

// 130. Write a JavaScript program to find the number of even digits in a given integer.
function countEvenDigits(num) {
  let count = 0;

  while (num !== 0) {
    const digit = num % 10;
    if (digit % 2 === 0) {
      count++;
    }
    num = Math.floor(num / 10);
  }

  return num;
}

console.log(countEvenDigits('1234567890'));

function evenDigit(n) {
  let count = 0;

  while (n) {
    count += n % 2 === 0;
    n = Math.floor(n / 10);
  }

  return n;
}

console.log(evenDigit(123));

// 131. Write a JavaScript program to create an array of prefix sums of the given array.
function createPrefixSumsArray(arr) {
  const prefixSum = [];
  let sum = 0;

  for (const ar of arr) {
    console.log(ar);
    sum += ar;
    prefixSum.push(sum);
  }

  return prefixSum;
}

console.log(createPrefixSumsArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function prefix_sums(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = 0;
    for (let j = 0; j < i + 1; j++) {
      newArr[i] += arr[j];
    }
  }
  return newArr;
}

console.log(prefix_sums([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//132. Write a JavaScript program to find all distinct prime factors of a given integer.
function distinctPrimeFactors(num) {
  const factors = [];

  while (num % 2 === 0) {
    factors.push(2);
    num /= 2;
  }

  console.log(factors);

  for (let i = 3; i * i <= num; i += 2) {
    while (num % i === 0) {
      factors.push(i);
      num /= i;
    }
  }

  if (num > 2) {
    factors.push(num);
  }

  console.log(factors);

  return factors;
}

console.log(distinctPrimeFactors(10));

function prime_fector(n) {
  function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      console.log(i);
      if (n % i === 0) return false;
    }
    return true;
  }
  const result = [];
  for (let i = 2; i <= n; i++) {
    while (isPrime(i) && n % i === 0) {
      if (!result.includes(i)) result.push(i);
      n /= i;
    }
  }
  return result;
}

console.log(prime_fector(100));
console.log(prime_fector(101));
console.log(prime_fector(105));

const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

// 133. Write a JavaScript program to check whether a given fraction is proper or not.
function proper_improper_test(num) {
  return Math.abs(num[0] / num[1]) < 1
    ? 'Proper fraction.'
    : 'Improper fraction.';
}

console.log(proper_improper_test([10, 20]));
console.log(proper_improper_test([100, 20]));

// 134. Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.
function transFormString(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const reverseAlphabet = alphabet.split('').reverse().join('');

  console.log(reverseAlphabet);

  const transformedString = str.split('').map(char => {
    if (alphabet.includes(char)) {
      const index = alphabet.indexOf(char);
      console.log(index);
      return reverseAlphabet[index];
    } else if (reverseAlphabet.includes(char)) {
      const index = reverseAlphabet.indexOf(char);
      console.log(index);
      return reverseAlphabet[index];
    } else {
      return char;
    }
  });

  return transformedString;
}

console.log(transFormString('efghicc'));

function change_char(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    console.log(i);
    console.log(str[i]);
    const charOrder = str.charCodeAt(i) - 'a'.charCodeAt(0);
    console.log(charOrder);
    const changeChar = 25 - charOrder + 'a'.charCodeAt(0);
    console.log(changeChar);
    result.push(String.fromCharCode(changeChar));
  }
  return result.join('');
}

console.log(change_char('abcd'));

// 135. Write a JavaScript program to remove all characters from a given string that appear more than once.
function removeDuplicateCharacters(str) {
  const charCount = {};
  let result = '';

  for (const char of str) {
    console.log(char);
    if (charCount[char]) {
      charCount[char]++;
      console.log(charCount[char]);
    } else {
      charCount[char] = 1;
    }
  }

  for (const char of str) {
    console.log(char);
    if (charCount[char] === 1) {
      result += char;
    }
  }

  return result;
}

// console.log(removeDuplicateCharacters('programming'));
// console.log(removeDuplicateCharacters('Bikram'));
console.log(removeDuplicateCharacters('neupane'));

function remove_duplicate_cchars(str) {
  const arrChar = str.split('');
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(arrChar[i]) === str.lastIndexOf(arrChar[i]))
      result.push(arrChar[i]);
  }

  return result.join('');
}

console.log(remove_duplicate_cchars('neupane'));

// 136. Write a JavaScript program to replace the first digit in a string (should have at least one digit) with the $ character.
function replaceFirstDigit(str) {
  for (let i = 0; i < str.length; i++) {
    if (/\d/.test(str[i])) {
      return str.slice(0, i) + '$' + str.slice(i + 1);
    }
  }
}

console.log(replaceFirstDigit('1234'));

function replaceFirDigit(str) {
  return str.replace(/[a-z]/, '$');
}

console.log(replaceFirDigit('abcd1234'));

// 137. Write a JavaScript program to test whether a given integer is greater than 15 and return the given number, otherwise return 15.
function checkInteger(n, n2) {
  return n > 15 ? n : n2;

  // if (n > 15) return n;
  // return 15;
}

console.log(checkInteger(17, 15));
console.log(checkInteger(10, 15));

// 138. Write a JavaScript program to reverse the bits of a given 16-bit unsigned short integer.
function reverseBits16(n) {
  let result = 0;

  for (let i = 0; i < 16; i++) {
    result <<= 1;
    result |= n & 1;
    n >>= 1;
  }

  return result;
}

console.log(reverseBits16(48795));
console.log(reverseBits16(123));

// Another way
function bitsReverse(n) {
  let result = 0;

  for (let i = 0; i < 16; i++) {
    console.log(i);
    result = result * 2 + (n % 2);
    console.log(`${result} * 2`);
    n = Math.floor(n / 2);
    console.log(`${n} / 2 = ${n}`);
  }
  return result;
}

console.log(bitsReverse(10));
console.log(bitsReverse(11));

// 139. Write a JavaScript program to find the position of the rightmost round number in an array of integers. If there are no round numbers, the function returns 0.
function rightMostRoundNumber(arr) {
  // let result = [];
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr[i]);
    if (arr[i] % 10 === 0) {
      // result.push(i)
      result = i;
      console.log(i);
    }
  }

  return result;
}

console.log(rightMostRoundNumber([1, 20, 22, 25, 30, 55, 50, 0]));
console.log(rightMostRoundNumber([1, 2, 22, 25, 3]));

// 140. Write a JavaScript program to check whether all the digits in a given number are the same or not.
function checkSameDigit(num) {
  const first = num % 10;
  console.log(first);
  while (num) {
    console.log(num);
    if (num % 10 !== first) return false;
    num = Math.floor(num / 10);
    console.log(num);
  }

  return true;
}

// console.log(checkSameDigit(12345))
// console.log(checkSameDigit(60))
console.log(checkSameDigit(66));

// 141. Write a JavaScript program to find the number of elements in both arrays.
function checkArrayBoth(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) return true;
  return false;
}

console.log(checkArrayBoth([1, 2], [32, 2]));
console.log(checkArrayBoth([1, 2], 1));
console.log(checkArrayBoth([1, 2], 'Bikram'));

function checkSameElementArrays(arr1, arr2) {
  let result = 0;

  for (let i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) result++;
      console.log(arr1[i]);
      console.log(arr1[j]);
    }
  }
  return result;
}

console.log(checkSameElementArrays([1, 2, 3, 4], [10, 22, 1, 4]));
console.log(checkSameElementArrays([1, 2, 3, 4], [10, 22, 0, 5]));

// 142. Write a JavaScript program to simplify a given absolute path for a file in Unix-style.
function sumplifyPath(path) {
  const components = path.split('/');

  console.log(components);

  const stack = [];

  for (const component of components) {
    console.log(component);
    if (component === '' || component === '.') {
      continue;
    } else if (component === '..') {
      if (stack.length > 0) stack.pop();
    } else {
      stack.push(component);
    }
  }

  const simplifiedPath = '/' + stack.join('/');

  return simplifiedPath;
}

console.log(sumplifyPath('/a/./b/../../c/'));
console.log(sumplifyPath('abc'));

function simplify_path(path) {
  const parts = path.split('/');

  const newPath = [];
  let lenght = 0;

  for (let i = 0; i < parts.lenght; i++) {
    const part = parts[i];
    if (part === '.' || part === '' || part === '..') {
      if (part === '..' && lenght > 0) lenght--;
      continue;
    }
    newPath[lenght++] = part;
  }

  if (lenght === 0) return '/';

  let result = '';

  for (let i = 0; i < lenght; i++) {
    result += `/${newPath[i]}`;
  }

  return result;
}

console.log(simplify_path('abcd'));
console.log(simplify_path('/home/var/./www/../html//sql/'));

// 143. Write a JavaScript program to sort the strings of a given array of strings in order of increasing length.

function sortByLength(arr) {
  arr.sort(function (a, b) {
    return a.length - b.length;
  });

  return arr;
}

const sortedArray = sortByLength([
  'apple',
  'banana',
  'cherry',
  'datetede',
  'fig',
]);
console.log(sortedArray);

function sortedArrayLength(arr) {
  return arr.sort((a, b) => a.lenght - b.lenght);
}

console.log(sortedArrayLength(['apple', 'banana', 'cherry', 'date', 'fig']));

function sortedArr(arrValue) {
  arrValue.sort(function (a, b) {
    return a.length - b.length;
  });

  return arrValue;
}

// console.log(sortedArr(['apple', 'banana', 'cherry', 'date', 'fig']));

const ab = sortedArr(['apple', 'banana', 'cherry', 'date', 'fig']);

console.log(ab);

console.log(sortedArr(['apple', 'banana', 'cherry', 'date', 'fig']));

function sortByStrLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[j]);
      if (arr[i].length > arr[j].length) {
        const m = arr[i];
        arr[i] = arr[j];
        arr[j] = m;
      }
    }
  }
  return arr;
}

console.log(sortByStrLength(['abc', 'Bikram', 'Nepal', 'a', 'd', 'Ne']));

// 144. Write a JavaScript program to break an URL address and put its parts into an array.
function breakURL(url) {
  const urlObject = new URL(url);

  const urlParts = {
    protocal: urlObject.protocol,
    hostname: urlObject.hostname,
    port: urlObject.port,
    pathname: urlObject.pathname,
    search: urlObject.search,
    hash: urlObject.hash,
    origin: urlObject.origin,
    domain: urlObject.domain,
  };

  return Object.values(urlParts);
}

console.log(
  breakURL('https://www.example.com:8080/path/to/page?query=param#section')
);

function break_address(url) {
  let data = url.split('://');
  console.log(data);
  const protocal = data[0];
  console.log(protocal);
  data = data[1].split('.com');
  console.log(data);
  const domain = data[0];
  console.log(domain);
  data = data[1].split('/');
  console.log(data);
  if (data[1]) return [protocal, domain, data[1]];
  return [protocal, domain];
}

console.log(break_address('https://www.w3resource.com/javascript-exercises/'));

// 145. Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.
function findMaxN(target) {
  let sum = 0;
  let n = 0;

  while (sum + (n + 1) <= target) {
    console.log(n);
    console.log(sum);
    n++;
    console.log(n);
    sum += n;
    console.log(sum);
  }

  return n;
}

console.log(findMaxN(2));

// 146. Write a JavaScript program to compute the sum of cubes of all integers from 1 to a given integer.
function sumOfCubes(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    console.log(i);
    console.log(Math.pow(i, 3));
    sum += Math.pow(i, 3);
    console.log(`sum += Math.pow(i,3): ${sum} += ${Math.pow(i, 3)}`);
    console.log(sum);
  }

  return sum;
}

console.log(sumOfCubes(10));
console.log(sumOfCubes(11));

// 147. Write a JavaScript program to compute the sum of all the digits that occur in a given string.
function sumDigitsString(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    // const character = str.charAt(i);
    const character = str[i];
    console.log(character);

    console.log(typeof character);

    if (!isNaN(character)) {
      console.log(str[i]);
    }

    if (!isNaN(character) && character !== '') {
      sum += parseInt(character);
      console.log(typeof character);
    }
  }

  return sum;
}

console.log(sumDigitsString('H3ello1210'));
console.log(sumDigitsString(''));

// Another way
function sumDigitsStr(str) {
  let sum = 0;

  for (let i = 1; i < str.length; i++) {
    console.log(typeof str[i]);
    if (/[1-9]/.test(str[i])) {
      sum += parseInt(str[i]);
      console.log(typeof str[i]);
    }
  }
  return sum;
}

console.log(sumDigitsStr('abc0123'));
console.log(sumDigitsStr('a'));

// 148. Write a JavaScript program to swap two halves of a given array of integers of even length.
function swapArrayHalves(arr) {
  if (arr.length % 2 === 0) {
    const middleIndex = arr.length / 2;

    console.log(middleIndex);

    const firstHalf = arr.slice(0, middleIndex);
    const secondHalf = arr.slice(middleIndex);

    console.log(firstHalf);
    console.log(secondHalf);

    const swappedArray = firstHalf.concat(secondHalf);

    return swappedArray;
  } else {
    return 'Array length is not even, cannot swap halves.';
  }
}

console.log(swapArrayHalves([1, 2, 3, 4, 5, 6]));
console.log(swapArrayHalves([1, 3]));
console.log(swapArrayHalves([1, 3, 7]));

// Another way
function arraySwap(arr) {
  if (arr.length % 2 !== 0) return false;

  for (let i = 0; i < arr.length / 2; i++) {
    const tmp = arr[i];
    arr[i] = arr[i + arr.length / 2];
    arr[i + arr.length / 2] = tmp;
  }

  return arr;
}

console.log(arraySwap([1, 2, 3, 4, 5, 6]));
console.log(arraySwap([1, 2, 3, 4, 5]));

// 149. Write a JavaScript program to change the capitalization of all letters in a given string.
function changeCapitalization(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    console.log(currentChar);

    if (currentChar === currentChar.toUpperCase()) {
      result += currentChar.toLowerCase();
    } else {
      result += currentChar.toUpperCase();
    }
  }

  return result;
}

console.log(changeCapitalization('Hello World'));

// Another way solved
function changeCase(str) {
  if (str.length < 1) return false;

  if (!isNaN(str)) return 'It is a number value';

  let strResult = '';

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (/[A-Z]/.test(currentChar)) {
      strResult += currentChar.toLowerCase();
    } else {
      strResult += currentChar.toUpperCase();
    }
  }

  return strResult;
}

console.log(changeCase('Hello World'));
console.log(changeCase('123'));

// 150. Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.
function swapAdjacentDigits(n) {
  const str = n.toString();

  if (str.length % 2 !== 0)
    return 'Integer length is not even, cannot swap adjacent digits.';

  let swappedString = '';

  for (let i = 0; i < str.length; i += 2) {
    console.log(str[i]);
    console.log(`${i} += 2`);
    // console.log((swappedString += str[i + 1] + str[i]));
    swappedString += str[i + 1] + str[i];
  }

  const swappedInterge = parseInt(swappedString);

  return swappedInterge;
}

console.log(swapAdjacentDigits(12345));
console.log(swapAdjacentDigits(123456));

// Another way solve
function swap_adjacent_digits(n) {
  if (n.toString().length % 2 !== 0) return false;

  let result = 0;
  let x = 1;

  while (n !== 0) {
    let dg1 = n % 10;
    let dg2 = ((n - dg1) / 10) % 10;
    result += x * (10 * dg1 + dg2);
    n = Math.floor(n / 100);
    x *= 100;
  }

  return result;
}

console.log(swap_adjacent_digits(15));
console.log(swap_adjacent_digits(1234));
