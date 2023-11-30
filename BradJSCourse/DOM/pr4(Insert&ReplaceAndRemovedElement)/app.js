// insertAdjacentElement Example

function insertElement() {
  const filter = document.querySelector(".filter");

  const h4 = document.createElement("h4");
  h4.textContent = "insertAdjacentElement";

  filter.insertAdjacentElement("beforeend", h4);
}

insertElement();

// insertAdjacentText Example
function insertText() {
  const item = document.querySelector("li:first-child");

  item.insertAdjacentText("beforebegin", "insertAdjacentText");
}

insertText();

// insertAdjacentHTML Example
function insertHTML() {
  const clearBtn = document.querySelector(".clear");

  clearBtn.insertAdjacentHTML("beforeend", "<h2>insertAdjacentHTML</h2>");
}

insertHTML();

// insertBefore Example
function insertBeforeItem() {
  const ul = document.querySelector("ul");

  const li = document.createElement("li");
  li.innerText = "insert Before";

  const thirdItem = document.querySelector("li:nth-child(3)");

  //   ul.insertBefore(li, thirdItem);
  ul.insertBefore(li, thirdItem);
}

insertBeforeItem();

// Challenges
function insertAfterItems(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

// New element to insert
const li = document.createElement("li");
li.innerText = "Insert Me After!";

// Existing element to insert after
const firstItem2 = document.querySelector("li:first-child");

insertAfterItems(li, firstItem2);

// Replace Item
function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");

  console.log(firstItem);
  const li = document.createElement("li");
  li.innerText = "Replace First";

  firstItem.replaceWith(li);
}

replaceFirstItem();

function repalceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(2)");

  secondItem.outerHTML = "<li>Repalced Second</li>";
}

repalceSecondItem();

function replaceAllItem() {
  const list = document.querySelectorAll("li");

  list.forEach((item, index) => {
    // item.outerHTML = `${index + 1} <li>Replace All</li>`;
    // item.innerHTML = `${index} <li>Replace All</li>`;
    if (index === 1) {
      item.innerHTML = "Second Item";
    } else {
      item.innerHTML = "Replace All";
    }
  });
  list.forEach(
    (item, index) =>
      (item.innerHTML =
        index === 1 ? "<li>Second Item</li>" : "<li>All Element</li>")
  );
}

// replaceAllItem();

// Replace child heading
function replaceChildHeading() {
  const header = document.querySelector("header");
  const h1 = document.querySelector("header h1");

  const h3 = document.createElement("h3");
  h3.id = "app-title";
  h3.className = "h2-class";
  h3.innerText = "Shopping List";

  header.replaceChild(h3, h1);

  console.log(h3);
}

replaceChildHeading();

// Remove Element
function removeAddBtn() {
  const addBtn = document.querySelector(".add");
  addBtn.remove();
}

removeAddBtn();

function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");

  ul.removeChild(li);
}

// removeFirstItem();

function removeItem(itemNumber) {
  const ul = document.querySelector("ul");
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li);
}

removeItem(2);

function removeItem2(indexNum) {
  const ul = document.querySelector("ul");
  const li = document.querySelectorAll("li")[indexNum];

  ul.removeChild(li);
}

removeItem2(0);

function removeItem3(indexNum) {
  const li = document.querySelectorAll(".li");
  li[indexNum + 1].remove();
  console.log(indexNum);
}

removeItem3(2);

// Working With Styles & Classes
const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items1 = document.querySelectorAll(".item-list .li");
const btn = document.querySelector(".btn");

btn.onclick = run;

function run() {
  // className
  // console.log(itemList.className);
  // text.className = "dark";

  // classList
  // console.log(itemList.classList);
  // itemList.classList.forEach((c) => console.log(c));

  // Add class
  // text.classList.add("dark");
  // text.classList.remove("card");

  // Toggle class
  // text.classList.toggle("hidden");

  // replace class
  // text.classList.replace("card", "dark");

  // Change style
  // itemList.style.lineHeight = "3";

  items1.forEach((item, index) => {
    item.style.color = "red";

    if (index === 2) {
      item.style.color = "blue";
    }
  });
}
