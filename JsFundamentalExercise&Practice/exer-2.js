// 15. Write a JavaScript program to return the minimum-maximum value of an array, after applying the provided function to set a comparing rule.
function minMaxComparator(arr, comparator) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return {
      min: undefined,
      max: undefined,
    };
  }

  let min = arr[0];
  let max = arr[0];

  console.log(min);
  console.log(max);

  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];

    console.log(current);

    if (comparator(current, min) < 0) {
      min = current;
    }
    if (comparator(current, max) > 0) {
      max = current;
      console.log(max);
    }
  }

  return { minValue: min, maxValue: max };
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr = '' || {};

const com = (a, b) => Math.abs(a) - Math.abs(b);

console.log(minMaxComparator(numbers, com));
console.log(minMaxComparator(arr, com));

// Another way solve
const compar = (a, b) => b - a;
console.log(compar(10, 21));

const reduceWhich = (arr, comparator) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));

console.log(reduceWhich([1, 2, 3, 4], compar));
console.log(reduceWhich([10, 30, 20], (a, b) => b - a));
console.log(
  reduceWhich(
    [
      { name: 'Bikram', age: 29 },
      { name: 'Neupane', age: 30 },
    ],
    (a, b) => a.age - b.age
  )
);

// 16. Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.
function all(collection, predicate) {
  return collection.every(predicate);
}

// Arrow function
const all2 = (collection, predicate) => collection.every(predicate);

//Check if all numbers are even
const isEven = num => num % 2 === 0;
console.log(all([1, 2, 3, 4, 5, 6], isEven));
console.log(all2([2, 4, 6], isEven));

//Check if all numbers are odd
const isOdd = num => num % 2 === 1;
console.log(all([1, 2, 3, 4, 5, 6], isOdd));
console.log(all2([1, 11, 3, 9, 5, 7], isOdd));

// check if all numbers are greater than 0
const isGreaterThanZero = num => num > 0;
console.log(all2([1, 2, 3, 4, 5, 10, 1001], isGreaterThanZero));

// 17. Write a JavaScript program to split the values of two given arrays into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
function splitArrayByFilter(arr, filterArr) {
  if (arr.length !== filterArr.length)
    throw Error('arr and filterArr must hava the same length.');

  const group1 = [];
  const group2 = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(filterArr[i]);
    if (filterArr[i]) {
      group1.push(arr[i]);
    } else {
      group2.push(arr[i]);
    }
  }

  return [group1, group2];
}

// console.log(splitArrayByFilter([1, 2, 3, 4, 5], [true, false, true, true,true]));
console.log(
  splitArrayByFilter([1, 2, 3, 4, 5], [true, false, false, false, false])
);

// Another way solve
const bifurcate = (arr, filterArr) =>
  arr.reduce(
    (acc, curVal, i) => (acc[filterArr[i] ? 0 : 1].push(curVal), acc),
    [[], []]
  );

console.log(bifurcate([1, 2, 3, 4], [true, true, false, true]));
console.log(bifurcate([1, 2, 3, 4], [true, true, true, true]));
console.log(bifurcate([1, 2, 3, 4], [false, false, false, false]));
console.log(bifurcate([1, 2, 3, 4], [true, false]));

// 18. Write a JavaScript program to remove specified elements from the left of a given array of elements.
function removeElementFromLeft(arr, countToRemove) {
  if (countToRemove >= arr.length) return [];

  return arr.slice(countToRemove);
}

console.log(removeElementFromLeft([1, 2, 3, 4, 5], 3));
console.log(removeElementFromLeft([1, 2, 3, 4, 5], 5));
console.log(removeElementFromLeft([1, 2, 3, 4, 5], 0));

// 19. Write a JavaScript program to remove specified elements from the right of a given array of elements.
function removeElementFromRight(arr, countToRemove) {
  if (countToRemove >= arr) return [];

  //   return arr.slice(0, arr.length - countToRemove);
  return arr.slice(countToRemove);
}

console.log(removeElementFromRight([1, 2, 3, 4, 5], -1));

// 20. Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.
function extendColorCode(colorCode) {
  colorCode = colorCode.replace('#', '');

  if (colorCode.length === 3) {
    colorCode = colorCode
      .split('')
      .map(a => a.repeat(2))
      .join('');
  } else {
    if (colorCode.length > 3) {
      return 'ColorCode length is more then 3';
    } else {
      return 'ColorCode length is less then 3';
    }
  }

  return '#' + colorCode;
}

console.log(extendColorCode('Hel'));
console.log(extendColorCode('He'));
console.log(extendColorCode('Hello'));
console.log(extendColorCode('He#1'));

// 21. Write a JavaScript program to get every nth element in a given array.
function getEveryNthElement(arr, n) {
  const result = [];

  for (let i = 0; i < arr.length; i += n) {
    result.push(arr[i]);
  }

  return result;
}

console.log(getEveryNthElement([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

const everyNth = (arr, n) => arr.filter((e, i) => i % n === n - 1);

console.log(everyNth([1, 2, 3, 4, 5, 6], 3));

// 22. Write a JavaScript program to filter out non-unique values in an array.
function filterNonUniqueValue(arr) {
  return arr.filter((element, index, array) => {
    console.log(element);
    console.log(index + 1);
    console.log(array);
    return array.indexOf(element) === array.lastIndexOf(element);
  });
}

console.log(filterNonUniqueValue([1, 2, 2, 3, 4, 5, 4]));

// Another solve
const filterNonUnique = arr =>
  arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e));

console.log(filterNonUnique([1, 2, 3, 4]));
console.log(filterNonUnique([1, 2, 3, 4, 1, 3]));

// 23. Write a JavaScript program to filter out non-unique values in an array, based on a provided comparator function.
function filterNonUniqueValuesWithComparator(arr, comparator) {
  return arr.filter((element, index, array) => {
    // console.log(index);
    // console.log(array)
    for (let i = 0; i < arr.length; i++) {
      // console.log(arr[i])
      // console.log(index)
      // console.log(i)
      // console.log(array[i])
      // console.log(i !== index);
      // console.log(comparator(element, array[i]))
      if (i !== index && comparator(element, array[i])) return false;
    }

    return true;
  });
}

const originalArray = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'John' },
  { id: 4, name: 'Doe' },
];

const comp = (a, b) => a.name === b.name;

console.log(filterNonUniqueValuesWithComparator(originalArray, comp));

// Another way solve
const filterNonUniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));

console.log(
  filterNonUniqueBy(
    [
      { id: 0, value: 'a' },
      { id: 1, value: 'b' },
      { id: 2, value: 'c' },
      { id: 1, value: 'd' },
      { id: 0, value: 'e' },
    ],
    (a, b) => a.id === b.id
  )
);
