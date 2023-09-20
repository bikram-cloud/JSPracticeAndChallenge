function sayHello() {
  console.log('Hello World');
}

sayHello();

function add(num1, num2) {
  console.log(num1 + num2);
}

add(10, 11);

function subtract(num1, num2) {
  return num1 - num2;
}

console.log(subtract(10, 11));

// Default params
function registerUser(user) {
  if (!user) user = 'Bat';

  return user + ' is registered';
}

console.log(registerUser('Bikram'));

// Rest Params
function sum(...numbers) {
  let total = 0;
  console.log(numbers);

  for (const num of numbers) {
    console.log(num);
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));

// Object as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'Bikram',
};

console.log(loginUser(user));

function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];
  console.log(item);
}

getRandom([10, 20, 50, 5, 100]);

// Nested function
function first() {
  const x = 100;

  function second() {
    const y = 51;
    console.log(x + y);
  }

  second();
}

first();

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }
}

// Function declaration
function addDollarSign(value) {
  // return '$' + value;
  return `$${value}`;
}

console.log(addDollarSign(122));

// Function Expression
const addPlussSign = function (value) {
  return `+${value}`;
};

console.log(addPlussSign(300));

// Arrow Function
function add(a, b) {
  return a + b;
}

console.log(add(10, 111));

const add1 = (a, b) => a + b;

console.log(add1(10, 111));

const double = a => a * 2;

console.log(double(4));

// Returning an object
const createObj = () => ({
  name: 'Bikram',
  country: 'Nepal',
});

console.log(createObj());

// IIFE(Immediately Invoked Function Expressions)

(function () {
  const user = 'Bikram';
  console.log(user);

  const hello = () => console.log('Hello');
  hello();
})();

(function (name) {
  console.log(`Hello ${name}`);
})('Bikram');

// function challenge

// function getCelsius(f) {
//   return (f - 32) * 5/9;
// }

const getCelsius = f => ((f - 32) * 5) / 9;

console.log(getCelsius(3));
console.log(`The temp is ${getCelsius(3)}\xB0C`);

const minMax = array => {
  const max = Math.max(...array);
  const min = Math.min(...array);

  return {
    minValue: min,
    maxValue: max,
  };
};

console.log(minMax([1, 20001, 2, 4, 11, 223, 1000]));

const ar = [1, 2, 3, 4];

console.log(ar);
console.log(...ar);

(function (len, wid) {
  console.log(len * wid);
})(10, 20);

// Anotherway
((len, wid) => {
  const area = len * wid;

  const output = `The area of a rectangle width a length length of ${len} and a width of ${wid} is ${area}`;

  console.log(output);
})(12, 10);
