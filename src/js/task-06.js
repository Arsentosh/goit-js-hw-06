const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const dataLength = input.getAttribute("data-length");
  const inputValue = input.value.trim();

  if (inputValue.length === Number(dataLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
