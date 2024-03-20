const loginBtn = document.querySelector(".login-btn");
const modalBox = document.querySelector(".modal-box");
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const switchToLogin = document.getElementById("switch-to-login");
const switchToSignUp = document.getElementById("switch-to-signup");
const closeBtn = document.querySelector(".close-btn");
const formContainer = document.querySelector(".form-container");
const showPassBtns = document.querySelectorAll(".show-pass");

// EVENT LISTENERS
loginBtn.addEventListener("click", () => {
  modalBox.style.cssText = `
    visibility: visible;
    opacity: 1;
  `;
  formContainer.style.cssText = `
    transform: scale(1);
    opacity: 1;
  `;
});

closeBtn.addEventListener("click", () => {
  modalBox.style.cssText = "visibility: collapse; opacity: 0";
  formContainer.style.cssText = `
    transform: scale(1.3);
    opacity: 0;
  `;
});

switchToLogin.addEventListener("click", () => {
  signupForm.style.display = "none";
  loginForm.style.display = "block";
});

switchToSignUp.addEventListener("click", () => {
  signupForm.style.display = "block";
  loginForm.style.display = "none";
});

showPassBtns.forEach((showBtn) =>
  showBtn.addEventListener("click", (e) => {
    let currentBtn = e.currentTarget;
    let inputField = currentBtn.parentElement.querySelector("input");

    if (currentBtn.className.includes("fa-eye-slash")) {
      currentBtn.classList.replace("fa-eye-slash", "fa-eye");
      inputField.type = "text";
    } else {
      currentBtn.classList.replace("fa-eye", "fa-eye-slash");
      inputField.type = "password";
    }
  })
);

document.addEventListener("keydown", (e) => {
  if (e.key.match("Escape")) {
    modalBox.style.cssText = "visibility: collapse; opacity: 0";
    formContainer.style.cssText = `
      transform: scale(1.3);
      opacity: 0;
  `;
  }
});
