// if statement
if (true) {
  console.log('This is true');
}

if (false) {
  console.log('This is Not true');
}

const x = 10;
const y = 1;

if (x > y) {
  console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is not equal to ${y}`);
}

if (x !== y) {
  const z = 20;
  console.log(`z is ${z}`);
}

// Else-If & Nested If
const d = new Date();
const hour = d.getHours();
console.log(hour);

if (hour < 12) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
}

// Nested If
if (hour < 12) {
  console.log('Good Morning');
  if (hour === 0) {
    console.log('Wake Up!');
  }
} else if (hour < 18) {
  console.log('Good Afternoon');
  if (hour === 12) {
    console.log('Break Time');
  }
} else {
  console.log('Good Night');

  if (hour >= 10) {
    console.log('Sleep Time');
  }
}

// Switch statement;

const d1 = new Date(2023, 9, 10, 19, 0, 0);

const month = d1.getMonth();

const hour1 = d1.getHours();

console.log(month);
console.log(hour1);

switch (month) {
  case 1:
    console.log('It is January');
    break;
  case 2:
    console.log('It is Feburay');
    break;
  case 10:
    console.log('It is October');
    break;
  case 9:
    console.log('It is September');
    break;
  default:
    console.log('It is not choose Month');
}

switch (true) {
  case hour1 < 12:
    console.log('Good Morning');
    break;
  case hour1 < 18:
    console.log('Good Afternoon');
    break;
  default:
    console.log('Good Night');
}

// Calculator Challenge
const a = 10;
const b = 11;
const opr = '*';

switch (opr) {
  case '+':
    console.log(a + b);
    break;
  case '-':
    console.log(a - b);
    break;
  case '*':
    console.log(a * b);
    break;
  case '/':
    console.log(a / b);
    break;
  default:
    console.log('Not match operator');
}

function calculator(n1, n2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    case '/':
      result = n1 / n2;
      break;
    default:
      result = 'Not match operator';
  }

  return result;
}

console.log(calculator(12, 6, '+'));
console.log(calculator(12, 6, ''));
console.log(calculator(12, 6, '-'));
console.log(calculator(12, 6, '/'));
