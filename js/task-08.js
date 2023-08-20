const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formObject = {};

  formData.forEach((value, name) => {
    formObject[name] = value;
  });

  if (!formObject.email || !formObject.password) {
    alert("All fields must be filled!");
  } else {
    console.log(formObject);
    loginForm.reset();
  }
});
