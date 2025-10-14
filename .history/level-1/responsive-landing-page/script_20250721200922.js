const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const passwordError = document.getElementById("passwordError");
  const successMsg = document.getElementById("successMsg");

  let valid = true;

  // Clear old messages
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";
  successMsg.textContent = "";

  // Validate Name
  if (name === "") {
    nameError.textContent = "Name is required";
    valid = false;
  }

  // Validate Email
  if (!email.match(/^\S+@\S+\.\S+$/)) {
    emailError.textContent = "Invalid email";
    valid = false;
  }

  // Validate Phone
  if (!phone.match(/^\d{10}$/)) {
    phoneError.textContent = "Enter 10 digit phone number";
    valid = false;
  }

  // Validate Password
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  }

  if (valid) {
    successMsg.textContent = "Form submitted successfully!";
  }
});
