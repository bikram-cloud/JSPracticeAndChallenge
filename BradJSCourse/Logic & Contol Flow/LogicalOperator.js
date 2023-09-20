console.log(10 < 20 && 30 > 29 && 101 > 100);

console.log(10 > 20 || 30 < 29);

console.log(101 > 99 || 80 > 90);

const posts = ['Hello', 'Hey'];

posts.length > 0 && console.log(posts[0]);

let b = 10 || 20;
b = 0 || null || '' || undefined;
b = 0 || 20;
b = 10 || 9;

b = 10 && 15;
b = 50 && 1;

console.log(b);

// ?? - Return the right side operand when the left is null or undefined

let c;

c = 10 ?? 20;

c = null ?? 100;

c = undefined ?? 101;

c = 0 ?? 12;

console.log(c);

let d = false;

if (!d) {
  d = 10;
}

console.log(d);

let e = 20;

if (e) {
  e = 30;
}

e && 30;

console.log(e);

let f = 10;

if (f === null || f === undefined) {
  f = 20;
}

// f ??= 20;

console.log(f);

// Ternary operator method
const age = 15;

// Using an if statement
if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can not vote!');
}

// Using a ternary operator
age >= 18 ? console.log('You can vote!') : console.log('You can not vote!');

// Assigning a conditional value to a variable
const canDrink = age >= 18 ? true : false;

const canDrink2 = age >= 18 ? 'You can drink!' : 'You can not drink';

console.log(canDrink);

console.log(canDrink2);

// Multiple statement

const auth = true;
let redirect;

if (auth) {
  // alert('Welcome to the dashboard')
  redirect = '/dashboard';
} else {
  // alert('Access Denied')
  redirect = '/login';
}

console.log(redirect);

const redirect2 = auth
  ? ('/dashboard', 'Welcome to the dashboard')
  : ('/login', 'Access Denied');

console.log(redirect2);

auth ? console.log('Welcome to the dashboard') : null;

auth && console.log('Welcome to the dashboard');
