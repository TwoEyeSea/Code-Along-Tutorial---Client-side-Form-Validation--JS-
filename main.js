const form = document.querySelector("#form");
const username_inp = document.querySelector("#username");
const email_inp = document.querySelector("#email");
const password_inp = document.querySelector("#password");
const password2_inp = document.querySelector("#password2");
const checkbox_inp = document.querySelector("#checkbox");

checkbox_inp.addEventListener("click", () => {
  if (password_inp.type === "password") {
    password_inp.type = "text";
  } else {
    password_inp.type = "password";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username_inp.value.trim();
  const emailValue = email_inp.value.trim();
  const passwordValue = password_inp.value.trim();
  const password2Value = password2_inp.value.trim();

  if (usernameValue === "") {
    // show error
    // add error class
    setErrorFor(username_inp, "Username cannot be blank");
  } else {
    // add success class
    setSuccessFor(username_inp);
  }

  if (emailValue === "") {
    // show error
    // add error class
    setErrorFor(email_inp, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email_inp, "This email is not valid");
  } else {
    // add success class
    setSuccessFor(email_inp);
  }

  if (passwordValue === "") {
    // show error
    // add error class
    setErrorFor(password_inp, "Password cannot be blank");
  } else if (passwordValue.length < 7) {
    setErrorFor(password_inp, "Your password must be a minimum of 7 characters");
  } else {
    // add success class
    setSuccessFor(password_inp);
  }

  if (password2Value === "") {
    // show error
    // add error class
    setErrorFor(password2_inp, "Password verification field cannot be blank");
  } else if (!passwordsMatch(password2Value, passwordValue)) {
    setErrorFor(password2_inp, "Your password does not match");
  } else {
    // add success class
    setSuccessFor(password2_inp);
  }
}

function setErrorFor(input, message) {
  if (input === password2_inp) {
  }
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //add error message inside small
  small.innerText = message;

  //add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  // add success class
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    email
  );
}

function passwordsMatch(input1, input2) {
  return input1 === input2;
}
