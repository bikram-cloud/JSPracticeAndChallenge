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
output = document.links[0].href = "https://facebook.gmail.com";
output = document.links[0].id = "facebook-link";
output = document.links[0].className = "facebook-class fcb";
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
console.log(document.getElementById("id1"));
console.log(document.getElementById("id1").id);
console.log(document.getElementById("id1").className);
console.log(document.getElementById("id1").getAttribute("id"));

// Set attributes
console.log((document.getElementById("id1").id = "id2"));

// document.getElementById('id1').setAttribute('class', 'classID1');

const classID = document.getElementById("id1");

// console.log(classID);

// Get/change content
const title1 = document.getElementById("app-title");

console.log(title1);
console.log(title1.textContent);
title1.textContent = "Hello World";
title1.innerText = "Hello Again";
title1.innerHTML = "<strong>DOM Intro2</strong>";

// Change Styles
title1.style.color = "red";
title1.style.backgroundColor = "black";
title1.style.padding = "10px";
title1.style.borderRadius = "10px";

// document.querySelector()
console.log(document.querySelector("img"));
console.log(document.querySelector(".container"));
console.log(document.querySelector('input[type="text"]'));

console.log(document.querySelector("li:nth-child(2)").innerText);
const secondLi = document.querySelector("li:nth-child(2)");
secondLi.innerText = "Apple Edit";
// console.log(document.querySelector("li:nth-child(2)").innerText);
secondLi.style.color = "red";

// Use these methods on other elements
const list = document.querySelector("ul");
const firstItem = list.querySelector("li");
// console.log(firstItem.textContent);
firstItem.style.color = "blue";

// querySelectorAll()
const listItems = document.querySelectorAll("li");
// console.log(listItems);
// console.log(listItems[1].innerText);
// console.log(listItems[3].innerText);

listItems[1].style.color = "red";

listItems.forEach((item, index) => {
  item.style.color = "blue";

  if (index === 1) {
    item.remove();
  }

  if (index === 0) {
  }
});

const listItems2 = document.getElementsByClassName("item");

// console.log(listItems2);

const listItemArray = Array.from(listItems2);

listItemArray.forEach((list) => {
  // console.log(list.innerText);
});

const listItems3 = document.getElementsByTagName("li");
console.log(listItems3);
