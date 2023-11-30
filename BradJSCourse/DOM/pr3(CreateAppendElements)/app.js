// const divEL = document.querySelector(".container");

const div = document.createElement("div");
div.className = "myDivClass";
div.id = "myDivId";
div.setAttribute("title", "My Title");

// div.innerText = "Hello World";

const text = document.createTextNode("Hello world");
div.append(text);

// document.body.append(div);

// console.log(div);

// Simple Challenge
// Quickly and Dirty
function createListItem(item) {
  const li = document.createElement("li");

  li.innerHTML = `${item}
    <button>Delete</button>
    `;

  document.body.append(li);
}

// createListItem("Fruit");

// Clean & Performant
function createNewItem(item) {
  const li = document.createElement("li");
  li.append(document.createTextNode(item));

  const button = createButton("btn", "Add");

  li.appendChild(button);

  document.body.append(li);
}

function createButton(classes, text) {
  const button = document.createElement("button");
  button.classList = classes;
  button.innerText = text;

  return button;
}

createNewItem("Meat");
createNewItem("Fruit");
createNewItem("Rice");
createNewItem("Tree");
createNewItem("Green");
