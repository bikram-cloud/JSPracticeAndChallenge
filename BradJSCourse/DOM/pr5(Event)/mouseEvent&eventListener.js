const addBtn = document.querySelector(".add");
const clearBtn = document.querySelector(".clear");
const itemList = document.querySelector("ul");
const items = itemList.querySelectorAll("li");

// adddEventListener()

// addBtn.addEventListener("click", () => {
//   alert("Add items");
// });

// clearBtn.addEventListener("click", () => {
//   alert("Clear Items");
// });

function onClear() {
  // itemList.innerHTML = "";

  // items.forEach((item) => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// clearBtn.addEventListener("click", onClear);

// setTimeout(() => clearBtn.click(), 5000);

// Mouse Event
const img = document.querySelector("img");

const onClick = () => console.log("click event");

const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== "purple") {
    document.body.style.backgroundColor = "purple";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
};

const onRightClick = () => console.log("right click event");

const onMouseDown = () => console.log("mouse down event");

const onMouseUp = () => console.log("mouse up event");

const onMouseWheel = () => console.log("mouse wheel event");

const onMouseOver = () => console.log("mouse over event");

const onMouseOut = () => console.log("mouse out event");

const onDragStart = () => console.log("drag start event");

const onDrag = () => console.log("drag event");

const onDragEnd = () => console.log("drag end event");

// Event Listeners
img.addEventListener("click", onClick);
img.addEventListener("dblclick", onDoubleClick);
img.addEventListener("contextmenu", onRightClick);
img.addEventListener("mousedown", onMouseDown);
img.addEventListener("mouseup", onMouseUp);
img.addEventListener("wheel", onMouseWheel);
img.addEventListener("mouseover", onMouseOver);
img.addEventListener("mouseout", onMouseOut);
img.addEventListener("dragstart", onDragStart);
img.addEventListener("drag", onDrag);
img.addEventListener("dragend", onDragEnd);

// The Event Object
