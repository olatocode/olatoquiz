// let input = document.querySelector("#input");
// let result = document.querySelector("#result");
// let form = document.getElementById("form");
let errorElement = document.getElementById("error");

// document.addEventListener("submit", (e) => {
//   let messages = [];
//   if (input.value === "" || Symbol || input.value == null || Number) {
//     messages.push("username is required");
//   }
//   if (messages.length > 0) {
//     e.preventDefault();
//     errorElement.innerHTML = messages.join(", ");
//   }

// });

// function validate() {
//   let messages = [];
//   if (input.value === "" || Symbol || input.value == null || Number) {
//     messages.push("username is required");
//     errorElement.innerHTML = messages.join(", ");
//     return false;
//   }
//     return true;
// }

// input.addEventListener("change", function () {
//   result.textContent = `Hello, ${this.value}`;
// })

function handleSubmit() {
  let name = document.forms["myForm"]["input"];

  if (name.value === "") {
    window.alert("Username must be filled out");
  name.focus();
    return false;
  }

  let input = document.getElementById("input").value;
  // to set into local storage
  /* localStorage.setItem("NAME", name);
  localStorage.setItem("SURNAME", surname); */

  sessionStorage.setItem("INPUT", input);
  //sessionStorage.setItem("SURNAME", surname);

  return;
}
