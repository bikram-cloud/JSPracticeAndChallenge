const formSubmit = document.querySelector(".form");
const userName = document.querySelector(".userName").value;
const email = document.querySelector(".email").value;

function onSubmit(e) {
  e.preventDefault();

  if (userName === "" || email === "") {
    alert("User Name and email is blanked");
    return;
  }

  console.log(userName, email);
}

function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(formSubmit);

  //   const item = formData.get("userName");
  //   const email = formData.get("userEmail");

  //   console.log(item, email);

  const entries = formData.entries();

  for (let entry of entries) {
    console.log(entry);
  }
}

formSubmit.addEventListener("submit", onSubmit2);
