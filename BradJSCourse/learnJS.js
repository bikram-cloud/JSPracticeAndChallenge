let x;
console.log(x);
console.log(typeof x);

const num = new Number(5);

console.log(num);
console.log(typeof num);

x = num.toString();

console.log(x);

console.log(typeof x);

x = num.toFixed(2);

console.log(x);

x = num.toLocaleString('ja-JP');

console.log(x);

x = num.valueOf();

console.log(x);

x = Number.MAX_VALUE;

console.log(x);

x = Number.MIN_VALUE;

console.log(x);

// Math
console.log(Math);
console.log(typeof Math);

x = Math.sqrt(10).toFixed(2);

console.log(x);

x = Math.abs(-3);

console.log(x);

x = Math.round(4.2);
console.log(x);

x = Math.ceil(4.2);
console.log(x);

x = Math.floor(4.2);
console.log(x);

// Date Object Methods

let a;

const d = new Date();

a = d.toDateString();

a = d.toISOString();

a = d.valueOf();

a = d.getTime();

a = d.getFullYear();

a = d.getMonth() + 1;

a = d.getDay();

a = d.getDate();

a = d.getSeconds();

a = d.getTime();

a = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}-${d.getDay()}`;

a = Intl.DateTimeFormat('jp-JP').format(d);

a = Intl.DateTimeFormat('np-NP').format(d);

a = d.toLocaleDateString('default', {
  month: 'long',
  weekday: 'long',
  year: 'numeric',
});

console.log(a);
