const password = document.getElementById("password");
const generatePassword = document.getElementById("generatePassword");
const copyPassword = document.getElementById("copyPassword");
const passwordLength = document.getElementById("passwordLength");
const upperCasePassword = document.getElementById("upperCasePassword");
const lowercasePassword = document.getElementById("lowercasePassword");
const numberPassword = document.getElementById("numberPassword");
const symbolPassword = document.getElementById("symbolPassword");

const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

generatePassword.addEventListener("click", () => {
  let characters = "";
  let generatedPassword = "";

  if (upperCasePassword.checked) {
    characters += upperCaseChars;
  }
  if (lowercasePassword.checked) {
    characters += lowerCaseChars;
  }
  if (numberPassword.checked) {
    characters += numberChars;
  }
  if (symbolPassword.checked) {
    characters += symbolChars;
  }

  if (characters.length === 0) {
    alert("Please select at least one character type!");
    return;
  }

  const length = parseInt(passwordLength.value);

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    generatedPassword += characters[randomIndex];
  }

  password.value = generatedPassword;
});

copyPassword.addEventListener("click", () => {
  if (password.value.length > 0) {
    password.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  } else {
    alert("Generate a password first!");
  }
});