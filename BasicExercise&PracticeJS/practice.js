// Array Method
// length
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.length);

// toString()
const strArr = [1, 2, 3, 4, 5, 6, 7, 100, 'Bikram', 'Neupaen'];
console.log(strArr.toString());

// join()
const joinArr = ['Bikram', 'Neupane', 'Rojina', 'Sapkota'];
console.log(joinArr.join(' '));

// pop()
const fruitsArr = ['Apple', 'Orange', 'Banana', 'Graps', 'Mango'];
console.log(fruitsArr.pop());
console.log(fruitsArr);

// push()
const fruitsArr2 = ['Apple', 'Orange', 'Banana', 'Graps', 'Mango'];
console.log(fruitsArr2.push('Pinapil'));
console.log(fruitsArr2);

// shift()
const fruitsArr3 = ['Apple', 'Orange', 'Banana', 'Graps', 'Mango'];
console.log(fruitsArr3.shift());
console.log(fruitsArr3);

// unshift()
const fruitsArr4 = ['Apple', 'Orange', 'Graps', 'Mango'];
console.log(fruitsArr4.unshift('Banana'));
console.log(fruitsArr4);

// splice (start, deleteCount, item1, item2, ..., itemN)
const fruitsArr5 = ['Apple', 'Orange', 'Graps', 'Mango'];
console.log(fruitsArr5.splice(0, 2, 'strawberries', 'watermelons'));
console.log(fruitsArr5);

// slice(start, end)
const fruitsArr6 = ['Apple', 'Orange', 'Graps', 'Mango'];
console.log(fruitsArr6.slice(1, 2));
console.log(fruitsArr6);

// flat(creates a new array with all sub-array elements concatenated into it recursively up to the specified depth)
const flatArray = ['Nepal', 'Japan', 'USA', ['Kathmandu', 'Tokyo', 'NewWork']];
console.log(flatArray.flat());

// indexOf(searchElement, fromIndex) returns the first index at which a given element can be found in the array, or -1 if it is not present
const indexArr = ['Nepal', 'Japan', 'UAE', 'Canada', 'India', 'China'];
console.log(indexArr.indexOf('Japan'));

// more complex example in indexOf()
function updateVegetables(veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log(`New veggies colleciton is: ${veggies}`);
  } else {
    console.log(`${veggie} aleady exists the veggies collection`);
  }
}

const veggies = ['Potato', 'Onion', 'Tomato', 'Chillies'];

updateVegetables(veggies, 'potato');

// lastIndexOf(searchElement, fromIndex)
const lastIndex = ['Potato', 'Onion', 'Tomato', 'Chillies', 'Onion'];
console.log(lastIndex.lastIndexOf('Onion'));

// includes(searchElement, fromIndex)
const includesMethod = ['Potato', 'Onion', 'Tomato', 'Chillies', 'Onion'];
console.log(includesMethod.includes('Potato'));

// find(callback, thisArg)
function findArr(arr, val) {
  return arr.find(ar => ar === val);
}

const ar = ['Nepal', 'Japan', 'India', 'USA'];

console.log(findArr(ar, 'USA'));

// findIndex(callback, thisArg)
function findIndx(arr, val) {
  return arr.findIndex(ar => ar === val);
}

const ar2 = ['Nepal', 'Japan', 'India', 'USA'];
console.log(findIndx(ar2, 'India'));

// filter(callback, thisArg)
function filterFN(arr) {
  return arr.filter(ar => ar === -1);
}

console.log(filterFN([1, 2, 10, 15, 20, 50, 200, -1, 'a', 1000, 0]));

// map(callback, thisArg)
const numbers = [1, 4, 49, 91, 100, 150, 121];
const roots = numbers.map(num => Math.sqrt(num).toFixed(2));

console.log(numbers);
console.log(roots);

// forEach(callback, thisArg)∏
// reduceRight(callback, initialValue)
// some(callback, thisArg)
function someFN(arr) {
  return arr.some(ar => ar => 15);
}
console.log(someFN([1, 0, 10, 5, 15]));

// every(callback, thisArg)
function everyFN(arr) {
  return arr.every(ar => ar > 1);
}
console.log(everyFN([1, 2, 3, 4, 5]));
// sort(compareFunction)
// reverse()
// fill(value, start, end)
// copyWithin(target, start, end)

const arr1 = [1, 2, 3, 4];
const arr2 = [10, 20, 30, 40];

console.log([...arr1, ...arr2]);
console.log({ ...arr1, ...arr2 });

for (let i = 1; i <= 10; i++) {
  let star = '*';
  for (let j = 1; j < i; j++) {
    star = star + '*';
  }
  console.log(star);
}

function abc(arr) {
  let result = 0;
  for (i = 1; i < arr.length; i++) {
    console.log(arr[i]);
    const res = result + Math.abs(arr[i] - arr[i - 1]);
    // console.log(arr[i - 1]);
    // console.log(arr[i] - arr[i - 1]);
    console.log(res);
  }
  return result;
}

abc([0, 1, 2, 3, 4, -5]);

// 97. Write a JavaScript program to find the shortest possible string. This can be converted into a string and converted into a palindrome by adding characters to the end of it.
function buildPalindrome(str) {
  let flag;
  for (let i = str.length; ; i++) {
    console.log(str[i]);
  }
}

buildPalindrome(['a', 'b']);
