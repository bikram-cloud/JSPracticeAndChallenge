const heading = document.querySelector("h1");
const itemInput = document.querySelector(".itemInput");
const priorityInput = document.querySelector(".priorityInput");
const checkBox = document.querySelector(".checkbox");

function onInput(e) {
  console.log(e.target.value);
  heading.innerText = e.target.value;
}

function onChecked(e) {
  console.log(e.target.checked);
  const isChecked = e.target.checked;
  heading.innerText = isChecked ? "Checked" : "Not Checked";
}

function onFocus() {
  console.log("Input is focused");
  itemInput.style.outlineStyle = "solid";
  itemInput.style.outlineWidth = "1px";
  itemInput.style.outlineColor = "blue";
}

function onBlur() {
  console.log("Input is not focused");
  itemInput.style.outlineStyle = "none";
}

itemInput.addEventListener("input", onInput);
priorityInput.addEventListener("change", onInput);
checkBox.addEventListener("input", onChecked);
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);
