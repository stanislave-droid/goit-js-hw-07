const form = document.querySelector(".login-form");

form.addEventListener("submit", logIn);

function logIn(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email;
  const password = form.elements.password;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("All form fields must be filled in");
    return;
  } else {
    console.log({
      [email.name]: email.value.trim(),
      [password.name]: password.value.trim(),
    });
  }

  event.target.reset();
}
