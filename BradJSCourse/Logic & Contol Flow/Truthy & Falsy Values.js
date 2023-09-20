const email = 'test@gmail.com';

if (email) {
  console.log('You passed in an email');
}

console.log(Boolean(email));

// Falsy Values:
// - false
// - 0
// - '' or "" (Empty String)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x = {};

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = undefined;

if (children !== undefined) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

// Chaecking for empty arrays
const posts = [];

if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts To Lists');
}

// Checkig for empty Object;
const user1 = {
  name: 'Bikram',
};

if (Object.keys(user1).length > 0) {
  console.log('List User');
} else {
  console.log('No User');
}

console.log(Object.keys(user1).length);

// Loose Equality (==)
console.log(false == 0);
console.log(false === 0);
console.log('' == 0);
console.log('' === 0);
console.log(null == undefined);
console.log(null === undefined);

let ab = null;
console.log(typeof ab);
console.log(ab);
