// Traversing The DOM

let output;

// Get child elements
const parent = document.querySelector(".parent");

output = parent.children;

output = parent.children;

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[2].innerText = "Child Three";
parent.children[2].style.color = "blue";

parent.firstElementChild.innerText = "Children One";
parent.lastElementChild.innerText = "Children Three";

// Get parent elements form a child

const child = document.querySelector(".child");

output = child.parentElement;

// child.parentElement.style.border = "1px solid #ccc";

// Sibling elements
const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = "red";
secondItem.previousElementSibling.style.color = "orange";

// Traversing The DOM - Nodes
const parent1 = document.querySelector(".parent");

output = parent1.childNodes;
output = parent1.childNodes[0].nodeName;
output = parent1.childNodes[0].textContent;
output = parent1.childNodes[3].textContent;
output = parent1.childNodes[3].outerHTML;

parent1.childNodes[3].innerText = "New Children One";

parent1.lastChild.innerText = "Hello";

// Parent node
const child1 = document.querySelector(".child");

output = child1.parentNode;
output = child1.parentElement;

child1.parentNode.style.backgroundColor = "#ccc";
child1.parentNode.style.padding = "20px";

child1.parentElement.style.backgroundColor = "#ccc";
child1.parentElement.style.padding = "20px";

// Sibilings
const secondItem1 = document.querySelector(".child:nth-child(2)");

output = secondItem.nextSibling;

console.log(output);
