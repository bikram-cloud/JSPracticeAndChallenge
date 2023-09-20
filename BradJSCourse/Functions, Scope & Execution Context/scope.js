// alert('Hello');
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// Global scope
const x = 100;

console.log(`${x} in global`);

function run() {
  console.log('Hello');
  console.log(x, 'in function');
}

run();

if (true) {
  console.log(x, 'in block');
}

// Function scope
function add() {
  const x = 1;
  const y = 50;
  console.log(x + y);
}

add();

// Block scope

const y = 200;

if (true) {
  console.log(y);
}

if (true) {
  const y = 12;
  console.log(y);
}

console.log(y);

function run1() {
  var d = 100;
  console.log(d);
}

run1();
