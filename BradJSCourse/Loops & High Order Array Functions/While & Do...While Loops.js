// let i = 21;

// while (i <= 20) {
//   console.log(`Number ${i}`);
//   i++;
// }

// Loop over array
const arr = [10, 20, 30, 40];

// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// Nesting while loops
// while (i <= 5) {
//   console.log(`Number ${i}`);

//   let j = 1;
//   while (j <= 5) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }

//   i++;
// }

// do while loop
// do {
//   console.log(`Number ${i}`);
//   i++;
// } while (i <= 20);

// FizzBuzz Challenge
for (let i = 1; i <= 100; i++) {
  console.log(`Number ${i}`);
}

let n = 1;
// while (i <= n) {
//   console.log(`Number ${i}`);
//   i++;
// }

do {
  console.log(`Number ${n}`);
  n++;
} while (n <= 100);

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else {
    console.log(i);
  }
}

// While loop
// let z = 1;
// while (z <= 100) {
//   if (z % 3 === 0 && z % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (z % 3 === 0) {
//     console.log('Fizz');
//   } else if (z % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(z);
//   }

//   z++;
// }

// do while loop
let z = 1;
do {
  if (z % 3 === 0 && z % 5 === 0) {
    console.log('FizzBuzz');
  } else if (z % 3 === 0) {
    console.log('Fizz');
  } else if (z % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(z);
  }

  z++;
} while (z <= 100);
