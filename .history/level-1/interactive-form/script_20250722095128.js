const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const successMsg = document.getElementById('successMsg');

// Validate Name
function validateName() {
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required';
    return false;
  }
  nameError.textContent = '';
  return true;
}

// Validate Email
function validateEmail() {
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = 'Invalid email address';
    return false;
  }
  emailError.textContent = '';
  return true;
}

// Validate Phone
function validatePhone() {
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phoneInput.value.trim())) {
    phoneError.textContent = 'Enter 10-digit number';
    return false;
  }
  phoneError.textContent = '';
  return true;
}

// Validate Password
function validatePassword() {
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters';
    return false;
  }
  passwordError.textContent = '';
  return true;
}

// Real-time validation
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
passwordInput.addEventListener('blur', validatePassword);

// Submit validation
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isPasswordValid = validatePassword();

  if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
    successMsg.textContent = 'Form submitted successfully!';
    form.reset();
  } else {
    successMsg.textContent = '';
  }
});
