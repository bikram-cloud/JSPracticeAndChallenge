let x;

// Array Literal
const numbers = [10, 20, 8, 2, 3, 50];
const mixed = [null, true, 'Hello', 2];

// Array Constructor
const fruits = new Array('Apple', 'Grape', 'Orange');

x = numbers[0];
x = numbers[numbers.length - 1];
x = numbers[0] + numbers[numbers.length - 1];

console.log(x);

fruits[fruits.length - 1] = 'Banana';

fruits[5] = 'Strawberry';

fruits[fruits.length] = 'Peach';

console.log(fruits);

// Array Methods
const arr = [10, 33, 300, 11, 65];

// arr.push(99);

// arr.unshift(101);

// arr.pop();

// arr.shift();

// arr.reverse();

a = arr.includes(10);

a = arr.indexOf(10);

a = arr.slice(1, 4);

a = arr.slice(3, 4);

console.log(a, arr);

// a = arr.splice(1, 4)

// a = arr.splice(3, 2)

a = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(a);

let c;

const fruites = ['Apple', 'Orange', 'Pear'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

fruites.push(berries);

c = fruites[3][2];

const allFruits = [fruites, berries];

c = allFruits;

console.log(c);

const arr1 = [1, 2, 3, 4, 5];

arr1.push(6);

const result1 = arr1.reverse();

console.log(result1);

const arr2 = [1, 2, 3, 4, 5];
const arr3 = [5, 6, 7, 8, 9, 10];

const arr4 = arr2.slice(0, 4).concat(arr3);

const arr5 = [...arr2, ...arr3];

arr5.splice(4, 1);

console.log(arr4);

console.log(arr5);
