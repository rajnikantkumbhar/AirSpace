const eyeOpenButton = document.getElementById("eyeOpen");
const eyeCloseButton = document.getElementById("eyeClose");
const passordInput = document.getElementById("password");

eyeOpenButton.addEventListener("click", () => {
  eyeCloseButton.style.display = "block";
  eyeOpenButton.style.display = "none";
  passordInput.type = "text";
});

eyeCloseButton.addEventListener("click", () => {
  eyeOpenButton.style.display = "block";
  eyeCloseButton.style.display = "none";
  passordInput.type = "password";
});
