// 1 Document Element Properties

// console.log('Bikram');

// console.log(window);

// console.dir(window.document);

// console.log(document.body.innerHTML);

// console.log(document.links[0]);

// document.body.innerHTML = '<h2>Hello World</h2>';

// document.write('Hello from JS');

// console.log(document.getElementById('main'));

// const main = document.getElementById('main');
// const main1 = document.querySelector('#main');

// main1.innerHTML = '<h2>Hello</h2>';

let output;

output = document.all;
output = document.all.length;

output = document.documentElement;

output = document.head;
output = document.body;

output = document.head.children[0];
output = document.body.children[0];

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

output = document.links;
output = document.links[0];
output = document.links[0].href;
output = document.links[0].href = 'https://facebook.gmail.com';
output = document.links[0].id = 'facebook-link';
output = document.links[0].className = 'facebook-class fcb';
output = document.links[0].classList;

output = document.images;
output = document.images[0];
output = document.images[0].src;
output = document.images[0].alt;

// convert forms in array
const forms = Array.from(document.forms);
// forms.forEach(form => console.log(form));

// console.log(output);

// 2 DOM Selectors - Single Elements
console.log(document.getElementById('id1'));
console.log(document.getElementById('id1').id);
console.log(document.getElementById('id1').className);
console.log(document.getElementById('id1').getAttribute('id'));

// Set attributes
console.log((document.getElementById('id1').id = 'id2'));

document.getElementById('id1').setAttribute('class', 'classID1');

const classID = document.getElementById('id1');

console.log(classID);
