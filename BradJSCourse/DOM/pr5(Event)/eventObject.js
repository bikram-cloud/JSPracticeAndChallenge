const img = document.querySelector("img");

// img.addEventListener("click", function (e) {
//   console.log(e.target);
//   console.log(e.currentTarget);
//   e.target.style.backgroundColor = "pink";
// });

function onClick(e) {
  //   console.log(e.target);
  //   console.log(e.currentTarget);
  //   e.target.style.backgroundColor = "black";
  //   console.log(e.type);
  //   console.log(e.timeStamp);
  console.log(e.clientX);
  console.log(e.clientY);
  //   console.log(e.offsetX);
  //   console.log(e.offsetY);
  //   console.log(e.pageX);
  //   console.log(e.pageY);
  //   console.log(e.screenX);
  //   console.log(e.screenY);
}

// document.body.addEventListener("click", function (e) {
//   console.log(e.target);
//   console.log(e.currentTarget);
// });

function onDrag(e) {
  document.querySelector("h1").textContent = `X ${e.clientX} Y ${e.clientY}`;
}

img.addEventListener("click", onClick);
img.addEventListener("drag", onDrag);

// Keyboard Events & Key Properties
const itemInput = document.getElementById("itemInput");

const onKeyPress = (e) => {
  console.log("KeyPress");
};

const onkeyUp = (e) => {
  console.log("keyup");
};

const onkeyDown = (e) => {
  // key
  // console.log(e.key);

  // document.querySelector("h1").innerText = e.key;

  // if (e.key === "Enter") {
  //   alert("You pressed enter");
  // }

  // keyCode
  if (e.keyCode === 13) {
    alert("You pressed enter");
  }

  // code
  // console.log(e.code);

  if (e.code === "Digit1") {
    console.log("You pressed No 1");
  }

  if (e.repeat) {
    console.log(`You are holding down ${e.key}`);
  }

  // console.log(`Shift: ${e.shiftKey}`);
  // console.log(`Control: ${e.ctrlKey}`);
  // console.log(`Alt: ${e.altKey}`);

  if (e.shiftKey && e.key === "K") {
    console.log("You hit shift + K");
  }
};

// itemInput.addEventListener("keypress", onKeyPress);
// itemInput.addEventListener("keyup", onkeyUp);
itemInput.addEventListener("keydown", onkeyDown);
