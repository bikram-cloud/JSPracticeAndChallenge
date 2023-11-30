const button = document.querySelector("form button");
// const div = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");

button.addEventListener("click", () => {
  alert("Button was clicked");
});

// div.addEventListener("click", () => {
//   alert("Div was clicked");
// });

form.addEventListener("click", () => {
  alert("Form was clicked");
});

const list = document.querySelector("ul");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

list.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "red";
  }
});
