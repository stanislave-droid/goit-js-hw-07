const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", output);

function output(event) {
  if (event.target.value.trim() != "") {
    span.textContent = event.target.value.trim();
  } else {
    span.textContent = "Anonymous";
  }
}
